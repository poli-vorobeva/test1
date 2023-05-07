import React from 'react';
import {TimePicker} from "@mui/x-date-pickers";
import {Dayjs} from "dayjs";
import Typography from "@mui/material/Typography";

export type onSetType = (value: (((prevState: string) => string) | string)) => void

const TimeElement = ({begin, end, onBegin, onEnd}: { begin: boolean, end: boolean, onBegin: onSetType, onEnd: onSetType }) => {
	return (
		<fieldset style={{display: 'flex', alignItems: 'center'}}>
			<legend>Выберете диапозон времени</legend>
			<TimePicker sx={{border: !begin && '1px solid red'}}
									onChange={(value: Dayjs) => {
										onBegin(`${value.hour()}/${value.minute()}`)
									}} label="Basic time picker"/>
			<Typography sx={{margin: '0 20px'}}>-</Typography>
			<TimePicker sx={{border: !end && '1px solid red'}}
									onChange={(value: Dayjs) => onEnd(`${value.hour()}/${value.minute()}`)} label="Basic time picker"/>
		</fieldset>
	);
};

export default TimeElement;