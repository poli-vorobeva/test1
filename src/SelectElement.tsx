import React from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {ISelectData} from "./App";


interface ISelectProps {
	selectData:ISelectData
}
const SelectElement = ({selectData}:ISelectProps) => {
	const rangeArray=[]
	if(selectData.range && typeof selectData.options[1]==='number'
		&& typeof selectData.options[0]==='number' ) {
		const lnght:number= (selectData.options[1]) - (selectData.options[0])
		for (let i = 0; i <=lnght; i++) {
			rangeArray.push(selectData.options[0] as number + i)
		}
	}
	//todo check start and end
	return (
		<FormControl fullWidth>
		<InputLabel id={selectData.label}>{selectData.label}</InputLabel>
	<Select
		sx={{border: !selectData.value && '1px solid red'}}
		defaultValue={selectData.value||''}
		labelId={selectData.label}
		value={selectData.value||''}
		onChange={selectData.handler}
		label={selectData.label}
	>
		{
			selectData.range
				?
				rangeArray.map(range=>{
					return <MenuItem key={range} value={range}>{range}</MenuItem>
				})
			:
			selectData.options.map(option=>{
				return <MenuItem key={option} value={option}>{option}</MenuItem>
			})
		}
	</Select>
		</FormControl>
	);
};

export default SelectElement;