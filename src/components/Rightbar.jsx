import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Container, Typography,Avatar,ImageList,ImageListItem,Link,Divider} from "@material-ui/core";
import AvatarGroup from '@material-ui/lab/AvatarGroup';
const useStyles = makeStyles((theme)=>({
  container:{
    paddingTop:theme.spacing(10),
    position:"sticky",
    top:"0",
  },
  title:{
    fontSize:16,
    fontWeight:500,
    color:"#555"
  },
  link:{
  marginRight:theme.spacing(2),
  color:"#555",
  fontSize:16,
},
}));
function Rightbar() {
const classes=useStyles();
  return (
  <Container className={classes.container}>
    <Typography className={classes.title}  gutterBottom>Outline Friends</Typography>
<AvatarGroup max={7} style={{marginBottom:20}}>
  <Avatar alt="Remy Sharp" src="https://v4.mui.com/static/images/avatar/1.jpg"/>
  <Avatar alt="Travis Howard" src="https://v4.mui.com/static/images/avatar/2.jpg"/>
  <Avatar alt="Cindy Baker" src="https://v4.mui.com/static/images/avatar/3.jpg"/>
  <Avatar alt="Agnes Walker" src="https://v4.mui.com/static/images/avatar/4.jpg"/>
  <Avatar alt="Trevor Henderson" src="https://v4.mui.com/static/images/avatar/5.jpg"/>
  <Avatar alt="Trevor Henderson" src="https://v4.mui.com/static/images/avatar/6.jpg"/>
  <Avatar alt="Trevor Henderson" src="https://v4.mui.com/static/images/avatar/7.jpg"/>
  <Avatar alt="Trevor Henderson" src="https://v4.mui.com/static/images/avatar/7.jpg"/>
</AvatarGroup>
  <Typography className={classes.title}  gutterBottom>Gallary</Typography>
  <ImageList rowHeight={100} className={classes.imageList} cols={3}>
    <ImageListItem>
      <img src="https://v4.mui.com/static/images/image-list/breakfast.jpg" alt="BreakFast" />
    </ImageListItem>
    <ImageListItem>
      <img src="https://v4.mui.com/static/images/image-list/burgers.jpg" alt="Burger" />
    </ImageListItem>
    <ImageListItem>
      <img src="https://v4.mui.com/static/images/image-list/camera.jpg" alt="Camera" />
    </ImageListItem>
    <ImageListItem>
      <img src="https://v4.mui.com/static/images/image-list/morning.jpg" alt="Morning" />
    </ImageListItem>
    <ImageListItem>
      <img src="https://v4.mui.com/static/images/image-list/hats.jpg" alt="Hats" />
    </ImageListItem>
    <ImageListItem>
      <img src="https://v4.mui.com/static/images/image-list/honey.jpg" alt="Honey" />
    </ImageListItem>
   </ImageList>
   <Typography className={classes.title}  gutterBottom>Categories</Typography>
   <Link href="#" className={classes.link} variant="body2">Sports</Link>
   <Link href="#" className={classes.link} variant="body2">Food</Link>
   <Link href="#" className={classes.link} variant="body2">Music</Link>
   <Divider  flexItem style={{marginBottom:5}}/>
   <Link href="#" className={classes.link} variant="body2">Movies</Link>
   <Link href="#" className={classes.link} variant="body2">Sciences</Link>
   <Link href="#" className={classes.link} variant="body2">Life</Link>
  </Container>
  );
}
export default Rightbar;