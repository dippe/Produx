import * as React from 'react';

import './Hello.css';

export interface Props {
    name: string;
    age?: number;
}

function Hello({name, age = 3}: Props) {
    if (age <= 0) {
        throw new Error('you are too young');
    }

    return (
        <div className="hello">
            Hello {name + getExclamationMarks(age)}
        </div>
    );
}

function getExclamationMarks(n: number) {
    return Array(n + 1).join('!');
}

export default Hello;