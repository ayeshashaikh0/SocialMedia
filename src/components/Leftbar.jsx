import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import { Container,Typography} from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import ListIcon from '@material-ui/icons/List';
import PhotoIcon from '@material-ui/icons/Photo';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import TabletMacIcon from '@material-ui/icons/TabletMac';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
const useStyles = makeStyles((theme)=>({
  container:{
    height:"100vh",
    color:"white",
    position:"sticky",
    top:"0",
    paddingTop:theme.spacing(10),
    backgroundColor:theme.palette.primary.main,
    [theme.breakpoints.up("sm")]:{
      backgroundColor:"white",
      color:"#555",
      border:"1px solid #ece7e7"
    },
  },
  item:{
    display:"flex",
    alignItems:"center",
    marginBottom:theme.spacing(3),
    [theme.breakpoints.up("sm")]:{
      marginBottom:theme.spacing(3),
      cursor:"pointer",
    },
  },
  icon:{
    marginRight:theme.spacing(1),
    [theme.breakpoints.up("sm")]:{
      fontSize:"18px",
    },
  },
  text:{
    fontWeight:500,
    [theme.breakpoints.down("sm")]:{
      display:"none",
    },
  },
}));
function Leftbar() {
const classes=useStyles();
  return (
   <Container className={classes.container}>
     <div className={classes.item}>
       <HomeIcon className={classes.icon}/>
       <Typography className={classes.text}>Home</Typography>
     </div>
     <div className={classes.item}>
       <PersonIcon className={classes.icon}/>
       <Typography className={classes.text}>Friends</Typography>
     </div>
     <div className={classes.item}>
       <ListIcon className={classes.icon}/>
       <Typography className={classes.text}>List</Typography>
     </div>
     <div className={classes.item}>
       <PhotoIcon className={classes.icon}/>
       <Typography className={classes.text}>Photo</Typography>
     </div>
     <div className={classes.item}>
       <PlayCircleOutlineIcon className={classes.icon}/>
       <Typography className={classes.text}>Videos</Typography>
     </div>
     <div className={classes.item}>
       <TabletMacIcon className={classes.icon}/>
       <Typography className={classes.text}>Apps</Typography>
     </div>
     <div className={classes.item}>
       <SettingsIcon className={classes.icon}/>
       <Typography className={classes.text}>Settings</Typography>
     </div>
     <div className={classes.item}>
       <ExitToAppIcon className={classes.icon}/>
       <Typography className={classes.text}>Logout</Typography>
     </div>
   </Container>
  );
}
export default Leftbar;