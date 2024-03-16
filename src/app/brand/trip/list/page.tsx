'use client'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Button, Paper, TextField } from '@mui/material';
function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
}

const TripList = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };
    return (
        <Paper sx={{ overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Chuyến</TableCell>
                            <TableCell>Bến Xuất Phát</TableCell>
                            <TableCell>Thời gian</TableCell>
                            <TableCell>Phương tiện</TableCell>
                            <TableCell>Số Chỗ</TableCell>
                            <TableCell>Biển Kiểm Soát</TableCell>
                            <TableCell>Tài xế</TableCell>
                            <TableCell>Trạng thái</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>Hà Nội - Hải Phòng</TableCell>
                                <TableCell>Mỹ Đình - Quận 1</TableCell>
                                <TableCell>11:00:00 - 13:00:00 </TableCell>
                                <TableCell>
                                    <TextField
                                        size='small'
                                        required
                                        id="TaiXe"
                                        defaultValue="Lamborghini"
                                    />
                                </TableCell>
                                <TableCell>
                                    <TextField
                                        size='small'
                                        required
                                        label="Số chỗ ngồi"
                                        defaultValue={1000}
                                        type="number"
                                    />
                                </TableCell>
                                <TableCell>
                                    <TextField
                                        size='small'
                                        required
                                        id="TaiXe"
                                        defaultValue="12b-123123"
                                    />
                                </TableCell>
                                <TableCell>
                                    <TextField
                                        size='small'
                                        required
                                        id="Phuong tien"
                                        defaultValue="Nguyễn Văn A"
                                    />
                                </TableCell>
                                <TableCell>
                                    <Box sx={{ minWidth: 40 }}>
                                        <FormControl sx={{ minWidth: 120 }}>
                                            <Select
                                                size='small'
                                                value={age}
                                                onChange={handleChange}
                                            >
                                                <MenuItem value={10}>Chưa Chạy</MenuItem>
                                                <MenuItem value={20}>Đang Chạy</MenuItem>
                                                <MenuItem value={30}>Đã Chạy</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </TableCell>
                                <TableCell> <Button size="small" variant="contained">Submit</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper >
    )
}
const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];
export default TripList