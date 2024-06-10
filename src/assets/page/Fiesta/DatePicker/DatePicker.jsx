import { useState } from 'react';
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const DatePicker =()=> {
    const [ selected, setSelected ] = useState();
    console.log(selected)
    return (
        <DayPicker
            mode="single"
            selected={ selected }
            onSelect={ setSelected }
        />
    );
}

export default DatePicker;