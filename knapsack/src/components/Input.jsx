import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import { useDispatch } from 'react-redux';
import { TextField } from '@mui/material';

const Input = styled(MuiInput)`
  width: 42px;
`;

export default function InputField(props) {
    const [value, setValue] = React.useState (
        30,     
  );

  const dispatch = useDispatch();
    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
        dispatch({type:'UPDATE',weight :newValue})
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
        dispatch({type:'UPDATE',weight : Number(event.target.value)})
    };

    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        } else if (value > 100) {
            setValue(100);
        }
    };

    return (
        <Box display="flex" alignItems="center" sx={{gap: 2}}>
        <label style={{color: "#ffffff", }}>Capacity: </label>
        <TextField
        id="filled-number"
        label="Number"
        type="number"
        onChange={handleInputChange}
        sx={{
            '& .MuiInputBase-input': {
                backgroundColor: '#2D9596',
                borderRadius: 4,
                borderColor: "#ffffff", // Set background color
              },
        }}
        />
        </Box>
    );
}
