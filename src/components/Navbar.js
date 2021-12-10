import React from "react";
import { useState } from "react";
import { makeStyles,alpha } from "@material-ui/core/styles";
import { AppBar,Typography,Toolbar,Badge,Avatar} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import InputBase from '@mui/material/InputBase';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CancelIcon from '@material-ui/icons/Cancel';
const useStyles = makeStyles((theme)=>({
 logoLg:{
    display:"none",
    [theme.breakpoints.up("sm")]:{
      display:"block",
    },
  },

  logoSm:{
    display:"block",
    [theme.breakpoints.up("sm")]:{
      display:"none",
    },
  },

  toolbar:{
      display:"flex",
      justifyContent:"space-between",
  },

  search:{
      display:"flex",
      alignItems:"center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
  borderRadius:theme.shape.borderRadius,
  width:"50%",
  [theme.breakpoints.down("sm")]:{
  display:(props)=>(props.open ? "flex":"none"),
  },
  },

  input:{
    color:"white",
    marginLeft:theme.spacing(2),
  },
  icons:{
    alignItems:"center",
    display:(props)=>(props.open ? "none":"flex"),
},

  badge:{
    marginRight:theme.spacing(2),
  },

  cancel:{
    [theme.breakpoints.up("sm")]:{
      display:"none",
    },
  },
  
 searchButton:{
    marginRight:theme.spacing(2),
    [theme.breakpoints.up("sm")]:{
      display:"none", //not cancel
    },
  },


}));
function Navbar() {
 const [open,setOpen]=useState(false);
 const classes=useStyles({open});
  return (
    <div className="App">
    <AppBar>
       <Toolbar className={classes.toolbar}>
         <Typography variant="h6" className={classes.logoLg}>Lama Dev</Typography>
         <Typography variant="h6" className={classes.logoSm}>LAMA</Typography>
         <div className={classes.search}>
         <SearchIcon/>
         <InputBase placeholder="Search....." className={classes.input}/>
         <CancelIcon className={classes.cancel} onClick={()=>setOpen(false)}/>
         </div>
         <div className={classes.icons}>
         <SearchIcon className={classes.searchButton} onClick={()=>setOpen(true)}/>
         <Badge badgeContent={4} color="secondary"className={classes.badge}>
          <MailIcon color="action" />
         </Badge>
         <Badge badgeContent={2} color="secondary"className={classes.badge}>
          <NotificationsIcon color="action" />
         </Badge>
         <Avatar alt="Remy Sharp" src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.seekpng.com%2Fpng%2Fdetail%2F115-1150622_avatar-demo2x-man-avatar-icon-png.png&imgrefurl=https%3A%2F%2Fwww.seekpng.com%2Fipng%2Fu2q8u2w7e6i1u2q8_avatar-demo2x-man-avatar-icon-png%2F&tbnid=LonAYPHRaAV2PM&vet=12ahUKEwjpua3Pi8f0AhVQw4UKHUzsBz4QMygIegUIARCuAQ..i&docid=6qX6iQ_p_tjgHM&w=820&h=480&itg=1&q=avatar%20image&hl=ur&ved=2ahUKEwjpua3Pi8f0AhVQw4UKHUzsBz4QMygIegUIARCuAQ" />
         </div>
         </Toolbar>
    </AppBar>
 
    </div>
  );
}
export default Navbar;