import { useState } from 'react';
import  { Component } from 'react';
import { Link } from 'react-router-dom';
import useKeyPress from '../hooks/useKeyPress';
import { generate } from '../utils/words';

const Keys = callback => {

const initialWords = generate();
const [leftPadding, setLeftPadding] = useState(
    new Array(20).fill(' ').join(''),
);
const [outgoingChars, setOutgoingChars] = useState('');
const [currentChar, setCurrentChar] = useState(initialWords.charAt(0));
const [incomingChars, setIncomingChars] = useState(initialWords.substr(1));
const [accuracy, setAccuracy] = useState(0);
const [typedChars, setTypedChars] = useState('');
const [errors, setErrors] = useState(0);

    useKeyPress(key => {

        let updatedOutgoingChars = outgoingChars;
        let updatedIncomingChars = incomingChars;
        const updatedTypedChars = typedChars + key;
        if (key !== currentChar) {
        setErrors(errors+1);
        console.log(errors);
        }
        else if (key === currentChar) {

        if (leftPadding.length > 0) {
            setLeftPadding(leftPadding.substring(1));
        }
        
        updatedOutgoingChars += currentChar;
        setOutgoingChars(updatedOutgoingChars);
            
        setCurrentChar(incomingChars.charAt(0));

        updatedIncomingChars = incomingChars.substring(1);
        if (updatedIncomingChars.split(' ').length < 10) {
            updatedIncomingChars +=' ' + generate();
        }
        setIncomingChars(updatedIncomingChars);
        }

        setTypedChars(updatedTypedChars);
        setAccuracy(
        ((updatedOutgoingChars.length * 100) / updatedTypedChars.length).toFixed(2,),
        );
    });
    return outgoingChars, currentChar, leftPadding, incomingChars, accuracy, errors;
};
export default Keys;