import React from 'react';
import {FormControl} from "@mui/material";
import SelectElement from "./SelectElement";
import {ISelectData} from "./App";

const SelectSections = ({selectData}: { selectData: ISelectData[] }) => {
	return (
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
	);
};

export default SelectSections;