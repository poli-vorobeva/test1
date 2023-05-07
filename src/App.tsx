import React, {useEffect, useState} from 'react';
import {Box, SelectChangeEvent} from "@mui/material";
import TimeElement from "./TimeElement";
import DateElement from "./DateElement";
import SelectSections from "./SelectSections";
import Buttons from "./Buttons";

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
	const [date, setDate] = useState(null)
	const [beginTime, setBeginTime] = useState<string>(null)
	const [endTime, setEndTime] = useState(null)
	const [activeButton, onActiveButton] = useState('')
	const cleanData = () => {
		setTower(null)
		setFloor(null)
		setRoom(null)
		setDate(null)
		setBeginTime(null)
		setEndTime(null)
		onActiveButton(null)
	}
	useEffect(() => {
		if (activeButton === 'submit') {
			if (floor && room && tower && date && beginTime && endTime) {
				console.log(JSON.stringify({
					floor, room, tower, date,
					time: {
						beginTime: {
							hour: beginTime.split('/')[0],
							minute: beginTime.split('/')[1]
						},
						endTime: {
							hour: endTime.split('/')[0],
							minute: endTime.split('/')[1]
						}
					}
				}))
				cleanData()
			}
		} else if (activeButton === 'cancel') {
			cleanData()
		}
	}, [activeButton])
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
	return (
		<form style={{padding: '20px'}}>
			<fieldset style={{border: '1px solid gray'}}>
				<legend>Форма бронирования переговорной</legend>
				<Box>
					<SelectSections selectData={selectData}/>
					<TimeElement begin={!!beginTime} end={!!endTime} onBegin={setBeginTime} onEnd={setEndTime}/>
					<DateElement date={!!date} onDate={setDate}/>
				</Box>
			</fieldset>
			<Buttons onPress={onActiveButton}/>
		</form>
	);
};

export default App;