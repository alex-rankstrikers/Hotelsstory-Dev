import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import MyHeader from '../common/header'
import ProfileBar from '../users/profile_bar'

// import useBreakpoints from './common/useBreakpoint';

import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import avatarImg from '../../assets/images/dummyuser.jpg'
import profileBg from '../../assets/images/profilebg.jpg'
import SendIcon from '@material-ui/icons/Send'

import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined'
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined'
//Icon Button
import IconButton from '@material-ui/core/IconButton'
//Input text Field
import TextField from '@material-ui/core/TextField'
/* Import Icons */
import InsertPhotoOutlinedIcon from '@material-ui/icons/InsertPhotoOutlined'
import GifIcon from '@material-ui/icons/Gif'
import PollOutlinedIcon from '@material-ui/icons/PollOutlined'
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined'
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined'
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined'
// const point = useBreakpoints();

// http://localhost/hotelsstory-partner/public/leads_api

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  profileContainer: {
    overflow: 'hidden',
  },
  profile: {
    height: '130px',
    overflow: 'hidden',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    overflow: 'hidden',
  },
  hotelListIconSize: {
    fontSize: '18px',
  },
  hotelListButtonIconSize: {
    fontSize: '14px',
    marginRight: '5px',
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },

  thumbnail: {
    width: theme.spacing(14),
    height: theme.spacing(14),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  profileAvatar: {
    margin: '-50px auto 0 auto',
    width: '100px',
    height: '100px',
    border: '4px solid #fff',
  },
  postmedia: {
    height: theme.spacing(68),
    overflow: 'hidden',
  },
  customBorder: {
    borderColor: '#cccccc7a',
  },
  hashtagavatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    backgroundColor: theme.palette.primary.main,
  },
  profileTweetPostPofileImg: {
    width: '50px',
    border: '1px solid #fff',
    height: '50px',
  },
  inputFile: {
    display: 'none',
  },
  smallBtnText: {
    fontSize: '11px',
    padding: '4px 15px',
    fontWeight: 'bold',
    paddingBottom: '2px',
    borderRadius: '30px',
    textTransform: 'Capitalize',
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

}))
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('08-Jun-2020','08-Jun-2020','7GVIWUY460','Mice + Room','Available'),
  createData('12-July-2020','08-Jun-2020','7GVIWUY460', 'Mice', 'No Available'),
];

function MyOffer() {
  const classes = useStyles()
  return (
    <div className="App">
    <MyHeader />      
      <CssBaseline />
      <Box mt={16} mb={5}>
        <Container maxWidth="xl">
          <Grid container spacing={2} >
            <ProfileBar />
            <Grid item xs={12} sm={12} md={9}>      
             
<Paper className="m-t-10 m-b-10">
<div className={classes.root}>
      <Grid container spacing={0}>
      <Grid item xs={12} sm={12} md={12} className="p-l-20 p-r-20"><p><b>Enquiry Details</b></p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-l-20 p-r-20"><p><b>Agent Name </b><br/>Siva Thanigaimalai</p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-l-20 p-r-20"><p><b>Agent Contact</b><br/>rank.siva@gmail.com</p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-l-20 p-r-20"><p><b>Agent Business</b><br/>Rank Striker</p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-l-20 p-r-20"><p><b>Organization</b><br/>The Rank Strikers</p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-l-20 p-r-20"><p><b>Organization Type</b><br/>Information technology industry</p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-l-20 p-r-20"><p><b>Enquiry Id</b><br/>7GVIWUY460</p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-l-20 p-r-20"><p><b>Enquiry Date</b><br/>08-Jun-2020</p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-l-20 p-r-20"><p><b>Agent Commission (%)</b><br/>10%</p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-l-20 p-r-20"><p><b>Client Type</b><br/>Agent</p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-l-20 p-r-20"><p><b>Lead Type</b><br/>Mice + Room</p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-l-20 p-r-20"><p><b>Event Start Date</b><br/>11-Jun-2020 </p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-l-20 p-r-20"><p><b>Event End Date</b><br/>12-Jun-2020 </p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-l-20 p-r-20"><p><b>Event Type</b><br/>Anniversary or birthday</p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-l-20 p-r-20"><p><b>Event Date Flexible</b><br/>No</p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-l-20 p-r-20"><p><b>Guest Rooms</b><br/>Yes</p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-l-20 p-r-20"><p><b>Equipment/Catering</b><br/>Yes</p></Grid>
        {/* <Grid item xs={12} sm={12} md={3} className="p-l-20 p-r-20"><p><b></b><br/></p></Grid> */}
      </Grid>

      <Grid container spacing={0}>
      <Grid item xs={12} sm={12} md={12} className="p-l-20 p-r-20"><p><b>Room Details</b></p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-l-20 p-r-20"><p><b>Date : 11-Jun-2020</b><br/>Number of rooms : 15 <br/>Number of peoples : 17</p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-l-20 p-r-20"><p><b>Date : 12-Jun-2020</b><br/>Number of rooms : 12 <br/>Number of peoples : 15</p></Grid>
        {/* <Grid item xs={12} sm={12} md={3} className="p-l-20 p-r-20"><p><b></b><br/></p></Grid> */}
      </Grid>

      <Grid container spacing={0}>
      <Grid item xs={12} sm={12} md={12} className="p-l-20 p-r-20"><p><b>Rate Details</b></p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-l-20 p-r-20"><p><b>Available </b><br/>
        <RadioGroup row aria-label="position" name="position" defaultValue="top">
        <FormControlLabel value="1" control={<Radio color="primary" />} label="Yes" />
        <FormControlLabel value="2" control={<Radio color="primary" />} label="No" />
      </RadioGroup></p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-l-20 p-r-20"><p><b>Event + Rooms Cost</b><br/>
        <TextField
          id="outlined-size-small"
          variant="outlined"
          size="small"
        />
        </p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-l-20 p-r-20"><p><b>Equipments/Catering Cost</b><br/>
        <TextField
          id="outlined-size-small"
          variant="outlined"
          size="small"
        />
        </p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-l-20 p-r-20"><p><b>Total Revenue</b><br/>
        <TextField
          id="outlined-size-small"
          variant="outlined"
          size="small"
        />
        </p></Grid>
        <Grid item xs={12} sm={12} md={3} className="p-l-20 p-r-20"><p><b></b><br/>
        <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
      >Save
      </Button></p></Grid>
      </Grid>
    </div>
</Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  )
}

export default MyOffer
