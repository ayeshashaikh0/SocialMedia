import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {CardActionArea, CardContent, CardMedia, Card, Typography, CardActions,Button} from "@material-ui/core";
const useStyles = makeStyles((theme)=>({
 card:{
     marginBottom:theme.spacing(5),
     marginTop:theme.spacing(8.5),
 },
  media:{
    height:250,
    [theme.breakpoints.down("sm")]:{
     height:150,
    },
  },
}));
function Footer() {
const classes=useStyles();
  return (
   <Card className={classes.card}>
       <CardActionArea>
           <CardMedia className={classes.media}
           image="https://i.pinimg.com/originals/9f/87/7c/9f877c2062221ea223eb7c69d7d1bda5.jpg"
           title="My Post"
           />
       </CardActionArea>
       <CardContent>
        <Typography gutterBottom variant="h5">My First Post</Typography>
        <Typography  variant="body2">
         Lorem ipsum dolor, sit amet consectetur adipisicing elit.
         Dolores nam similique sequi accusamus numquam aliquid doloribus culpa accusantium? 
         Tempore quia fuga porro quam vel aliquam earum mollitia dolor, dicta cupiditate?
         Lorem ipsum dolor, sit amet consectetur adipisicing elit.
         Dolores nam similique sequi accusamus numquam aliquid doloribus culpa accusantium? 
         Tempore quia fuga porro quam vel aliquam earum mollitia dolor, dicta cupiditate?
        </Typography>
       </CardContent>
       <CardActions>
           <Button size="small" color="primary">Share</Button>
           <Button size="small" color="primary">Learn</Button>
       </CardActions>
   </Card>
  );
}
export default Footer;