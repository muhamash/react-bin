/* eslint-disable no-unused-vars */
// import React from 'react'
import React from 'react';
import DatePicker from './DatePicker/DatePicker';
import { Where } from './DatePicker/Where';
<<<<<<< HEAD
import FiestaButton from './FiestaButton'; // Ensure correct import path
=======
import FiestaButton from './FiestaButton';
>>>>>>> origin/main


export default function Fiesta ()
{
    const [ data, setData ] = React.useState( {
        date: null,
        location: null
    })
    const handleLocationChange = (location) =>
    {
        setData( ( prevData ) =>
        ( {
            ...prevData,
            location,
        } ) );
    };

    const handleDateChange = ( date ) =>
    {
         setData( ( prevData ) => ( {
            ...prevData,
            date,
        }))
    }
    const handleClick = () =>
    {
        console.log( data );
        alert( `${data.location.city} and selected date ==>> ${data.date}` );
    }

    return (
        <div className="flex flex-col gap-5 items-center justify-center p-10">
            <p>Fiesta Row</p>
            <div  className="py-10">
                <div style={ {
                    boxShadow: '0px 12px 36px 0px rgba(44, 48, 64, 0.12)',
                } }
<<<<<<< HEAD
                    className=' rounded-[16px] p-5  flex-wrap gap-[18px] max-w-[650px] flex flex-col'>
=======
                    className='border-[0.4px] border-slate-200 rounded-[16px] p-5  flex-wrap gap-[18px] max-w-[650px] flex flex-col'>
>>>>>>> origin/main
                    <div className='flex justify-around items-center'>
                        <div className='text-center font-bold text-[14px] uppercase md:text-[16px] text-[#000000]'>Where</div>
                        <div className='text-center font-bold text-[14px] uppercase md:text-[16px] text-[#000000]'>When</div>
                    </div>
                    <div className=' flex flex-wrap gap-5 '>
                        <div className='w-[280px]'>
<<<<<<< HEAD
                            <Where />
=======
                            <Where onChange={ handleLocationChange } />
>>>>>>> origin/main
                        </div>
                        <div className='w-[1px] h-[254px] my-auto  bg-[#DFE3E8]'>
                        
                        </div>
                        <div>
<<<<<<< HEAD
                            <DatePicker />
=======
                            <DatePicker onChange={ handleDateChange } />
>>>>>>> origin/main
                        </div>
                    </div>
                    <div className='w-full'>
                        <FiestaButton
                            text="See result"
                            type="cart"
                            state="normal"
                            onClick={ handleClick }
                            addClassName='w-[600px] h-[40px] text-md text-white'
                            dropdown={ true } />
                    </div>
                </div>
            </div>
        </div>
    );
}