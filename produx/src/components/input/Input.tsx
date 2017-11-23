import * as React from 'react';

export interface Props {
    value: string;
    name: string;
}

function InputPromise({name, value}: Props): Promise<JSX.Element> {
    return new Promise( (resolve) => resolve(<input name={name} value={value} />) );
}

export default InputPromise;