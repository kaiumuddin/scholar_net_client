import { Box, Grid } from "@material-ui/core";
import React from "react";
import LeftContent from "../LeftContent/LeftContent";
import RightContent from "../RightContent/RightContent";
import "./Home.css";

const Home = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <LeftContent></LeftContent>
        </Grid>
        <Grid item xs={4}>
          <RightContent></RightContent>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
