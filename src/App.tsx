import React, {useState} from 'react';
import {Box, FormControl, SelectChangeEvent} from "@mui/material";
import SelectElement from "./SelectElement";
import {DatePicker, TimePicker} from "@mui/x-date-pickers";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export interface ISelectData {
	label: string,
	range: boolean,
	value: string,
	legend: string,
	options: Array<string | number>,
	handler: (e: SelectChangeEvent) => void
}

const App = () => {
	const [tower, setTower] = useState<string>(null)
	const [floor, setFloor] = useState<string>(null)
	const [room, setRoom] = useState<string>(null)

	const selectData: ISelectData[] = [
		{
			label: 'Tower',
			range: false,
			value: tower,
			options: ['А', 'Б'],
			legend: 'Выберете башню',
			handler: (e: SelectChangeEvent) => setTower(e.target.value as string)
		},
		{
			label: 'Floor',
			range: true,
			value: floor,
			legend: 'Выберете этаж',
			handler: (e: SelectChangeEvent) => setFloor(e.target.value as string),
			options: [3, 27],
		},
		{
			label: 'Room',
			range: true,
			value: room,
			legend: 'Выберете комнату',
			handler: (e: SelectChangeEvent) => setRoom(e.target.value as string),
			options: [1, 10],
		},
	]
	const [date, setDate] = useState(null)
	return (
		<form style={{padding:'20px'}}>
			<fieldset style={{border:'1px solid gray'}}>
				<legend>Форма бронирования переговорной</legend>
				<Box>
					<FormControl fullWidth>
						{
							selectData.map(select => {
								return <fieldset>
									<legend>{select.legend}</legend>
									<SelectElement key={select.label} selectData={select}/>
								</fieldset>
							})
						}
					</FormControl>
					<fieldset style={{display: 'flex', alignItems: 'center'}}>
						<legend>Выберете диапозон времени</legend>
						<TimePicker label="Basic time picker"/>
						<Typography sx={{margin: '0 20px'}}>-</Typography>
						<TimePicker label="Basic time picker"/>
					</fieldset>
					<fieldset style={{display: 'inline'}}>
						<legend>Выберете дату</legend>
						<DatePicker onChange={(newValue) => setDate(newValue)}/>
					</fieldset>
				</Box>
				<Button sx={{marginTop: '20px'}} size="large" variant="outlined"> Готово </Button>

			</fieldset>
		</form>
	);
};

export default App;