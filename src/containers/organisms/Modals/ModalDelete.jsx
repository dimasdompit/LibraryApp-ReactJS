import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import {
  iconStyle,
  notifStyle,
} from "../../../styles/organism/ModalDelete.module.css";

const ModalExample = (props) => {
  const { text, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <div onClick={toggle}>{text}</div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} charCode="x"></ModalHeader>
        <ModalBody toggle={toggle}>
          <FontAwesomeIcon icon={faCheckCircle} className={iconStyle} />
          <h4 className={notifStyle}>Data Dilan 1990 berhasil dihapus!</h4>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalExample;
