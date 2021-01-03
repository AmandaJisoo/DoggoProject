import React, { useState } from "react";
import {Button, Modal } from "react-bootstrap"

const SignUpErrors = (props) => {  
    return (
        <Modal show={props.error}>
            <Modal.Header>
                <Modal.Title>Error Detected</Modal.Title>
            </Modal.Header>

            <Modal.Body>You did not answer all required fields</Modal.Body>

            <Modal.Footer>
                <Button onClick={props.handlePopup}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
  }
  
  export default SignUpErrors;