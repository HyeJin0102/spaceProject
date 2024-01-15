import { enteredLetterFormIsNotEmpty } from '@/utils/utils';
import React, { useEffect, useState } from 'react';

const LetterForm = ({ onClose, children, todo }) => {

    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [from, setFrom] = useState('');
    const [isFormInvalid, setInvalid] = useState(true);

    const addOrUpdateTodoHandler = () => {
        if (isNewTodoForm(children)) {
            dispatch({ type: 'ADD', newTodo: { id: self.crypto.randomUUID(), title, summary, from } });
        } else {
            dispatch({ type: 'UPDATE', updateTodo: { id: todo.id, title, summary, from } });
        }

        onClose();
    }

    useEffect(() => {
        if (enteredLetterFormIsNotEmpty(title, summary, from)) {
            setInvalid(false);
        } else {
            setInvalid(true);
        }
    }, [title, summary, from]);

    return (
        <>
            <form className='my-2'>
                <div>
                    <label className='block mb-2 text-xl text-white' htmlFor='title'>Title</label>
                    <input className='w-full p-2 border-[1px] border-gray-300 bg-gray-200 text-gray-900 rounded'
                        type='text' id='title' value={title} onChange={event => setTitle(event.target.value)} />
                </div>
                <div>
                    <label className='block mb-2 text-xl text-white' htmlFor='summary'>Summary</label>
                    <textarea className='w-full p-2 border-[1px] border-gray-300 bg-gray-200 text-gray-900 rounded'
                        id='summary' rows='5' value={summary} onChange={event => setSummary(event.target.value)} />
                </div>
                <div>
                    <label className='block mb-2 text-xl text-white' htmlFor='from'>From</label>
                    <input className='w-full p-2 border-[1px] border-gray-300 bg-gray-200 text-gray-900 rounded'
                        type='text' id='from' value={from} onChange={event => setFrom(event.target.value)} />
                </div>
                {isFormInvalid && <div className='mt-2 text-red-500'>모든 항목을 채워서 작성해주세요</div>}

                <div className='flex justify-end gap-4'>
                    <button className='text-xl text-white' type='button' onClick={onClose}>Cancel</button>
                    <button className='px-6 py-3 text-xl text-red-200' type='button' onClick={addOrUpdateTodoHandler} disabled={isFormInvalid}>
                        Send
                    </button>
                </div>
            </form>
        </>
    )
}

export default LetterForm