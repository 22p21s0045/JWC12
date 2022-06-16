import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar/Navbar";
import styles from "../styles/Home.module.css";
import { Grid } from "@mui/material";
import Welcome from "../components/welcome/Welcome";
import About from "../components/navbar/about/About";
import { ParallaxProvider } from 'react-scroll-parallax';

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <ParallaxProvider>
      <Grid container sx={{position: 'relative'}}>
        <Grid item xs={12}>
          <Welcome />
        </Grid>
        
      </Grid>
      <About />
      </ParallaxProvider>
    

    </div>
  );
};

export default Home;
