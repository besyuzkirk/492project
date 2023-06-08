import React from 'react';
import './CheckBoxLabel.scss'
import { Link } from "react-router-dom";


function CheckBoxLabel(props) {
    return (
        <div className='checkbox-label-wrapper' style={{ justifyContent : props.justifyContent}}>
            <div className='label-wrapper'>
                <input id={props.inputId} name='remember-me' className='label-input-login' type="checkbox"  />
                <label className='checkbox-label' for={props.inputId} >{props.label} &nbsp; </label>
            </div>
            <div className='link-wrapper'>
                <a to={props.to} className='forgot-password'>{props.linkTitle}</a>
            </div>
        </div>
    );
}

export default CheckBoxLabel;