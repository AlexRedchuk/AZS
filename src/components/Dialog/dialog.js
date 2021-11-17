import react from 'react';
import './dialog.css';

const Dialog = (props) => {
    const { handleClose } = props;
    return (
    <div className="background">
        <div className="dialog_container">
            <button className="close_btn" onClick={handleClose}>
                <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/></svg>
            </button>
            <div className="modal_Wrapper">
                <div className="content_modal">
                    <span className="modal_text_main">Підпишись зараз</span>
                    <span className="modal_text_sidekick">Будь в курсі всіх актуальних новин</span>
                    <input type="text" className="text_input" id="formGroupExampleInput" placeholder="johndoe@gmail.com"/>
                    <button type="button" class="modal-button">Підписка</button>
                </div>
            </div>
            
        </div>
    </div>
    )
}

export default Dialog;