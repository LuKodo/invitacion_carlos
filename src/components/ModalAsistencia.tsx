import { useEffect, useState, type FC } from "react";
import { Col } from "react-bootstrap";
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
        if (doc === '') {clear(); return};
        db(doc).then((res) => {
            if (res.rows.length === 0) {
                setUser(null)
                return;
            }
            const user = res.rows;

            if (user[0].ceremonia !== '') {
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
        <div className={`modal fade ${show ? 'show' : ''}`} id="modalAsistencia" role="dialog" tabIndex={-1} style={{ display: `${show ? 'block' : 'none'}` }}>
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="img-top-modal d-flex justify-content-center align-items-start">
                        <button type="button" className="close border-0" onClick={close} data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>

                        <div className="white-circle-icon">
                            <img className="" src="https://www.fixdate.io/modelo-invitacion/30/img/img_circuloCeremonia.svg" alt="" />
                        </div>
                    </div>
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

                            <div className="row">
                                <Col>
                                    {user && user.length > 0 && (
                                        <div className="fw-bold fs-3 title">
                                            {`Cupo Máximo: ${user[0].cupomaximo}`}
                                        </div>
                                    )}
                                </Col>
                                <Col sm={12} md={6}>
                                    {user && user.length > 0 && (
                                        <div className="">
                                            {user.map((item) => (
                                                <div className="fw-bold fs-3 mb-0 mt-0">
                                                    <span className="fs-6 d-flex align-items-center">{'Invitado: '}<span className="title small fs-3">{`  ${item.nombre}`}</span></span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </Col>
                            </div>

                            {hasInvitation && !confirmed && (
                                <div className="text-start w-100">
                                    <h2 className="title fs-4 text-center w-100 mb-1">¿A qué evento asistirás?</h2>
                                    <div className="form-check form-switch d-flex align-items-center justify-content-start mb-1">
                                        <button type="button" onClick={() => setFiesta(!fiesta)} className="text-capitalize boton me-4"> Fiesta</button>
                                        <strong className="fs-6">{fiesta ? 'Si' : 'No'}</strong>
                                    </div>

                                    <div className="form-check form-switch d-flex align-items-center justify-content-start">
                                        <button type="button" onClick={() => setCeremonia(!ceremonia)} className="boton text-capitalize me-4"> Ceremonia</button>
                                        <strong className="fs-6">{ceremonia ? 'Si' : 'No'}</strong>
                                    </div>
                                </div>
                            )}

                            {confirmed && (
                                <div className="text-start mt-3 w-100">
                                    <h2 className="title fs-1 text-center w-100 mb-3">Ya confirmaste tu asistencia</h2>
                                </div>
                            )}
                        </div>
                    </div>

                    {hasInvitation && !confirmed && (
                        <div className="modal-footer">
                            <button onClick={() => confirmAssist()} type="button" id="sendAsistencia" className="boton">{hasInvitation ? 'Confirmar' : 'Consultar'}</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}