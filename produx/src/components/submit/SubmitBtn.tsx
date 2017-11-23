import * as React from 'react';
import {renderRoot} from '../../index';
import App from '../../App';

function SubmitButton(): JSX.Element {
    // this renderRoot call should be refactored out
    let onClickCb = (e: any) => {
        let input: any = document.querySelector('#inputField');
        renderRoot(App(input.value));
    };
    return (<input value="Ok" type="button" onClick={onClickCb}/>);
}

export default SubmitButton;
