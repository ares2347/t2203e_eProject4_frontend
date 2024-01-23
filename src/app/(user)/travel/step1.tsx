import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useDataContext } from './DataContext';
import { Stack } from '@mui/material';
import Typography from '@mui/joy/Typography';

const Step1 = () => {
  const { data, updateData } = useDataContext();
  const handle1Change = (e: { target: { value: any; }; }) => {
    updateData({ step1Data: e.target.value });
  };
  return (
    <div>


    </div>


  )

}
export default Step1;