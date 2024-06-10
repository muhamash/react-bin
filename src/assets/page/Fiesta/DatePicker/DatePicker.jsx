/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, useState } from 'react';

const DatePicker = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [ currentDate, setCurrentDate ] = useState( new Date() );
    
    console.log(selectedDate)

    const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

    const handlePrevMonth = () => {
        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1);
            return newDate;
        });
    };

    const handleNextMonth = () => {
        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1);
            return newDate;
        });
    };

    const handleDateClick = (date) => {
        setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), date));
    };

    const renderDays = useMemo( () =>
    {
        const totalDays = daysInMonth( currentDate.getMonth(), currentDate.getFullYear() );
        const firstDay = new Date( currentDate.getFullYear(), currentDate.getMonth(), 1 ).getDay();
        const prevMonthDays = daysInMonth( currentDate.getMonth() === 0 ? 11 : currentDate.getMonth() - 1, currentDate.getFullYear() );
        const daysArray = [];

        for ( let i = firstDay; i > 0; i-- )
        {
            daysArray.push(
                <div
                    key={ `prev-${i}` }
                    className="day text-center rounded-full text-[10px] md:text-[12px] font-[300] w-[21px] h-[21px] cursor-default flex items-center justify-center mx-auto text-[#454F5B] opacity-50"
                >
                    { prevMonthDays - i + 1 }
                </div>
            );
        }

        for ( let i = 1; i <= totalDays; i++ )
        {
            daysArray.push(
                <div
                    key={ i }
                    className={ `day text-center rounded-full text-[10px] md:text-[12px] font-[300] hover:bg-blue-400 hover:text-white w-[21px] h-[21px] cursor-pointer transition-colors flex items-center justify-center mx-auto ${selectedDate?.getDate() === i &&
                        selectedDate?.getMonth() === currentDate.getMonth() &&
                        selectedDate?.getFullYear() === currentDate.getFullYear()
                        ? 'bg-blue-600 text-white'
                        : 'text-[#454F5B]'
                        }` }
                    onClick={ () => handleDateClick( i ) }
                >
                    { i }
                </div>
            );
        }

        const remainingDays = 42 - daysArray.length;
        for ( let i = 1; i <= remainingDays; i++ )
        {
            daysArray.push(
                <div
                    key={ `next-${i}` }
                    className="day text-center rounded-full text-[10px] md:text-[12px] font-[300] w-[21px] h-[21px] cursor-default flex items-center justify-center mx-auto text-[#454F5B] opacity-50"
                >
                    { i }
                </div>
            );
        }

        return daysArray;
    }, [ handleDateClick ] );

    return (
        <div className="mx-auto p-1 bg-white flex flex-col  gap-[20px]">
            <div className="flex justify-around items-center">
                <button onClick={handlePrevMonth}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M10 13L5 8L10 3" stroke="#212B36" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <span className="text-[#919EAB] font-normal text-[12px] tracking-[0.15px] md:text-[14px]">
                    {`${new Date(currentDate.getFullYear(), currentDate.getMonth()).toLocaleString('default', {
                        month: 'long',
                    })} ${currentDate.getFullYear()}`}
                </span>
                <button onClick={handleNextMonth}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 3L11 8L6 13" stroke="#212B36" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
            <div className="grid grid-cols-7 font-semibold  space-x-[15px] space-y-[10px] text-[10px] md:text-[12px]">
                <div className="font-bold flex items-end justify-end text-center  text-[#637381]">Su</div>
                <div className="font-bold text-center text-[#637381]">Mo</div>
                <div className="font-bold text-center text-[#637381]">Tu</div>
                <div className="font-bold text-center text-[#637381]">We</div>
                <div className="font-bold text-center text-[#637381]">Th</div>
                <div className="font-bold text-center text-[#637381]">Fr</div>
                <div className="font-bold text-center text-[#637381]">Sa</div>
                {renderDays}
            </div>
        </div>
    );
};

export default DatePicker;
