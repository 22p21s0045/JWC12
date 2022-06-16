import React from "react";
import { Grid, Paper } from "@mui/material";
import Image from "next/image";

function About() {
  return (
    <div>
      <Grid container spacing={3} sx={{position: 'absolute'}}>
        <Grid item xs={6}>
          <Image
            src="/img/avatar.png"
            alt="calendar"
            width={500}
            height={500}
          />
        </Grid>
        <Grid item xs={6}>
          <Paper>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            enim. Quisquam, quidem.
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
