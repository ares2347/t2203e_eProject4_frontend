import { Alert, Container, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from "@mui/material"
import CheckIcon from '@mui/icons-material/Check';
import { useDataContext } from "./DataContext";
import { ChangeEvent } from "react";


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Step2 = () => {
    const { data, updateData } = useDataContext();
    const handleSelectPickupPoint = (event: ChangeEvent<HTMLInputElement>, value: string) => {
        updateData({...data, pickupPoint: value})
    }
    const handleSelectDropoffPoint = (event: ChangeEvent<HTMLInputElement>, value: string) => {
        updateData({...data, dropoffPoint: value})
    }
    return (
        <div>
            <Container maxWidth='lg'>
                <Grid xs={7}
                    paddingX={2}
                    marginY={2}
                >
                    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                        An tâm được đón đúng nơi, trả đúng chỗ đã chọn và dễ dàng thay đổi khi cần.
                    </Alert>
                </Grid>
                <Grid container gap={1} wrap="nowrap" >
                    <Grid item
                        container
                        xs={15}
                        gap={2}
                        wrap="nowrap"
                        direction="column"
                        paddingX={2}
                        marginY={2}>
                        <Grid item
                            container
                            xs={12}
                            gap={2}
                            wrap="nowrap"
                            boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                            paddingY={2}
                            paddingX={2}
                            alignItems="center">
                            <Grid item container direction="column" xs={6} height="100%">
                                <Typography
                                    textAlign={'center'}
                                    children={`Điểm đón`}
                                />
                                <FormControl>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="female"
                                        name="radio-buttons-group"
                                        onChange={handleSelectPickupPoint}
                                    >
                                        <FormControlLabel value="Mỹ Đình" control={<Radio />} label={"Mỹ Đình"} /> 
                                        <FormControlLabel value="Giáp Bát" control={<Radio />} label="Giáp Bát" />
                                        <FormControlLabel value="Nội Bài" control={<Radio />} label="Nội Bài" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item
                                container
                                direction="column"
                                xs={6}
                                borderLeft="1px solid hsl(0, 0%, 60%)"
                                height="100%"
                                paddingX={2}>
                                <Typography
                                    textAlign={'center'}
                                    children={`Điểm Trả`}
                                />
                                <FormControl>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="female"
                                        name="radio-buttons-group"
                                        onChange={handleSelectDropoffPoint}
                                    >
                                        <FormControlLabel value="Gò Vấp" control={<Radio />} label="Gò Vấp" />
                                        <FormControlLabel value="Thủ Đức" control={<Radio />} label="Thủ Đức" />
                                        <FormControlLabel value="Quận 1" control={<Radio />} label="Quận 1 " />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
export default Step2