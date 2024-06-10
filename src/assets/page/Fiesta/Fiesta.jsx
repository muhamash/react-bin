// import React from 'react'
// import React from 'react';
import DatePicker from './DatePicker/DatePicker';
import FiestaButton from './FiestaButton'; // Ensure correct import path

const handleClick = () => {
  console.log('Button clicked!');
};

export default function Fiesta() {
    return (
        <div className="flex flex-col gap-5 items-center justify-center p-10">
            <p>Fiesta Row</p>
            <div className="flex flex-wrap gap-5">
                <FiestaButton
                    text="Add to Cart"
                    type="cart"
                    state="normal"
                    onClick={ handleClick }
                    addClassName='w-[190px] h-[40px] text-md text-white'
                    dropdown={ true }
                >
                    <ul>
                        <li className="p-2 hover:bg-gray-200">Option 1</li>
                        <li className="p-2 hover:bg-gray-200">Option 2</li>
                        <li className="p-2 hover:bg-gray-200">Option 3</li>
                    </ul>
                </FiestaButton>

                <FiestaButton
                    text="Add to Cart"
                    type="cartG"
                    state="normal"
                    onClick={ handleClick }
                    addClassName='w-[110px] h-[32px] text-sm text-white'
                    dropdown={ false }
                >
                    <ul>
                        <li className="p-2 hover:bg-gray-200">Option 1</li>
                        <li className="p-2 hover:bg-gray-200">Option 2</li>
                        <li className="p-2 hover:bg-gray-200">Option 3</li>
                    </ul>
                </FiestaButton>
                <FiestaButton type='clear' addClassName={ 'text-slate-500 text-md w-[119px] h-[40px]' } text="Clear" />
                <FiestaButton
                    text="Add to Reservation"
                    type="cart"
                    state="normal"
                    onClick={ handleClick }
                    addClassName='w-[190px] h-[40px] text-md text-white'
                    dropdown={ true }
                />
                <FiestaButton
                    text="post"
                    type="cart"
                    state="normal"
                    onClick={ handleClick }
                    addClassName='w-[100px] h-[40px] text-md text-white'
                    dropdown={ true }
                />
                <FiestaButton
                    text="Add to table"
                    type="cartG"
                    state="normal"
                    onClick={ handleClick }
                    addClassName='w-[110px] h-[40px] text-md text-white'
                    dropdown={ true }
                />
                <FiestaButton
                    text="Add to checkout"
                    type="checkout"
                    state="normal"
                    onClick={ handleClick }
                    addClassName='w-[180px] h-[40px] text-md text-white'
                    dropdown={ true }
                />
                <FiestaButton
                    text="Continue to confirm availability"
                    type="checkout"
                    state="normal"
                    onClick={ handleClick }
                    addClassName='w-[251px] h-[40px] text-md text-white'
                    dropdown={ true }
                />
            </div>
            <div>
                <div style={ {
                    boxShadow: '0px 12px 36px 0px rgba(44, 48, 64, 0.12)',
                } }
                    className=' rounded-[16px] p-5 flex gap-10'>
                    <div className='bg-green-500 w-[280px]'>

                    </div>
                    <div>
                        <h2 className='text-center font-bold text-[14px] uppercase md:text-[16px] text-[#000000]'>When</h2>
                        <DatePicker/>
                    </div>
                </div>
            </div>
        </div>
    );
}