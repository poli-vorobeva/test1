import React from 'react';
import Button from "@mui/material/Button";
import {Box} from "@mui/material";
import {onSetType} from "./TimeElement";

const Buttons = ({onPress}:{onPress:onSetType}) => {
	return (
		<Box>
			<Button onClick={()=>onPress('submit')} sx={{marginTop: '20px'}} size="large" variant="outlined"> Готово </Button>
			<Button onClick={()=>onPress('cancel')} sx={{marginTop: '20px'}} size="large" variant="outlined"> Очистить </Button>
		</Box>
	);
};

export default Buttons;