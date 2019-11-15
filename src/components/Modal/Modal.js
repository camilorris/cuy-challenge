import React from "react";
import ReactModal from "react-modal";

import styles from "./styles.module.scss";

import closeIcon from "assets/icons/close-icon.svg";
import checkIcon from "assets/icons/check-icon.svg";

const Modal = ({ isOpen, closeModal }) => {
  return (
    <ReactModal
      className={styles.Modal}
      isOpen={isOpen}
      onRequestClose={closeModal}
    >
      <div className={styles.modalContainer}>
        <img
          className={styles.closeIcon}
          src={closeIcon}
          alt="closing-icon"
          onClick={closeModal}
        />
        <h1>Arma tu plan</h1>
        <ul>
          <li>
            <img
              className={styles.checkIcon}
              src={checkIcon}
              alt="check-icon"
            />
            <span>Suscripciones por 30 días</span>
          </li>
          <li>
            <img
              className={styles.checkIcon}
              src={checkIcon}
              alt="check-icon"
            />
            <span>Puedes pausarlo, cambiarlo o cancelarlo cuando quieras</span>
          </li>
          <li>
            <img
              className={styles.checkIcon}
              src={checkIcon}
              alt="check-icon"
            />
            <span>
              Facebook foto, Whatsapp y Messenger incluidos con cualquier
              paquete de datos
            </span>
          </li>
          <li>
            <img
              className={styles.checkIcon}
              src={checkIcon}
              alt="check-icon"
            />
            <span>
              Portabilidad: Al activar tu chip escoges mantener tu número o uno
              nuevo
            </span>
          </li>
          <li>
            <img
              className={styles.checkIcon}
              src={checkIcon}
              alt="check-icon"
            />
            <span>No existen restricciones de velocidad</span>
          </li>
          <li>
            <img
              className={styles.checkIcon}
              src={checkIcon}
              alt="check-icon"
            />
            <span>Arma tu plan, escoge tus GB, minutos y mensajes</span>
          </li>
        </ul>
        <button onClick={closeModal}>Listo</button>
      </div>
    </ReactModal>
  );
};

export default Modal;
