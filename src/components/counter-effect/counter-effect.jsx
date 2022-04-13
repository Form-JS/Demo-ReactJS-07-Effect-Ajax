import { useEffect, useState } from 'react';

const CounterEffect = () => {

    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    useEffect(() => {
        console.log("Counter: Effect");

        if (count <= 0) {
            document.title = 'Compteur affiché';
        }
        else {
            document.title = `Compteur : ${count}`;
        }

        return () => {
            console.log("Counter: Netoyage");
            document.title = 'Compteur retiré';
        };
    }, [count]);

    const handleCounter = () => {
        setCount(c => c + step);
    };

    const handleIncr = () => {
        setStep(s => s + 1);
    };
    const handleDescr = () => {
        setStep(s => s - 1);
    };
    return (
        <>
            <h2>Compteur avec effet de bord</h2>
            <div>
                Valeur d'incrementation
                <button onClick={handleIncr}>+++</button>
                <button onClick={handleDescr}>---</button>
            </div>

            <p>{count}</p>
            <button onClick={handleCounter}>{step}</button>


        </>
    );
};

export default CounterEffect;