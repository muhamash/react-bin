// import React from 'react'
import { Link } from 'react-router-dom';
import './App.css';

export default function App() {
    return (
        <div className='w-[70%] mx-auto py-10 flex items-center justify-center gap-10'>
            <Link to={'/old'}>
                <button className="bg-slate-600 text-white p-3 rounded-md">
                    Old
                </button>
            </Link>
            <Link to={'/fiesta'}>
                <button className="bg-slate-600 text-white p-3 rounded-md">
                    Fiesta Row
                </button>
            </Link>
        </div>
    );
}
