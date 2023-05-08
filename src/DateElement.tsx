import React, {useEffect, useState} from 'react';
import {DatePicker} from "@mui/x-date-pickers";
import {onSetType} from "./TimeElement";
import dayjs, {Dayjs} from "dayjs";

const DateElement = ({onDate, date}: { onDate: onSetType, date: boolean }) => {
const [day,setDay]=useState(dayjs())
	console.log(day)
	useEffect(()=>{
		if(!date) setDay(dayjs())
	},[date])
	return (
		<fieldset style={{display: 'inline'}}>
			<legend>Выберете дату</legend>
			<DatePicker value={day} sx={{border: !date && '1px solid red'}} disablePast onChange={
				(value: Dayjs) => {
					setDay(value)
					onDate(`${value.day()}/${value.month()}/${value.year()}`)
				}
			}/>
		</fieldset>
	);
};

export default DateElement;