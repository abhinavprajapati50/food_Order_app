import React from 'react'
import classes from "./Modal.module.css";
// var ReactDOM = require('react-dom');
import ReactDOM from "react-dom"; 
export const Modal = (props) => {
    const Backdrop = () => {
        return <div className={classes.backdrop} />
    }

    const ModalOverlay = (props) => {
        return (
            <div className={classes.modal}>
                <div className={classes.content}>{props.children}</div>
            </div>
        )
    }

    const portalElement = document.getElementById("overlays")
    return (
        <>
            {ReactDOM.createPortal(<Backdrop />, document.getElementById("overlays"))}
            {ReactDOM.createPortal(<ModalOverlay >{props.children}</ModalOverlay>, document.getElementById("overlays"))}

        </>
    )
}
