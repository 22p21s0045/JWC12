import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar/Navbar";
import styles from "../styles/Home.module.css";
import { Grid } from "@mui/material";
import Welcome from "../components/welcome/Welcome";
const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item xs={12}>
          <Welcome />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
