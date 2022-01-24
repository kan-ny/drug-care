import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import img from '../../src/assets/aboutus.png';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export default function AboutUs({ toggle_, userlist }) {

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);

    }

    return (
        <Card sm={{ maxWidth: 750 }}>
            <div >
                <CardContent >

                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="320"
                        width="300"
                        image={img}
                    />


                    <Typography style={{ margin: '10px' }} gutterBottom variant="h5" component="div">
                        Find the treatment you need
                    </Typography>
                    {/* <Typography gutterBottom variant="h6" component="div">
                        About Us
                    </Typography> */}

                    <CardActions>
                        <Button onClick={toggle_} variant="contained" size="small">Register here</Button>
                    </CardActions>



                    <Typography align='left' variant="subtitle1" color="text.secondary">
                        Created for the community affected by the opioid crisis, drughelp.care is a free website that allows drug treatment providers to list the number of open treatment slots daily. The site is fully searchable, and quickly and efficiently matches substance users with the best available treatment services.

                    </Typography>



                    <br />
                    <Typography align='left' variant="subtitle1" color="text.secondary">

                        Thanks to funding from the Woodruff Foundation (20018-2019) and the Centers for Disease Control and Prevention (2019-present), a community outreach team led by Michelle Unangst registers more and more treatment providers on the site every day.  </Typography>
                    <br />

                    <Typography align='left' variant="subtitle1" color="text.secondary">

                        Agencies interested in listing their services can contact admin@drughelp.care.
                    </Typography>


                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>

                                <Button variant="contained" size="small">Volunteer List</Button>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>


                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell><b>Name </b></TableCell>
                                            <TableCell  align="right" > <b>Email </b></TableCell>
                                            <TableCell align="right"><b>Phone No</b></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {userlist.map((row) => (
                                            <TableRow
                                                key={row.name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {row.name}
                                                </TableCell>
                                                <TableCell align="right">{row.email_id}</TableCell>
                                                <TableCell align="right">{row.phone}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>



                        </AccordionDetails>
                    </Accordion>


                </CardContent>



            </div>
        </Card>
    );
}