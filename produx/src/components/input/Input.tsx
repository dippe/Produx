import * as React from 'react';

export interface Props {
    value: string;
    name: string;
}

function InputPromise({name, value}: Props): Promise<JSX.Element> {
    return new Promise( (resolve, reject) => {
        if (isValidValue(value)) {
            resolve(<input name={name} value={value}/>)
        } else {
            reject(<span style={{color:'red'}}>Invalid value it should be: VALID</span>)
        }
    } );
}

function isValidValue(value: any) {
    return value === 'VALID'
}
export default InputPromise;