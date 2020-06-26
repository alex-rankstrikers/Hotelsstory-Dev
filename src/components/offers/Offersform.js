import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import MyHeader from '../common/header'
import ProfileBar from '../users/profile_bar'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Box from '@material-ui/core/Box'

import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  },
}));

function MyOfferList() {
const classes = useStyles();
 const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="App">
    <MyHeader />      
      <CssBaseline />
      <Box mt={16} mb={5}>
        <Container maxWidth="xl">
          <Grid container spacing={2} >
            <ProfileBar />
            <Grid item xs={12} sm={12} md={9} >             
              <Paper className="m-b-10" p={5}>
               <Box p={3} fontWeight="fontWeightBold" textAlign="left" fontSize={18} >Add Rewards / Deals</Box>
              <form noValidate autoComplete="off">
                      <Box p={3} mb={5}>
                      <Grid container xs={12} sm={12} md={12} spacing={2}>
                      <Grid item xs={6} sm={12} md={6} spacing={2}>
                      <FormControl component="fieldset">
                      <FormLabel component="legend">Rewards / Deals for</FormLabel>
                      <RadioGroup row aria-label="position" name="position" defaultValue="top">
                      <FormControlLabel value="1" control={<Radio color="primary" />} label="Buyers" />
                      <FormControlLabel value="2" control={<Radio color="primary" />} label="Corporate" />
                      <FormControlLabel value="3" control={<Radio color="primary" />} label="Travellers" />
                      </RadioGroup>
                      </FormControl>
                      </Grid>

                      <Grid item xs={6} sm={12} md={6} spacing={2}>
                      <FormControl component="fieldset">
                      <FormLabel component="legend">Offer category</FormLabel>
                      <RadioGroup row aria-label="position" name="position" defaultValue="top">
                      <FormControlLabel value="1" control={<Radio color="primary" />} label="MICE offers " />
                      <FormControlLabel value="2" control={<Radio color="primary" />} label="Leisure offers" />
                      </RadioGroup>
                      </FormControl>
                      </Grid>

                      <Grid item xs={6} sm={12} md={6} spacing={2}>
                        <FormControl className={classes.formControl} fullWidth>
                        <InputLabel id="demo-simple-select-label" fullWidth>Offer Category</InputLabel>
                        <Select fullWidth
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        onChange={handleChange}
                        >
                        <MenuItem value={1}>Students</MenuItem>
                        <MenuItem value={2}>Solo</MenuItem>
                        <MenuItem value={3}>Families</MenuItem>
                        <MenuItem value={4}>Couples</MenuItem>
                        <MenuItem value={5}>Business travelers</MenuItem>
                        <MenuItem value={6}>Senior Citizen</MenuItem>
                        <MenuItem value={7}>Weekend Gateway</MenuItem>
                        <MenuItem value={8}>Winter deals</MenuItem>
                        <MenuItem value={9}>Summer deals</MenuItem>

                        
                        </Select>
                        </FormControl>
                      </Grid>
 <Grid item xs={6} sm={12} md={6} spacing={2}>
 <FormControl component="fieldset" fullWidth>
                      <TextField fullWidth
                      id="date"
                      label="Rewards / Deals title" 
                      className={classes.textField}
                       />
                      </FormControl>
                      </Grid>
                      <Grid item xs={6} sm={12} md={6} spacing={2}>
                      <FormControl component="fieldset" fullWidth>
                      <TextField fullWidth
                      id ="date"
                      label="Rewards / Deals start date"
                      type="date"
                      className={classes.textField}
                      InputLabelProps={{
                      shrink: true,
                      }}
                      />
                      </FormControl> 
                      </Grid>
                      <Grid item xs={6} sm={12} md={6} spacing={2}>
                      <FormControl component="fieldset" fullWidth>
                      <TextField fullWidth
                      id="date"
                      label="Rewards / Deals end date"
                      type="date"
                      className={classes.textField}
                      InputLabelProps={{
                      shrink: true,
                      }}
                      />
                      </FormControl> 
                      </Grid>
                      <Grid item xs={6} sm={12} md={6} spacing={2}>
                       <FormControl component="fieldset" fullWidth>
                      <TextField fullWidth id="standard-basic" label="Offer code" />
                      </FormControl> 
                      </Grid>
                      <Grid item xs={6} sm={12} md={6} spacing={2}>
                       <FormControl component="fieldset" fullWidth>
                      <TextField fullWidth id="standard-basic" label="Any web link here" />
                      </FormControl> 
                      </Grid>
 <Grid item xs={6} sm={12} md={6} spacing={2}> <FormControl component="fieldset" fullWidth>
                      <TextField fullWidth id="standard-basic" type="file" label="Upload PDF file" /> </FormControl>
                      </Grid>
                        <Grid item xs={6} sm={12} md={6} spacing={2}> <FormControl component="fieldset" fullWidth>
                        <TextField fullWidth id="standard-basic" type="file" label="Upload image file" /> </FormControl>
                        </Grid>
                      <Grid item xs={6} sm={12} md={6} spacing={2}> <FormControl component="fieldset" fullWidth >
                      <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Rewards / Deals description" />
                      </FormControl>
                      </Grid>
                        <Grid item xs={6} sm={12} md={6} spacing={2}> <FormControl component="fieldset" fullWidth>
                        <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Terms and condition" />
                        </FormControl>
                        </Grid>
                        </Grid>
                      </Box>
            <Box display="flex" alignItems="center" justifyContent="center" mb={3} p={2}>
            <Button variant="contained" color="primary" className="baseBtn p-r-15 p-l-15" disableElevation>Save</Button>
            </Box>
                       </form>   
              </Paper>
            </Grid>

          </Grid>
        </Container>
      </Box>
    </div>
  )
}

export default MyOfferList
