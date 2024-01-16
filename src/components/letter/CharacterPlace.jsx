import LetterForm from '@/components/letter/LetterForm';
import Modal from '@/components/ui/Modal';
import React, { useState } from 'react';
import imgcharicter from '@/constants/image/icons-human.png';
import { createPortal } from 'react-dom';

const TodoHeader = () => {
    const [isOpen, open] = useState(false);
    const openModal = () => open(true);
    const closeModal = () => open(false);

    return (
        <div className="flex items-center justify-between mb-2" id="task-control">
            <button onClick={openModal}>
                <img src={imgcharicter} alt="캐릭터 픽셀 그림" />
            </button>
            {isOpen && createPortal(
                <Modal onClose={closeModal}>
                    <LetterForm onClose={closeModal}></LetterForm>
                </Modal>,
                document.body)}
        </div>
    )
}

export default TodoHeader