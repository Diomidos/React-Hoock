import React, { useEffect, useState, useMemo } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}
function runFactorial(n) {
    console.log("run factorial");
    return factorial(n);
}

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    const [otherState, setOtherState] = useState(false);

    const buttonColor = otherState ? "primary" : "secondary";
    useEffect(() => {
        console.log("render button color");
    }, [buttonColor]);

    const fact = useMemo(() => runFactorial(value), [value]);

    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
            </CardWrapper>
            <p>Value:{value}</p>
            <p>Result fact: {fact}</p>
            <button
                className="btn btn-primary mx-2"
                onClick={() => setValue((prevState) => prevState + 10)}
            >
                Increment
            </button>
            <button
                className="btn btn-primary mx-2"
                onClick={() => setValue((prevState) => prevState - 10)}
            >
                Dicrement
            </button>
            <button
                className={"btn ms-md-2 btn-" + buttonColor}
                onClick={() => setOtherState((prevState) => !prevState)}
            >
                Change color
            </button>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
