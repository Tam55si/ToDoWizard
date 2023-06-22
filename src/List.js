import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa'
import { RxLapTimer } from 'react-icons/rx';
import './index.css';

function Modal1({ shown, close }) {
    return shown ? (
        <div
            className="modal-backdrop"
            onClick={() => {
                // close modal when outside of modal is clicked
                close();
            }}
        >
            <div
                className="modal-content"
                onClick={(e) => {
                    // do not close modal if anything inside modal content is clicked
                    e.stopPropagation();
                }}
            >
                <button className='close-btn' onClick={close}>Close</button>

                <h1>Look! I'm inside the modal!</h1>
            </div>
        </div>
    ) : null;
}

const List = ({ items, removeItem, editItem }) => {
    const [modalShown, toggleModal] = useState(false);
    return (
        <>
            <div className='grocry-list'>
                {items.map((item) => {
                    const { id, title } = item;
                    return (
                        <article key={id} className='grocery-item'>
                            <p className='title'>{title}</p>
                            <div className='btn-container'>
                                <button className='timer-btn' type='button' onClick={() => { toggleModal(!modalShown) }}><RxLapTimer /></button>
                                <button className='edit-btn' type='button' onClick={() => editItem(id)}><FaEdit /></button>
                                <button className='delete-btn' type='button' onClick={() => removeItem(id)}><FaTrash /></button>
                            </div>
                        </article>
                    )
                })}
            </div>
            <Modal1 shown={modalShown} close={() => { toggleModal(false); }}></Modal1>
        </>
    )
}

export default List;