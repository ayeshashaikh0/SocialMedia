import React from "react";
import Leftbar from "./components/Leftbar";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Footer from "./components/Footer";
import {Grid} from "@material-ui/core";
import Add from "./components/Add";
import {makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles((theme)=>({
  right:{
    [theme.breakpoints.down("sm")]:{
     display:"none",
    },
  },
}));
function App() {
const classes=useStyles();
  return (
    <div className="App">
      <Navbar/>
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar/>
        </Grid>
        <Grid item sm={7} xs={10}>
          <Footer/>
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <Rightbar/>
        </Grid>
      </Grid>
      <Add/>
    </div>
  );
}
export default App;
