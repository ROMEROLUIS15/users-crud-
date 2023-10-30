import { IconCheck, IconX } from '@tabler/icons-react';
import React from 'react';

const ConfirmationModal = ({ message, onConfirm, onCancel }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-20">
            <div className="bg-[#0a1503] p-10 rounded-md  w-[min(100%,_320px)] sm:w-auto">
                <p className='text-white py-2'>{message}</p>
                <div className="flex justify-center">
                    <button
                        onClick={onConfirm}
                        className="m-1 p-1 cursor-pointer bg-green-500 hover:bg-green-600 rounded-md transition-colors"
                    >
                        
                        <IconCheck />
                    </button>
                    <button
                        onClick={onCancel}
                        className="m-1 p-1 cursor-pointer bg-red-500 hover:bg-red-600 rounded-md transition-colors"
                    >
                        <IconX />
                    </button>
                </div>
            </div>
        </div>
    );
    
};

export default ConfirmationModal;
