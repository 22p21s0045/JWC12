import React from "react";
import { Grid, Paper, Typography,Box } from "@mui/material";
import Image from "next/image";
import { Parallax } from 'react-scroll-parallax';
function About() {
  return (
    <div>
      <Grid
        container
        spacing={3}
        sx={{
          position: "relative",
          marginTop: { lg: "25%", md: "25%", xs: "30%" },
        }}
        justifyContent="flex-end"
        alignItems="center"
      >
        <Grid item xs={12} lg={6} md={6}>
          <Parallax translateY={[-20, 20]}>
          <Paper sx={{ backgroundColor: "#DBCEFF", marginLeft: { lg: "16%" } }}>
            <Typography
              sx={{
                fontSize: "2.3rem",
                fontFamily: "Mitr",
                paddingTop: 5,
                paddingLeft: 5,
                paddingRight: 5,
              }}
            >
              ประวัติหมอหมึก
            </Typography>
            <Typography
              sx={{
                fontSize: "1.5rem",
                fontFamily: "Mitr",
                marginTop: 5,
                paddingLeft: 5,
                paddingRight: 5,
              }}
            >
              หมอหมึกเป็นนักพยากรณ์ที่ชํานาญด้านการทํานายดวงด้วย
              ลูกเเก้วพยากรณ์ไพ่ทโร่ เเละการดูลายโม
            </Typography>
            <Typography
              sx={{
                fontSize: "1.5rem",
                fontFamily: "Mitr",
                marginTop: 5,
                paddingLeft: 5,
                paddingRight: 5,
                paddingBottom: 5,
              }}
            >
              ด้วยความสามารถที่หลากหลาย
              ทําให้หมอหมึกสามารถเลือกวิธีการทํานายที่เหมาะเเต่ละบุคคล
              เพื่อให้ได้ผลลัพธ์เเม่นยําสุด
            </Typography>
          </Paper>
          </Parallax>
        </Grid>
        <Grid item xs={12} lg={6} md={6} >
          <Parallax translateY={[0, 20]}>
          <Box sx={{position:"relative",left:{lg:"30%",transform: "rotate(20deg)"},}}>
          <Image
            src="/img/avatar.png"
            alt="calendar"
            width={500}
            height={500}
            style={{ borderRadius: 40 }}
            
          />
          </Box>
          </Parallax>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
