import React from 'react';
import './Popup.scss';
import QRCode from 'qrcode.react';
const Popup = ({ onClose }) => {

    const qrCodeValue = 'https://example.com';

    return (
        <div className="popup-overlay">
            <div className="popup">
                <h1>Install Our App on Android or IOS</h1>
                <QRCode className='qr-code' value={qrCodeValue} size={256} />
                <button className='closeQr-button' onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Popup;
