import { useEffect, useState, type FC } from "react";
import { Modal } from "react-bootstrap";
import { turso } from "../database";
import type { Row } from "@libsql/client";
import Swal from "sweetalert2";

interface Props {
    show: boolean;
    handleClose: () => void;
}

const db = async (doc: string) => {
    return await turso.execute({ sql: "SELECT * FROM usuario WHERE documentoasociado = ?", args: [doc] });
}

export const ModalAsistencia: FC<Props> = ({ show, handleClose }) => {
    const [user, setUser] = useState<Row[] | null>();
    const [doc, setDoc] = useState('');
    const [ceremonia, setCeremonia] = useState<boolean>(false);
    const [fiesta, setFiesta] = useState<boolean>(false);

    const [hasInvitation, setHasInvitation] = useState(false);
    const [confirmed, setConfirmed] = useState(false);

    const clear = () => {
        setHasInvitation(false);
        setCeremonia(false)
        setFiesta(false)
        setConfirmed(false)
        setDoc('');
        setUser(null)
    }

    useEffect(() => {
        clear();

        if (doc === '') return;
        db(doc).then((res) => {
            if (res.rows.length === 0) {
                setUser(null)
                return;
            }
            const user = res.rows;

            if (user[0].ceremonia !== ''){
                setCeremonia(true)
                setFiesta(true)
                setConfirmed(true)
            };

            setUser(user);
            setHasInvitation(true);
        })
    }, [doc])

    const confirmAssist = async () => {
        await turso.execute({
            sql: "UPDATE usuario SET ceremonia = ?, fiesta = ? WHERE documentoasociado = ?",
            args: [ceremonia ? 'Si' : 'No', fiesta ? 'Si' : 'No', doc],
        });

        Swal.fire({
            title: '¡Asistencia confirmada!',
            text: 'Gracias por confirmar tu asistencia.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });

        clear();
        handleClose();
    }

    const close = () => {
        clear();
        handleClose();
    }

    return (
        <Modal show={show} onHide={close} id="modalAsistencia" tabIndex={-1} style={{ display: `${show ? 'block' : 'none'}` }}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">

                    <div className="modal-header">
                        <h5 className="modal-title">¿Confirma tu invitación?</h5>
                    </div>

                    <div className="modal-body">
                        <div className="formulario-content">
                            <form id="formAsistencia">
                                <div className="form-group">
                                    <input type="text" value={doc} onChange={(e) => setDoc(e.target.value)} className="form-control" id="nombreAsistente" name="nombre" placeholder="Ingrese su código de reserva" />
                                </div>

                                <input id="eventoAsistencia" type="hidden" name="evento" value="Ceremonia" />
                            </form>
                        </div>

                        <div>
                            {user && user.length > 0 && (
                                <div className="formulario-content fw-bold title mt-4 mb-4">
                                    {`Cupo Máximo: ${user[0].cupomaximo}`}
                                </div>
                            )}
                        </div>

                        {user && user.length > 0 && (
                            <div className="formulario-content d-flex justify-content-center">
                                <table>
                                    <tbody>
                                        {user.map((item) => (
                                            <tr key={`${item.incremento}`}>
                                                <th className="fs-4">Invitado:{}</th>
                                                <td><h6 className="title small fs-1">{`  ${item.nombre}`}</h6></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {hasInvitation && !confirmed && (
                            <div className="text-start mt-5 w-100">
                                <h2 className="title text-center w-100 mb-3">¿A qué evento asistirás?</h2>
                                <div className="form-check form-switch d-flex align-items-center justify-content-between mb-3">
                                    <button type="button" onClick={() => setFiesta(!fiesta)} className="boton w-50 m-0 p-0 text-capitalize fs-1 title"> Fiesta</button>
                                    <strong className="fs-3">{fiesta ? 'Si' : 'No'}</strong>
                                </div>

                                <div className="form-check form-switch d-flex align-items-center justify-content-between">
                                    <button type="button" onClick={() => setCeremonia(!ceremonia)} className="boton w-50 m-0 p-0 fs-1 text-capitalize title"> Ceremonia</button>
                                    <strong className="fs-3">{ceremonia ? 'Si' : 'No'}</strong>
                                </div>
                            </div>
                        )}
                        {confirmed && (
                            <div className="text-start mt-5 w-100">
                                <h2 className="title text-center w-100 mb-3">Ya confirmaste tu asistencia</h2>
                                <div className="form-check form-switch d-flex align-items-center justify-content-between mb-3">
                                    <button type="button" className="boton w-50 m-0 p-0 text-capitalize fs-1 title"> Fiesta</button>
                                    <strong className="fs-3">{fiesta ? 'Si' : 'No'}</strong>
                                </div>

                                <div className="form-check form-switch d-flex align-items-center justify-content-between">
                                    <button type="button" className="boton w-50 m-0 p-0 fs-1 text-capitalize title"> Ceremonia</button>
                                    <strong className="fs-3">{ceremonia ? 'Si' : 'No'}</strong>
                                </div>
                            </div>
                        )}
                    </div>

                    {hasInvitation &&  !confirmed && (
                        <div className="modal-footer">
                            <button onClick={() => confirmAssist()} type="button" id="sendAsistencia" className="boton">{hasInvitation ? 'Confirmar Asistencia' : 'Consultar'}</button>
                        </div>
                    )}
                </div>
            </div>
        </Modal>
    )
}