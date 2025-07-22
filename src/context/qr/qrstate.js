import React, { useState } from 'react';
import $ from 'jquery';
import qrContext from './qrcontext';
import { baseUrl } from '../../utility/utilityfunctions';

const QrState = (props) => {
    const [qrContent, setQrContent] = useState({});
    

    const getQrContent = () => {
        $.ajax({
            url: `${baseUrl}qrcontent`,
            type: "GET",
            success: (response) => {
                if (response.status === 0) {
                    setQrContent(response.data.qr[0]);
                  
                } else {
                    console.log(response);
                }
            },
        });
    }

    return (
        <qrContext.Provider value={{ qrContent, getQrContent }}>
            {props.children}
        </qrContext.Provider>
    )
}

export default QrState;



