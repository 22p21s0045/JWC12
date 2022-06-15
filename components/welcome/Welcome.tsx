import React from "react";
import Lottie from "lottie-react";
import background from "../../public/lottie/space.json";
import { Stack, Typography } from "@mui/material";
import ReactTypingEffect from 'react-typing-effect';

function Welcome() {
    return (
        <div>
            <Lottie animationData={background} loop={true} className="bg-Welcome" />
            <Stack
                sx={{ position: "absolute", top: "30%", width: "100%" }}
                alignItems="center"
                spacing={5}
            >

                <Typography
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
                    <ReactTypingEffect text={["หมอหมึก"]} />

                </Typography>
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

            </Stack>
        </div>
    );
}

export default Welcome;
