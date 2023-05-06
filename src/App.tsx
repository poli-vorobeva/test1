import React, {useState} from 'react';
import {Box, FormControl, SelectChangeEvent} from "@mui/material";
import SelectElement from "./SelectElement";
import {DatePicker, TimePicker} from "@mui/x-date-pickers";
export interface ISelectData{
	label: string,
	range: boolean,
	value: string,
	options: Array<string|number>,
	handler: (e: SelectChangeEvent) => void
}
const App = () => {
	const [tower, setTower] = useState<string>(null)
	const [floor, setFloor] = useState<string>(null)
	const [room, setRoom] = useState<string>(null)

	const selectData:ISelectData[] = [
		{
			label: 'Tower',
			range: false,
			value: tower,
			options: ['А', 'Б'],
			handler: (e: SelectChangeEvent) => setTower(e.target.value as string)
		},
		{
			label: 'Floor',
			range: true,
			value: floor,
			handler: (e: SelectChangeEvent) => setFloor(e.target.value as string),
			options: [3, 27],
		},
		{
			label: 'Room',
			range: true,
			value: room,
			handler: (e: SelectChangeEvent) => setRoom(e.target.value  as string),
			options: [1, 10],
		},
	]
const [date,setDate]=useState(null)
	return (
		<Box>
			<FormControl fullWidth>
				{
					selectData.map(select => {
							return <SelectElement key={select.label} selectData={select}/>
					})
				}
			</FormControl>
			<TimePicker label="Basic time picker"/>
			<DatePicker onChange={(newValue) => setDate(newValue)}/>

		</Box>
	);
};

export default App;