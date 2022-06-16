import React from "react";
import { Grid, Typography, Box, Stack, Paper, Avatar } from "@mui/material";

import Image from "next/image";
function Review() {
  return (
    <div>
      <Grid
        container
        spacing={3}
        sx={{ marginTop: "10%" }}
        justifyContent="center"
      >
        <Grid item xs={12} lg={12} md={12}>
          <Box sx={{ textAlign: "center" }}>
            <Typography sx={{ fontFamily: "Mitr", fontSize: "3rem" }}>
              รีวิวจากลูกค้า
            </Typography>
          </Box>
        </Grid>
        <Grid
          container
          spacing={3}
          justifyContent="center"
          sx={{ marginTop: 7 }}
        >
          <Grid item xs={12} lg={3} md={4}>
            <Paper sx={{ backgroundColor: "#F6E9E1" }}>
              <Box
                sx={{
                  textAlign: "center",
                  position: "relative",
                  left: "40%",
                  paddingTop: 5,
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="/img/review/man.png"
                  sx={{ width: 100, height: 100, backgroundColor: "#F9F2ED" }}
                />
              </Box>
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  fontFamily: "Mitr",
                  textAlign: "center",
                }}
              >
                เเมททิว นักธุรกิจ
              </Typography>
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontFamily: "Mitr",
                  textAlign: "center",
                  marginTop: 4,
                  paddingBottom: 5,
                  paddingLeft: 5,
                  paddingRight: 5,
                }}
              >
                หมอหมึกช่วยผมในฤกษ์ยามในการเจรจาธุรกิจได้มากเลยตอนนี้ขายดีเทนํ้าเทท่าเลยครับ
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} lg={3} md={4}>
            <Paper sx={{ backgroundColor: "#EADEDE",marginTop:10 }}>
              <Box
                sx={{
                  textAlign: "center",
                  position: "relative",
                  left: "40%",
                  paddingTop: 5,
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="/img/review/boy.png"
                  sx={{ width: 100, height: 100 }}
                />
              </Box>
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  fontFamily: "Mitr",
                  textAlign: "center",
                }}
              >
                เเจ็ค นักเเสดง
              </Typography>
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontFamily: "Mitr",
                  textAlign: "center",
                  marginTop: 4,
                  paddingBottom: 5,
                  paddingLeft: 5,
                  paddingRight: 5,
                }}
              >
                ต้องขอบคุณหมอหมึกในการช่วยให้ความสัมพันธ์ราบรื่นด้วยนะคะทํานายอะไรไว้ก็เเม่นทุกอย่างเลยค่ะ
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} lg={3} md={4}>
            <Paper sx={{ backgroundColor: "#E0E0EC" }}>
              <Box
                sx={{
                  textAlign: "center",
                  position: "relative",
                  left: "40%",
                  paddingTop: 5,
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="/img/review/girl.png"
                  sx={{ width: 100, height: 100 }}
                />
              </Box>
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  fontFamily: "Mitr",
                  textAlign: "center",
                }}
              >
                นํ้าใส นักศึกษา
              </Typography>
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontFamily: "Mitr",
                  textAlign: "center",
                  marginTop: 4,
                  paddingBottom: 5,
                  paddingLeft: 5,
                  paddingRight: 5,
                }}
              >
                ที่หมอหมึกบอกมานะคะเกิดเกือบหมดเลยค่ะถ้าไม่ได้หมอหมึกช่วยไว้
                ชีวิตคงเเย่เลยค่ะดีนะที่ป้องกันเรื่องร้ายๆทันเวลา
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Review;
