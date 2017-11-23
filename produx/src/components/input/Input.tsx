import * as React from 'react';

export interface Props {
    value: string;
    name: string;
}

function InputPromise({name, value}: Props): Promise<JSX.Element> {
    return new Promise((resolve, reject) => {
        console.log('render Input: ', value);

        let inputElem = (<input id="inputField" name={name} type="text"/>);

        if (isValidValue(value)) {
            resolve(inputElem);
        } else {
            reject((
                <span>{inputElem}
                    <span style={{color: 'red'}}>Invalid value [{value}] The only valid value: VALID</span>
                </span>
            ));
        }
    });
}

function isValidValue(value: string) {
    return value === 'VALID';
}

export default InputPromise;