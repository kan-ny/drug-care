import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { ref, set } from "firebase/database";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function FormData({ toggle_, database }) {

  const [name, setName] = useState('');
  const [nameV, setNameV] = useState(false);
  const [email, setEmail] = useState('');
  const [emailV, setEmailV] = useState(false);
  const re = /\S+@\S+\.\S+/;
  const [fwdbtn, setfwdbtn] = useState(false);
  const [phone, setPhone] = useState('');
  const [phoneV, setPhoneV] = useState(false);
  const [street, setStreet] = useState('');
  const [apt, setApt] = useState('');
  const [city, setCity] = useState('');
  const [state_, setState_] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [success_post, setsuccess_post] = useState(false);

  const forward = () => {
    if (emailV === true || nameV === true) {
      setfwdbtn(true)
    }
  }

  const submitForm = () => {
    let objectToPost = {
      email_id: email,
      name: name,
      phone: phone,
      address: {
        street: street,
        apt: apt,
        city: city,
        state_: state_,
        zipcode: zipcode,
      }
    }
    set(ref(database, 'users/' + phone), objectToPost)
    setsuccess_post(true);
  }

  return (
    <Grid rowSpacing={1} container spacing={2}>
      <Grid item xs={2}>
        <Button onClick={toggle_} startIcon={<ArrowBackIcon />} variant="contained" size="small"></Button>
      </Grid>
      <Grid item xs={8}>
        <br />
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}> ALCOHOL AND OTHER DRUGS EDUCATION </Typography>
        <br />
        <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1 }}>
          If you are interested in becoming an Alcohol and Other Drugs Peer Educator complete the form below . For information on other volunteer opportunities with the Health & Wellness Center, contact Denise Keary, Health and Wellness Coordinator, 216-687-2048.
        </Typography>
        <br />
        {
          success_post === true ?
            <Stack sx={{ width: '100%' }} spacing={2}>
              <Alert severity="success"> Record save successfully :)</Alert>
            </Stack>
            :
            <div>
              <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' },  }} noValidate autoComplete="off">
                {
                  fwdbtn === false && (
                    <div>
                      <Typography variant="subtitle1" > STEP 1 </Typography>
                      <br />
                      <div>
                        <TextField error={!nameV && name !== ''} id="outlined-basic" value={name} required={true} label="Full Name"
                          onChange={e => {
                            setName(e.target.value)

                            if (name.length > 2) {
                              setNameV(true)
                            } else {
                              setNameV(false)
                            }
                          }} />

                        <TextField error={!emailV && email !== ''} id="outlined-error" required={true} label="Email" type="email" autoComplete="off" value={email}
                          onChange={e => {
                            setEmail(e.target.value)
                            if (re.test(e.target.value)) {
                              setEmailV(true)
                            } else {
                              setEmailV(false)
                            }
                          }} />
                      </div>
                      <br />
                      <Button disabled={emailV === false || nameV === false} onClick={forward} endIcon={<ArrowForwardIcon />} variant="contained" size="small">Next</Button>
                    </div>
                  )
                }
              </Box>
              {
                fwdbtn === true && (
                  <div>
                    <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} noValidate autoComplete="off" >
                      <Typography variant="subtitle1" > STEP 2</Typography>
                      <TextField error={phoneV} id="outlined-basic" label="Mobile Number" helperText="Enter 10 digit Number" required={true} type="number" defaultValue="" value={phone}
                        onKeyPress={e => {
                          if (e.target.value.length > 9 || '1234567890'.includes(e.key) === false) {
                            e.preventDefault();
                          }
                        }
                        }
                        onChange={e => {
                          setPhone(e.target.value);
                          console.log(e.target.value, e.target.value.length)
                          if (e.target.value.length === 10) {
                            setPhoneV(false)
                          } else {
                            setPhoneV(true)
                          }  } } />
                      <br />
                      <Typography variant="subtitle2" > Address </Typography>
                      <TextField error={false} id="outlined-basic" label="Street" required={true} defaultValue=""
                        onChange={e => {
                          setStreet(e.target.value);
                        }
                        } />

                      <TextField error={false} id="outlined-basic" label="Apt/Unit" defaultValue=""
                        onChange={e => {
                          setApt(e.target.value);
                        }} />

                      <TextField error={false} required={true} id="outlined-basic" label="City" defaultValue=""
                        onChange={e => {
                          setCity(e.target.value);
                        }} />

                      <TextField error={false} required={true} id="outlined-basic" label="State" defaultValue=""
                        onChange={e => {
                          setState_(e.target.value);
                        }} />

                      <TextField error={false} required={true} value={zipcode} id="outlined-basic" type="number" label="Zip Code" defaultValue=""
                        onKeyPress={e => {
                          if (zipcode.length < 5 && '1234567890'.includes(e.key)) {
                          } else {
                            e.preventDefault();
                          } } }
                        onChange={e => { setZipcode(e.target.value); }} />
                    </Box>
                    <br />
                    <Button disabled={zipcode.length !== 5 ||
                      city === '' || city === ' ' ||
                      state_ === '' || state_ === ' ' ||
                      apt === '' || apt === ' ' ||
                      street === '' || street === ' ' ||
                      phoneV === true || emailV === false || nameV === false
                    } onClick={submitForm} endIcon={<HowToRegIcon />} variant="contained" size="small">Submit</Button>
                  </div>
                )
              }
            </div>
        }
      </Grid>
      <Grid item xs={2}>
      </Grid>
    </Grid>
  );
}