import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                &copy; {new Date().getFullYear()} Copyright:{' '}
                <a className='text-dark' href='https://aas-electronics.web.app/' target="_blank">
                    AA_Suhail Group
                </a>
            </div>
        </div>
    );
};

export default Footer;