import React, { useContext, useEffect } from 'react';
import parse from 'html-react-parser';
import progressContext from '../../context/loading/progresscontext';

function DynamicPage({ content }) {
    const { setProgress } = useContext(progressContext);
    const { html, css, javascript } = content;

    useEffect(() => {
        setProgress(70);
        setTimeout(() => {
            setProgress(100);
        }, 100);

        // Apply styles to the head of the document
        const styleElement = document.createElement('style');
        styleElement.innerHTML = css;
        document.head.appendChild(styleElement);

        try {
            eval(javascript);
        } catch (error) {
            console.error('Error executing scripts:', error);
        }
    }, []);


    return (
        <div className='py-4'>
            {parse(html)}
        </div>
    );
}

export default DynamicPage;