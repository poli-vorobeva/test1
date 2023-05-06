// import React from 'react';
// import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
//
// const SelectRange = ({selectData}) => {
// const rangeArray=[]
// 	for(let i=0;i<=selectData.options[1]-selectData.options[0];i++){
// 		rangeArray.push(selectData.options[0]+i)
// 	}
// 	console.log(rangeArray)
// 	return (
// 		<FormControl fullWidth>
// 			<InputLabel id={selectData.label}>{selectData.label}</InputLabel>
// 			<Select
// 				labelId={selectData.label}
// 				value={selectData.value||''}
// 				onChange={selectData.handler}
// 				label={selectData.label}
// 			>
// 				{
// 					rangeArray.map(range=>{
// 						return <MenuItem value={range}>{range}</MenuItem>
// 					})
// 				}
// 			</Select>
// 		</FormControl>
// 	);
// };
//
//export default SelectRange;