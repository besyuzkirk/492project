import React from "react";
import './GmInput.scss'

const GmInput = (props) => {

    return ( 
        <div className="account-input-wrapper" >
            <input {...props.value} style={{'borderRadius':props.borderRadius}} minLength={props.minLength} maxLength={props.maxLength} type={props.type} className="account-input" placeholder={props.placeholder}  />
            <span className="focus-account-input"></span>
        </div>
        
    );
}

export default GmInput;