import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="toolbar">
                <button className="icon-button" style={{ backgroundImage: 'url(/images/home.svg)' }}></button>
                <button className="icon-button" style={{ backgroundImage: 'url(/images/call.svg)' }}></button>
                <button className="icon-button" style={{ backgroundImage: 'url(/images/music.svg)' }}></button>
                <button className="icon-button" style={{ backgroundImage: 'url(/images/tesla.svg)' }}></button>
                <button className="icon-button" style={{ backgroundImage: 'url(/images/navig.svg)' }}></button>
                <button className="icon-button" style={{ backgroundImage: 'url(/images/fan.svg)' }}></button>
                <button className="icon-button" style={{ backgroundImage: 'url(/images/settings.svg)' }}></button>
            </div>
        </footer>
    );
};

export default Footer;
