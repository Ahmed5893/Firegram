import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import { motion } from "framer-motion";

export const BackDrop = ({ onClose }) => {
  return <div className={classes.backdrop} onClick={onClose}></div>;
};

const Overlay = ({ children }) => {
  return (
    <motion.div
      className={classes.modal}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className={classes.content}
        initial={{ y: "-100vh" }}
        animate={{ y: "0" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

const Modal = ({ children, onClose }) => {
  const Portal = document.getElementById("overlay");

  return (
    <>
      {ReactDOM.createPortal(<BackDrop onClose={onClose} />, Portal)}
      {ReactDOM.createPortal(<Overlay>{children} </Overlay>, Portal)}
    </>
  );
};

export default Modal;
