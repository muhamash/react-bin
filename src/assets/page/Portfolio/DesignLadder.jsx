import React from 'react';
import DesignLadderButton from './DesignLadderButton';
import Logo from './Logo.svg';
import navData from './navData';

export default function DesignLadder() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div>
            <nav>
                <div className="bg-[#FDB889] text-center p-1 text-sm">
                    <p>
                        10% off in any website order{' '}
                        <span
                            onClick={() => console.log("learn more!")}
                            className="cursor-pointer font-semibold underline"
                        >
                            Learn more
                        </span>
                    </p>
                </div>

                <div className="border-t-[1.5px] w-full border-b-[1.5px] border-[#172739] flex justify-between px-5 md:px-[40px] py-[20px]">
                    <div className="flex items-center gap-5">
                        <img src={Logo} alt="logo?" />
                        <p className="font-bold md:text-[30px] text-[20px]">DesignLadder</p>
                    </div>
                    <div className="flex items-center md:gap-[40px] sm:gap-[20px]">
                        <button onClick={toggleMobileMenu} className="md:hidden block">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className={`flex-col md:flex-row md:flex items-center md:gap-[40px] sm:gap-[20px] ${isMobileMenuOpen ? 'absolute right-2 top-[80px] bg-black/20 rounded-xl backdrop-blur-md p-5 text-sm text-left' : 'hidden'} gap-[10px] `}>
                        <ul className={`flex-col md:flex-row md:flex gap-5`}>
                            {navData && navData.map((nav) => (
                                <li className="pb-2" onClick={()=> console.log(nav)} key={nav.id}>{nav.title}</li>
                            ))} 
                        </ul>
                        <DesignLadderButton
                            className="font-bold md:text-[20px] text-[15px]"
                            text="Let's talk"
                            onClick={() => console.log("let's talk")}
                        />
                    </div>
                </div>
            </nav>

            <div></div>
        </div>
    );
}