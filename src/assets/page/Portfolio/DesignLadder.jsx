// import React from 'react'
import DesignLadderButton from './DesignLadderButton';
import Logo from './Logo.svg';
import navData from './navData';

export default function DesignLadder() {
    return (
        <div>
            <nav>
                <div className="bg-[#FDB889] text-center p-1 text-sm">
                    <p>10% off in any website order <span
                        onClick={ () => console.log( "learn more!" ) } className="cursor-pointer font-semibold te underline">Learn more</span>
                    </p>
                </div>
                <div className="border-t-[1.5px] w-full border-b-[1.5px] border-[#172739] flex justify-between md:px-[40px] py-[20px]">
                    <div className="flex items-center gap-5">
                        <img src={ Logo } alt="logo?" />
                        <p className="font-bold">DesignLadder</p>
                    </div>
                    <div className="flex items-center md:gap-[40px] sm:gap-[20px]">
                        <ul className="flex md:gap-5 gap-[10px]">
                            { navData && navData.map(( nav )=>(
                            <li key={nav.id}>{ nav.title }</li>
                            ))}
                        </ul>
                        <DesignLadderButton className={ "font-bold md:text-[20px] text-[15px]" } text={ "Let's talk" } onClick={ () => console.log( "let's talk" ) } />
                    </div>
                </div>
            </nav>
          
            <div>
              
            </div>
        </div>
    );
}
