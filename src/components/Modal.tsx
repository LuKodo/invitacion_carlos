import type { FC } from "react";
import { Modal } from "react-bootstrap";

interface Props {
    children?: React.ReactNode;
    show: boolean;
    handleClose: () => void;
    event: string;
}

export const Modals: FC<Props> = ({ show, children, handleClose, event }) => {

    return (
        <Modal size="lg" show={show} onHide={handleClose}>
            <Modal.Header className="d-flex justify-content-center align-items-center">
                <Modal.Title>Cómo llegar a la {event}</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ height: "420px"}}>
                {children}
            </Modal.Body>
        </Modal>
    )
}