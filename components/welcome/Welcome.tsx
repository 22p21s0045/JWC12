import React from "react";
import Lottie from "lottie-react";
import background from "../../public/lottie/space.json";
import { Stack, Typography, Button, Box } from "@mui/material";
import { motion } from "framer-motion";
import ReactTypingEffect from "react-typing-effect";

function Welcome() {
  return (
    <div>
      <Lottie animationData={background} loop={true} className="bg-Welcome" />

      <Stack
        sx={{ position: "absolute", top: {
          xs: "27%",
          md: "22%",
          lg: "25%",
          xl: "25%",
        }
        
        , width: "100%" }}
        alignItems="center"
        spacing={10}
      >
        <Box
          sx={{
            fontSize: {
              lg: "5rem",
              md: "3rem",
              sm: "3rem",
              xs: "3rem",
            },
            color: "#FF7272",
            fontFamily: "Mitr",
          }}
        >
          <ReactTypingEffect text={["หมอหมึก"]} typingDelay={1} />
        </Box>

        <Typography
          sx={{
            fontSize: {
              lg: "2.5rem",
              md: "1.5rem",
              sm: "1.5rem",
              xs: "1.5rem",
            },
            color: "#CCCCCC",
            fontFamily: "Mitr",
          }}
        >
          “ผู้มีประสบการณ์พยากรณ์กว่า 10 ปี พร้อมคําพยากรณ์ที่เเม่นยํา”
        </Typography>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Button
            sx={{
              fontSize: "2rem",
              background:
                "linear-gradient(0deg, rgba(5, 15, 255, 0.2), rgba(5, 15, 255, 0.2)), #D9D9D9",
              border: "10px solid #FFFFFF",
              width: "15rem",
              fontFamily: "Mitr",
            }}
          >
            จองคิว
          </Button>
        </motion.div>
      </Stack>
    </div>
  );
}

export default Welcome;
