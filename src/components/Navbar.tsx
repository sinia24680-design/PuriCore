import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const Navbar = () => {
    const { language, switchLanguage } = useContext(LanguageContext);

    return (
        <nav>
            <h1>PuriCore</h1>
            <button onClick={() => switchLanguage('en')}>English</button>
            <button onClick={() => switchLanguage('es')}>Español</button>
        </nav>
    );
};

export default Navbar;
