import React, { Fragment } from "react";
import ReactDOM from 'react-dom'
import Backdrop from "./Backdrop";
import ModalOverlay from "./ModalOverlay"

const portal = document.getElementById('overlays');

const Modal =(props)=>{

    return(
        <Fragment>
             {/* the backdrop is tranparent div that separates the modal and the rest of the applicaiton
             the ModalOverlay wrapper child props  */}
             {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portal)}
             {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portal)}
        </Fragment>
    )
}

export default Modal;