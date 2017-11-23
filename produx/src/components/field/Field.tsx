import * as React from 'react';

export interface FieldProps {
    name: string;
    content: Promise<JSX.Element>;
}

function Field({name, content}: FieldProps): Promise<JSX.Element> {
    return new Promise((resolve, reject) => (
        content.then((elem: JSX.Element) => resolve(
                <div>
                    <b>{name}</b> {elem}
                </div>
            )
        ))
        .catch((error) => reject(
                <div>
                    <b>{name}</b> HIBA: {error}
                </div>
            )
        )
    );
}

export default Field;
