import React from 'react';
import Confetti from 'react-confetti';

type Props = {
    isConfettiActive: boolean;
};

const ConfettiComponent: React.FC<Props> = ({isConfettiActive}) => {


    return (
        <>
            {isConfettiActive && (
                <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                />
            )}
        </>
    );
};

export default ConfettiComponent;
