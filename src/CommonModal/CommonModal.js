import React from 'react';
import { useState } from 'react';

const CommonModal = (props) => {
    const [open, setOpen] = useState(true);
    const onproceed = () => {
        setOpen(false);
        props.onOk();
    }
    const onProceedCancel = () => {
        setOpen(false);
        props.onCancel();
    }
    return (
        <div>
            <div className="modal" style={{ display: open ? "block" : "none" }}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{props.title}</h5>
                            <button onClick={onProceedCancel} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>{props.description}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={onproceed}>ok</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={onProceedCancel}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommonModal;