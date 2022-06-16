import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar/Navbar";
import styles from "../styles/Home.module.css";
import { Grid } from "@mui/material";
import Welcome from "../components/welcome/Welcome";
import About from "../components/navbar/about/About";
const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Grid container sx={{position: 'relative'}}>
        <Grid item xs={12}>
          <Welcome />
        </Grid>
        
      </Grid>
      <About />
      
    

    </div>
  );
};

export default Home;
