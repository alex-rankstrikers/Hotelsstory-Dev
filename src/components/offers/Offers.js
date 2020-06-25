import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import MyHeader from '../common/header'
import HotelsFollow from '../common/hotels_follow'
import UpcomingEvents from '../common/upcoming_events'
import ProfileBar from '../users/profile_bar'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import profileBg from '../../assets/images/profilebg.jpg'

import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined'
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined'
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined'
//Icon Button
import IconButton from '@material-ui/core/IconButton'
import Divider from '@material-ui/core/Divider';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Collapse from '@material-ui/core/Collapse'
import CardActions from '@material-ui/core/CardActions'
import clsx from 'clsx'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent';
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
  offerimg: {
    width: theme.spacing(15),
    height: theme.spacing(15),
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
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  customText:{
    fontSize:".7rem",
  },

}))


function MyOffer() {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  }
  return (
    <div className="App">
    <MyHeader />      
      <CssBaseline />
      <Box mt={16} mb={5}>
        <Container maxWidth="xl">
          <Grid container spacing={2} >
            <ProfileBar />
            <Grid item xs={12} sm={12} md={6}>             
              <Paper className="m-b-10">
              <Box p={2} >
                    <Grid container xs={12} sm={12} md={12}>
                  <Grid item xs={12} sm={12} md={2}>
                  <Box mr={2} className={`${classes.offerimg}`}>
                  <img src={profileBg} alt=""/>
                  </Box>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
<Box display="flex" flexDirection="row" alignItems="center">
                      <Link href="#" color="primary" underline="none">
                        <Box color="#484848" fontSize={16} textAlign="left" fontWeight="fontWeightBold" className="m-r-10"> Exclusive 10% NHS Discount at</Box>
                      </Link>
                                           
                    </Box>
                    <Box display="flex" flexDirection="row" alignItems="center">
                      
                      <Link href="#" color="primary" underline="none">
                        <Box color="#484848" fontSize={16} textAlign="left" className="m-r-10"> HotelsStory.com</Box>
                      </Link>                                           
                    </Box>
                    <Box display="flex" flexDirection="row" alignItems="center">                      
                      <Link href="#" color="primary" underline="none">
                        <Box color="#909090" fontSize={12} textAlign="left" fontWeight="fontWeightRegular"> Valid from 15 Dec 2019 till 31 Dec 2020</Box>
                      </Link>                      
                    </Box>
                  </Grid>  
                  <Grid item xs={12} sm={12} md={4}>
<Box display="flex" alignItems="center" justifyContent="center" mb={3}>
                  <Button variant="contained" color="primary" className="baseBtn p-r-15 p-l-15" disableElevation>Get Deal</Button>
                </Box>
                <Box display="flex" flexDirection="row" alignItems="center">                      
                      <Link href="#" color="primary" >
                        <Box color="#909090" fontSize={12} textAlign="left" fontWeight="fontWeightRegular"> View all HotelsStory.com voucher codes</Box>
                      </Link>                      
                    </Box>
                
                  </Grid>   
                </Grid>
                <Box mb={3} mt={3}>
                 <Divider />
                 </Box>


                 

<Box p={3} fontWeight="fontWeightRegular" color="primary" textAlign="left" fontSize={14} >Student offer: This offer is only available to students with a valid .ac.uk email address.
Please refer to the Terms and Conditions for further information.</Box>
                 <Box mb={3} mt={3}>
                 <Divider />
                 </Box>
                 
                 <Box  fontWeight="fontWeightRegular" textAlign="left" fontSize={14} >Terms 
                 <IconButton className={clsx(classes.expand, { [classes.expandOpen]: expanded, })}  onClick={handleExpandClick}
          aria-expanded={expanded} aria-label="show more" > <ExpandMoreIcon /> </IconButton>
        </Box>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent >
          
          <Typography  className={classes.customText}>
            1. Only available with a valid student ID</Typography>
<Typography className={classes.customText}  >2. This coupon is only valid when you click on the Hotels.com link via VCUK Student website.</Typography>
<Typography  className={classes.customText}>3. Use this coupon to get 10% off the price of your booking at a participating Best Price Guarantee hotel when you stay between 1 and 28 nights .</Typography>
<Typography  className={classes.customText}>4. You must pay for your stay when you make the booking. The discount only applies to the first room in the booking. You'll need to pay the full price for any other rooms. The discount doesn't apply to any taxes, fees or additional costs.</Typography>
<Typography  className={classes.customText}>5. To use this coupon, you must be over 18 years old and resident in the United Kingdom. You may only use this coupon for bookings made between 12:01 am MT on 01/04/2020 and 11:59pm MT on 31/03/2021 on the UK version of Hotels.com for a stay to be completed between 01/04/2020 and 30/09/2021. Bookings are subject to availability and the hotel's terms and conditions.</Typography>
<Typography  className={classes.customText}>6. This coupon can't be used for:</Typography>
<Typography  className={classes.customText}>7. Package bookings i.e. hotel + flight</Typography>
<Typography className={classes.customText}>8. Bookings made through Group Travel Services</Typography>
<Typography  className={classes.customText}>9. Bookings paid for at the hotel</Typography>
<Typography  className={classes.customText}>10. Bookings paid for in a foreign currency</Typography>
<Typography  className={classes.customText}>11. Bookings at non-participating hotels</Typography>
<Typography  className={classes.customText}>12. Bookings made prior to receipt of this coupon</Typography>
<Typography  className={classes.customText}>13. Go to http://uk.hotels.com/page/hotel-exclusions-emea/?pos=HCOM_UK&locale=en_GB for a list of non-participating hotels. Participating hotels are subject to change at any time.</Typography>
<Typography  className={classes.customText}>14. You can only use this coupon once and in full. You won't be able to use it again, even if you cancel your booking. There's a limit of one coupon per booking.</Typography>
<Typography  className={classes.customText}>15. This coupon can be combined with discounted prices on Hotels.com. It cannot however be used in conjunction with any other promotion on Hotels.com, whether offered by a third party or otherwise.</Typography>
<Typography  className={classes.customText}>16. You can't collect or redeem Hotels.com™ Rewards nights when you use this coupon.</Typography>
<Typography  className={classes.customText}>17. You can't apply this coupon to taxes, fees, or charges including, without limitation, extra guests, phone calls, cancellation fees, parking, or other charges. You must pay these charges when you make your booking, or directly at the hotel.</Typography>
<Typography  className={classes.customText}>18. You can't redeem this coupon for cash, and it can't be transferred or sold.</Typography>
<Typography  className={classes.customText}>19. It's void where prohibited by law. Improper use of the coupon by you is prohibited and could be construed as fraud. We reserve the right to change or withdraw this offer at any time and to cancel any bookings made where the coupon has been used to make any speculative, false or fraudulent bookings or any bookings in anticipation of demand.</Typography>
<Typography  className={classes.customText}>20. Usual booking terms and conditions apply (see hotelsstory.com/customer_care/terms_conditions.html) and all bookings are subject to availability.</Typography>
<Typography  className={classes.customText}>21. Hotels.com is the promoter of this offer.</Typography>
<Typography  className={classes.customText}>22. These terms and conditions are governed by and construed in accordance with the laws of the State of Washington.
          </Typography>
          
        </CardContent>
      </Collapse>


                </Box>
              </Paper>

            </Grid>



            <Grid item xs={12} sm={12} md={3}>
              <HotelsFollow />
              <UpcomingEvents />
              
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  )
}

export default MyOffer
