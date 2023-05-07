import React from 'react';
import {DatePicker} from "@mui/x-date-pickers";
import {onSetType} from "./TimeElement";
import {Dayjs} from "dayjs";

const DateElement = ({onDate, date}: { onDate: onSetType, date: boolean }) => {
	return (
		<fieldset style={{display: 'inline'}}>
			<legend>Выберете дату</legend>
			<DatePicker sx={{border: !date && '1px solid red'}} disablePast onChange={
				(value: Dayjs) => {
					onDate(`${value.day()}/${value.month()}/${value.year()}`)
				}
			}/>
		</fieldset>
	);
};

export default DateElement;