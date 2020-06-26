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
import avatarImg from '../../assets/images/dummyuser.jpg'
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
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import AddIcon from '@material-ui/icons/Add';
import CheckIcon from '@material-ui/icons/Check';
import EditIcon from '@material-ui/icons/Edit';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import LocationCityRoundedIcon from '@material-ui/icons/LocationCityRounded';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  profileContainer: {
    overflow: 'hidden',
  },
  profile: {
    height: '200px',
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
    margin: '-85px auto 0 auto',
    width: '150px',
    height: '150px',
    border: '4px solid #fff',
    float:'right'
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


function JobProfile() {
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
            <Grid item xs={12} sm={12} md={9}>
              <Paper className={classes.profileContainer}>
                <Box className={classes.profile}>
                  <img alt="profile bg" src={profileBg} width="100%" />
                </Box>
                <Avatar alt="profile picture" src={avatarImg} className={`${classes.large} ${classes.profileAvatar}`} />
                <Box fontWeight="fontWeightBold" textAlign="left" fontSize={18} mt={3} p={2}>Jess Williams</Box>
                <Box fontWeight="fontWeighlight" textAlign="left" fontSize={12} mb={1} pl={2}  color="text.secondary">Senior Software Engineer at AstraQuark Digi Solutions Pvt. Ltd.</Box>
                <Box fontWeight="fontWeighlight" textAlign="left" fontSize={12} mb={3} pl={2}  color="text.secondary">Tiruvarur, Tamil Nadu, India</Box>
                <Box borderBottom={1} borderColor="grey.100" mb={3} className={classes.customBorder}></Box>
                <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
                  <Box alignItems="center" justifyContent="center" flexGrow={1} borderRight={1} className={classes.customBorder}>
                    <Box textAlign="center" fontSize={32} color="secondary.main" fontWeight="fontWeightBold">211</Box>
                    <Box textAlign="center" fontSize={12} mb={2} letterSpacing={1} color="text.secondary">Connections</Box>
                  </Box>
                  <Box alignItems="center" justifyContent="center" flexGrow={1} borderRight={1} className={classes.customBorder}>
                    <Box textAlign="center" fontSize={12} mb={2} letterSpacing={1} color="text.secondary"><Link>Contact info</Link></Box>
                  </Box>
                  <Box alignItems="center" justifyContent="center" textAlign="center" flexGrow={1}>
                    <Box textAlign="center" fontSize={32} color="secondary.main" fontWeight="fontWeightBold">28</Box>
                    <Box textAlign="center" fontSize={12} mb={2} letterSpacing={1} color="text.secondary">My Viewers</Box>
                  </Box>
                </Box>
                <Box borderBottom={1} borderColor="grey.100" className={classes.customBorder}></Box>
                </Paper>
                <Paper className={'m-t-10'}>
                 <Box p={5}> 
                 <Box fontWeight="fontWeightBold" textAlign="left" fontSize={14} p={5}> Job preferences</Box>
                
                 <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={10}>
                    <Box display="flex" fontWeight="fontWeighlight" textAlign="left" fontSize={14} pl={5}><Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    endIcon={<CheckIcon />}
                    >
                    Web developer
                    </Button> &nbsp; <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    endIcon={<CheckIcon />} 
                    >
                    Team Lead
                    </Button></Box> 
                    </Grid>
                    <Grid item xs={12} sm={12} md={2}><Button size="small"
                    variant="outlined"
                    color="primary"
                    className={classes.button}
                    endIcon={<AddIcon />}
                    >
                    Add job title
                    </Button>
                    </Grid>

                  <Grid item xs={12} sm={12} md={10}>
                  <Box display="flex" fontWeight="fontWeighlight" textAlign="left" fontSize={14} pl={5}><Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  endIcon={<CheckIcon />}
                  >
                  Chennai, India
                  </Button> &nbsp; <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  endIcon={<CheckIcon />} 
                  >
                  Tamilnadu, India
                  </Button></Box> 
                  </Grid>
                  <Grid item xs={12} sm={12} md={2}><Button size="small"
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                  endIcon={<AddIcon />}
                  >
                  Add location
                  </Button>
                  </Grid>

                  <Grid item xs={12} sm={12} md={10}>
                  <Box display="flex" fontWeight="fontWeighlight" textAlign="left" fontSize={14} pl={5}><Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  endIcon={<CheckIcon />}
                  >
                  Full-time
                  </Button> &nbsp; <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  endIcon={<CheckIcon />} 
                  >
                  Contract
                  </Button> &nbsp; <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  endIcon={<CheckIcon />} 
                  >
                  Part-time
                  </Button></Box> 
                  </Grid>
                  <Grid item xs={12} sm={12} md={2}><Button
                  variant="outlined" size="small"
                  color="primary"
                  className={classes.button}
                  endIcon={<AddIcon />}
                  >
                  Add Job types
                  </Button>
                  </Grid>

                 </Grid>
                  
                  
                 </Box> 
               
                </Paper>


                <Paper className={'m-t-10'}>
                <Box p={5}> 
                 <Box fontWeight="fontWeightBold" textAlign="left" fontSize={14} p={5}> About</Box>
                
                 <Grid container spacing={2}>

                    <Grid item xs={12} sm={12} md={11}>
                    <Box display="flex" fontWeight="fontWeighlight" textAlign="left" fontSize={14} pl={5}>I have 9 years experience in this web development, using php, mysql, html,css, jquery, ajax </Box> 
                    </Grid>
                    <Grid item xs={12} sm={12} md={1}>
                   <Link href="#"> <EditRoundedIcon /></Link>
                    
                    </Grid>

                  

                 </Grid>
                 </Box>
                </Paper>


  <Paper className={'m-t-10'}>
  <Box p={5}> 
  <Grid container spacing={2}>

  <Grid item xs={12} sm={12} md={11}>
  <Box fontWeight="fontWeightBold" textAlign="left" fontSize={14} p={5}> Experience
  </Box>
  </Grid>
  <Grid item xs={12} sm={12} md={1}>
  <Link href="#"> <AddRoundedIcon fontSize="large" /></Link>

  </Grid>

  <Grid item xs={12} sm={12} md={1} textAlign="center"><Box mr={2}>
  <Avatar alt="profile picture" src={profileBg} variant="rounded" />
  </Box></Grid>
  <Grid item xs={12} sm={12} md={10}>
  <Box>
  <Box textAlign="left" fontSize={15} color="primary.main" fontWeight={500}>
  <Link href="#" underline="none">
  Origininteractive Pvt Ltd
  </Link>
  </Box>
  <Box fontSize={12} letterSpacing={1} color="text.secondary">Chennai, India</Box>
  </Box></Grid>
  <Grid item xs={12} sm={12} md={1}>
  <Link href="#"> <EditRoundedIcon /></Link>
  </Grid>

  <Grid item xs={12} sm={12} md={1} textAlign="center"><Box mr={2}>
  <Avatar alt="profile picture" src={profileBg} variant="rounded" />
  </Box></Grid>
  <Grid item xs={12} sm={12} md={10}>
  <Box>
  <Box textAlign="left" fontSize={15} color="primary.main" fontWeight={500}>
  <Link href="#" underline="none">
  AstraQuark Digi Solutions Pvt. Ltd.
  </Link>
  </Box>
  <Box fontSize={12} letterSpacing={1} color="text.secondary">Chennai, India</Box>
  </Box></Grid>
  <Grid item xs={12} sm={12} md={1}>
  <Link href="#"> <EditRoundedIcon /></Link>                    
  </Grid>

  <Grid item xs={12} sm={12} md={1} textAlign="center"><Box mr={2}>
  <Avatar alt="profile picture" src={profileBg} variant="rounded" />
  </Box></Grid>
  <Grid item xs={12} sm={12} md={10}>
  <Box>
  <Box textAlign="left" fontSize={15} color="primary.main" fontWeight={500}>
  <Link href="#" underline="none">
  Rankstrikers Marketing Pvt. Ltd.
  </Link>
  </Box>
  <Box fontSize={12} letterSpacing={1} color="text.secondary">Chennai, India</Box>
  </Box></Grid>
  <Grid item xs={12} sm={12} md={1}>
  <Link href="#"> <EditRoundedIcon /></Link>                    
  </Grid>



  </Grid>
  </Box>
  </Paper>



  <Paper className={'m-t-10'}>
  <Box p={5}> 
  <Grid container spacing={2}>

  <Grid item xs={12} sm={12} md={11}>
  <Box fontWeight="fontWeightBold" textAlign="left" fontSize={14} p={5}> Education
  </Box>
  </Grid>
  <Grid item xs={12} sm={12} md={1}>
  <Link href="#"> <AddRoundedIcon fontSize="large" /></Link>

  </Grid>

  <Grid item xs={12} sm={12} md={1} textAlign="center"><Box mr={2}>
  <Avatar alt="profile picture" src={profileBg} variant="rounded" />
  </Box></Grid>
  <Grid item xs={12} sm={12} md={10}>
  <Box>
  <Box textAlign="left" fontSize={15} color="primary.main" fontWeight={500}>
  <Link href="#" underline="none">
  St. Joseph's College (Autonomous) Tiruchirappalli
  </Link>
  </Box>
  <Box fontSize={12} letterSpacing={1} color="text.secondary">
Master of Computer Applications - MCA Computer Science Grade MCA
2005 – 2008</Box>
  </Box></Grid>
  <Grid item xs={12} sm={12} md={1}>
  <Link href="#"> <EditRoundedIcon /></Link>
  </Grid>

  <Grid item xs={12} sm={12} md={1} textAlign="center"><Box mr={2}>
  <Avatar alt="profile picture" src={profileBg} variant="rounded" />
  </Box></Grid>
  <Grid item xs={12} sm={12} md={10}>
  <Box>
  <Box textAlign="left" fontSize={15} color="primary.main" fontWeight={500}>
  <Link href="#" underline="none">EGS Pillay Arts and Science Collage in Nagapattinam

  </Link>
  </Box>
  <Box fontSize={12} letterSpacing={1} color="text.secondary">Bachelor of Computer Application Computer Science 2001 – 2003</Box>
  </Box></Grid>
  <Grid item xs={12} sm={12} md={1}>
  <Link href="#"> <EditRoundedIcon /></Link>                    
  </Grid>


  </Grid>
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

export default JobProfile
