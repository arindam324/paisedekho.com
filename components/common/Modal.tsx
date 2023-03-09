import React, {FC, ReactNode, useEffect} from 'react';
import classNames from 'classnames';

interface ModalProps {
    size?: string
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode
}

const Modal: FC<ModalProps> = ({size, isOpen, onClose, children}) => {

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            onClose();
        }
    };
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
            document.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.classList.remove('overflow-hidden');
            document.removeEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.body.classList.remove('overflow-hidden');
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    const stopPropagation = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    };

    return (
        <div
            className={classNames(
                'fixed z-10 inset-0 overflow-y-auto   rounded-xl w-full',
                isOpen ? 'block' : 'hidden'
            )}
            onClick={onClose}
        >
            <div className="flex items-center w-full justify-center min-h-screen">
                <div
                    className="fixed inset-0 transition-opacity"
                    aria-hidden="true"
                >
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <div onClick={stopPropagation}
                     className={classNames('bg-white  rounded-lg w-[90%] mx-auto lg:w-full  shadow-lg relative z-10', size)}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
