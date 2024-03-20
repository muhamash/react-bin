/* eslint-disable no-unused-vars */
import { useState } from "react";
import Dropdown from "./CustomDropdown";
import ServiceToggle from "./ServiceToggle";

const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' }
];

export default function NoiseCancellationCard() {
  const [isMicrophoneToggled, setIsMicrophoneToggled] = useState(false);
  const [isSpeakerToggled, setIsSpeakerToggled] = useState(false);

  const toggleMicrophone = () => {
    setIsMicrophoneToggled((prevState) => !prevState);
  };

  const toggleSpeaker = () => {
    setIsSpeakerToggled((prevState) => !prevState);
  };

  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

    return (
        <div className='bg-white p-3 rounded-[10px] w-[300px] flex flex-col gap-3'>
            <div className="flex justify-between text-sm">
                <div className='flex gap-2'>
                    <svg fill="#3358FF" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="20px" height="20px" viewBox="0 0 47 47" xmlSpace="preserve">
                        <g>
                            <g>
                                <path d="M24.104,41.577c-0.025,0-0.053-0.001-0.078-0.001c-1.093-0.035-2.025-0.802-2.271-1.867l-5.46-23.659l-3.199,8.316
			c-0.357,0.93-1.252,1.544-2.249,1.544H2.41c-1.331,0-2.41-1.079-2.41-2.41c0-1.331,1.079-2.41,2.41-2.41h6.78l5.433-14.122
			c0.38-0.989,1.351-1.612,2.418-1.54c1.057,0.074,1.941,0.831,2.18,1.863l5.186,22.474l4.618-15.394
			c0.276-0.923,1.078-1.592,2.035-1.702c0.953-0.107,1.889,0.36,2.365,1.198l4.127,7.222h7.037c1.331,0,2.41,1.079,2.41,2.41
			c0,1.331-1.079,2.41-2.41,2.41h-8.436c-0.865,0-1.666-0.463-2.094-1.214l-2.033-3.559l-5.616,18.722
			C26.104,40.88,25.164,41.577,24.104,41.577z"/>
                            </g>
                        </g>
                    </svg>
                    <p className='font-mono '>
                        NOISE CANCELLATION
                    </p>
                </div>
                <div className="flex gap-1">
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 14.7519C3.37037 13.8768 3 12.8059 3 11.6493C3 9.20008 4.8 6.9375 7.5 6.5C8.34694 4.48637 10.3514 3 12.6893 3C15.684 3 18.1317 5.32251 18.3 8.25C19.8893 8.94488 21 10.6503 21 12.4969C21 13.5693 20.6254 14.5541 20 15.3275M12.5 12.9995L10.5 21.0008M8.5 11.9995L6.5 20.0008M16.5 12L14.5 20.0013" stroke="#28802d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 12H17M8 8.5C8 8.5 9 9 10 9C11.5 9 12.5 8 14 8C15 8 16 8.5 16 8.5M8 15.5C8 15.5 9 16 10 16C11.5 16 12.5 15 14 15C15 15 16 15.5 16 15.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#e0db05" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
            <div className="w-full border-b-[1px] border-gray-400"></div>
            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                    <ServiceToggle
                        text="Microphone"
                        isToggled={ isMicrophoneToggled }
                        toggleButton={ toggleMicrophone }
                    />
                    <Dropdown options={ options } onSelect={ handleSelect } />
                </div>
                <div className="flex flex-col gap-1">
                    <ServiceToggle
                        text="Speaker"
                        isToggled={ isSpeakerToggled }
                        toggleButton={ toggleSpeaker }
                    />
                    <Dropdown options={ options } onSelect={ handleSelect } />
                </div>
            </div>
        </div>
    );
}