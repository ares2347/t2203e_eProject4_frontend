import { Box, Button, Card, CardActionArea, CardContent, Container, Divider, Grid, List, ListItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Typography } from "@mui/material"
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import CommuteIcon from '@mui/icons-material/Commute';
import BarChartIcon from '@mui/icons-material/BarChart';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import PersonIcon from '@mui/icons-material/Person';
const TestOverview = () => {
    return (
        <Container maxWidth="lg" sx={{ textAlign: 'center' }} >
            <Grid
                spacing={{ xs: 6, md: 10 }}
                justifyContent="center"
                alignItems="center"
                container
            >
                <Grid item container spacing={3} alignItems="center"
                    paddingTop={3} paddingLeft={3} paddingBottom={3}>
                    <Grid xs={12} sm={6} md={3} item>
                        <Card
                            sx={{
                                px: 1
                            }}
                        >
                            <CardContent>
                                <Grid >
                                    <CommuteIcon fontSize="large" />
                                </Grid>
                                <Typography variant="h5" noWrap>
                                    Bitcoin
                                </Typography>
                                <Typography variant="subtitle1" noWrap>
                                    BTC
                                </Typography>
                                <Box
                                    sx={{
                                        pt: 3
                                    }}
                                >
                                    <Typography variant="h3" gutterBottom noWrap>
                                        $3,586.22
                                    </Typography>
                                    <Typography variant="subtitle2" noWrap>
                                        1.25843 BTC
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={12} sm={6} md={3} item>
                        <Card
                            sx={{
                                px: 1
                            }}
                        >
                            <CardContent>
                                <Grid >
                                    <BarChartIcon fontSize="large" />
                                </Grid>
                                <Typography variant="h5" noWrap>
                                    Ripple
                                </Typography>
                                <Typography variant="subtitle1" noWrap>
                                    XRP
                                </Typography>
                                <Box
                                    sx={{
                                        pt: 3
                                    }}
                                >
                                    <Typography variant="h3" gutterBottom noWrap>
                                        $586.83
                                    </Typography>
                                    <Typography variant="subtitle2" noWrap>
                                        5,783 XRP
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={12} sm={6} md={3} item>
                        <Card
                            sx={{
                                px: 1
                            }}
                        >
                            <CardContent>
                                <Grid >
                                    <ConfirmationNumberIcon fontSize="large" />
                                </Grid>
                                <Typography variant="h5" noWrap>
                                    Cardano
                                </Typography>
                                <Typography variant="subtitle1" noWrap>
                                    ADA
                                </Typography>
                                <Box
                                    sx={{
                                        pt: 3
                                    }}
                                >
                                    <Typography variant="h3" gutterBottom noWrap>
                                        $54,985.00
                                    </Typography>
                                    <Typography variant="subtitle2" noWrap>
                                        34,985 ADA
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={12} sm={6} md={3} item>
                        <Card
                            sx={{
                                px: 1
                            }}
                        >
                            <CardContent>
                                <Grid >
                                    <PersonIcon fontSize="large" />
                                </Grid>
                                <Typography variant="h5" noWrap>
                                    Cardano
                                </Typography>
                                <Typography variant="subtitle1" noWrap>
                                    ADA
                                </Typography>
                                <Box
                                    sx={{
                                        pt: 3
                                    }}
                                >
                                    <Typography variant="h3" gutterBottom noWrap>
                                        $54,985.00
                                    </Typography>
                                    <Typography variant="subtitle2" noWrap>
                                        34,985 ADA
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Grid item container spacing={2}>
                    <Grid item xs={6}>
                        <BarChart
                            series={[
                                { data: [35, 44, 24, 34] },
                                { data: [51, 6, 49, 30] },
                                { data: [15, 25, 30, 50] },
                                { data: [60, 50, 15, 25] },
                            ]}
                            height={290}
                            xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
                            margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <LineChart
                            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                            series={[
                                {
                                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                                },
                            ]}
                            width={500}
                            height={300}
                        />                    </Grid>
                </Grid>

                <Grid item md={10} >
                    <TableContainer>
                        <Table sx={{ minWidth: 800 }} aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Dessert</TableCell>
                                    <TableCell >Calories</TableCell>
                                    <TableCell >Fat&nbsp;(g)</TableCell>
                                    <TableCell >Carbs&nbsp;(g)</TableCell>
                                    <TableCell >Protein&nbsp;(g)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                <TableRow
                                    // key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        abc
                                    </TableCell>
                                    <TableCell >asd</TableCell>
                                    <TableCell >qwe</TableCell>
                                    <TableCell >qweew</TableCell>
                                    <TableCell >rqwrqw</TableCell>
                                </TableRow>

                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Container>)
}
export default TestOverview