import React from 'react';
import './AccountLayout.scss';

function AccountLayout(props) {
    return (
        <div className='account-page' >
        <div className='account-page-wrapper' style={{width : props.width}}>
            <form className='account-page-form'>
                <span className='account-page-title'>{props.pageTitle}</span>
                {props.children}
            </form>
        </div>
    </div>
    );
}

export default AccountLayout;