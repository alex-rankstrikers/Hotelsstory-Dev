import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import MyHeader from '../common/header'
import ProfileBar from '../users/profile_bar'

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

import PropTypes from 'prop-types';
import Collapse from '@material-ui/core/Collapse';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
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
  smallBtnText1: {
    padding: '10px',
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



const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function Row(props) {
const { row } = props;
const [open, setOpen] = React.useState(false);
const classes = useRowStyles();

return (
<React.Fragment>
  <TableRow className={classes.root}>
    <TableCell component="th" scope="row">
      {row.name}
    </TableCell>
    <TableCell align="">{row.calories}</TableCell>
    <TableCell align="">{row.fat}</TableCell>
    <TableCell align="">{row.carbs}</TableCell>
    <TableCell align="">{row.protein}</TableCell>
    <TableCell>
      <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </IconButton>
    </TableCell>
  </TableRow>

<TableRow>
<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
<Collapse in={open} timeout="auto" unmountOnExit>
  <Box margin={1}>
  <Typography variant="h6" gutterBottom component="div">Lead Status : Available<br/></Typography>

<Grid container spacing={1} >
<Grid item xs={12} sm={12} md={12}>
<form>

<Grid container className={classes.smallBtnText1}>
<Grid item xs={12} sm={12} md={3} className="m-t-15 m-b-15"><b>Agent Name </b><br /> Siva Thanigaimalai </Grid>
<Grid item xs={12} sm={12} md={3} className="m-t-15 m-b-15"><b>Agent Contact </b><br /> rank.siva@gmail.com </Grid>
<Grid item xs={12} sm={12} md={3} className="m-t-15 m-b-15"><b>Agent Business </b><br /> Rank Striker </Grid>
<Grid item xs={12} sm={12} md={3} className="m-t-15 m-b-15"><b>Organization</b><br />Rank Striker</Grid>
<Grid item xs={12} sm={12} md={3} className="m-t-15 m-b-15"><b>Organization Type</b><br />Information technology industry</Grid>
<Grid item xs={12} sm={12} md={3} className="m-t-15 m-b-15"><b>Client Type </b><br /> Agent</Grid>
<Grid item xs={12} sm={12} md={3} className="m-t-15 m-b-15"><b>Agent Commission (%) </b><br /> 15% </Grid>
<Grid item xs={12} sm={12} md={3} className="m-t-15 m-b-15"><b>Event Start Date</b><br />11-Jun-2020 </Grid>
<Grid item xs={12} sm={12} md={3} className="m-t-15 m-b-15"><b>Event End Date</b><br />12-Jun-2020 </Grid>
<Grid item xs={12} sm={12} md={3} className="m-t-15 m-b-15"><b>Event Type</b><br />Bachelor or bachelorette party</Grid>
<Grid item xs={12} sm={12} md={3} className="m-t-15 m-b-15"><b>Event Date Flexible</b><br />Yes </Grid>
<Grid item xs={12} sm={12} md={3} className="m-t-15 m-b-15"><b>Guest Rooms</b><br />Yes </Grid>
<Grid item xs={12} sm={12} md={3} className="m-t-15 m-b-15"><b>Equipment/Catering</b><br />Yes </Grid>
</Grid><br></br>

<Grid container className={classes.smallBtnText1}>
<Grid item xs={12} sm={12} md={12}>
  <Typography variant="h6" gutterBottom component="div">Rooms Details
</Typography></Grid>
<Grid item xs={12} sm={12} md={3} className="m-t-15 m-b-15"><b>Date : 15-Jan-2020</b><br />No of Rooms: 15 <br />No of Persons: 15 </Grid>
</Grid>

<Grid container className={classes.smallBtnText1}>
<Grid item xs={12} sm={12} md={12}>
  <Typography variant="h6" gutterBottom component="div">Rates Details
</Typography></Grid>
<Grid item xs={12} sm={12} md={3} className="m-t-15 m-b-15"><b>Enquiry Stage </b><br />
<TextField
    id="outlined-size-small"
    variant="outlined"
    size="small"
  />
</Grid>
<Grid item xs={12} sm={12} md={3} className="m-t-15 m-b-15"><b>Event + Rooms Cost</b><br />
<TextField
    id="outlined-size-small"
    variant="outlined"
    size="small"
  />
</Grid>
<Grid item xs={12} sm={12} md={3} className="m-t-15 m-b-15"><b>Equipments/Catering Cost</b><br />
<TextField
    id="outlined-size-small"
    variant="outlined"
    size="small"
  />
</Grid>
<Grid item xs={12} sm={12} md={3} className="m-t-15 m-b-15"><b>Total Revenue</b><br />
<TextField
    id="outlined-size-small"
    variant="outlined"
    size="small"
  />
</Grid>
<Grid item xs={12} sm={12} md={3} className="m-t-15 m-b-15">
<br /><Button
  variant="contained"
  color="primary"
  size="large"
  className={classes.button}
  startIcon={<SaveIcon />}
>
  Save
</Button>
</Grid>
</Grid>
</form>

</Grid>
</Grid>        
</Box>
</Collapse>
</TableCell>
</TableRow>
</React.Fragment>
);
}
  

Row.propTypes = {
row: PropTypes.shape({
  calories: PropTypes.number.isRequired,
  carbs: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  history: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.number.isRequired,
      customerId: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }),
  ).isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  protein: PropTypes.number.isRequired,
}).isRequired,
};
  
function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      { date: '2020-01-05', customerId: '11091700', amount: 3 },
      { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
    ],
  };
}

// const rows = [
//   {
//     name:'siva1',
//     calories:'siva2',
//     fat:'siva3',
//     carbs:'siva4',
//     protein:'siva5',
//     price:'siva6',   
//   },
// ];

const rows = [
  createData('08-Jun-2020','08-Jun-2020', '7GVIWUY460', 'Mice + Room', 'Available ', 3.99),
  createData('12-July-2020','08-Jun-2020',  '7GVIWUY460', 'Mice', 'No Available ', 4.99),
  createData('22-Jan-2020','08-Jun-2020', '7GVIWUY460', 'Room', 'New Request', 3.79),
  createData('15-Mar-2020','08-Jun-2020', '7GVIWUY460', 'Mice + Room', 'Available ', 2.5),
  createData('07-Dec-2020','08-Jun-2020', '7GVIWUY460', 'Mice + Room', 'Available ', 1.5),
];


function MyOffer() {
const classes = useStyles()
return (
<div className="App">
<MyHeader />      
<CssBaseline />
<Box mt={16} mb={5}>
<Container maxWidth="xl">
<Grid container spacing={1} >        
<ProfileBar />
<Grid item xs={12} sm={12} md={9}>
  <Paper className="m-t-10 m-b-10">
  <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          
          <TableRow>
            <TableCell align=""><b>Enquiry Date</b></TableCell>
            <TableCell align=""><b>Event Start Date</b></TableCell>
            <TableCell align=""><b>Enquiry ID</b></TableCell>
            <TableCell align=""><b>Enquiry Type</b></TableCell>
            <TableCell align=""><b>Enquiry Stage</b></TableCell>
            <TableCell />
          </TableRow>

        </TableHead>
        
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>

      </Table>
    </TableContainer>
  </Paper>
</Grid>
</Grid>
</Container>
</Box>
</div>
  )
}

export default MyOffer
