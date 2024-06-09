// import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import App from './App';
import Old from './Old';
import Fiesta from './assets/page/Fiesta/Fiesta';

export default function Root() {
    const location = useLocation();
    return (
        <Routes location={ location } key={ location.key }>
            <Route path="/" element={ <App /> } exact />
            <Route path="/old" element={ <Old /> } />
            <Route path="/fiesta" element={ <Fiesta/>}/>
        </Routes>
    );
}
