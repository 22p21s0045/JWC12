import React from "react";
import {
  AppBar,
  Toolbar,
  Stack,
  Button,
  useMediaQuery,
  useTheme,
  Drawer,
  Box,
} from "@mui/material";
import Lottie from "lottie-react";
import Card from "../../public/lottie/card.json";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Image from "next/image";
import calendar from "../../public/svg/calendar.svg";
import info from "../../public/svg/info.svg";
import note from "../../public/svg/note.svg";
function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setopen] = useState(false);
  const handle_open = () => {
    setopen(!open);
  };
  return (
    <div>
      <AppBar sx={{ height: "12vh", backgroundColor: "#6D5E9B" }}>
        <Toolbar>
          <Lottie animationData={Card} loop={true} style={{ height: "100%" }} />
          {isMobile ? (
            <Stack
              direction="row"
              sx={{ position: "absolute", right: "10%" }}
              spacing={10}
            >
              <Button
                sx={{
                  backgroundColor: "white",
                  "&:hover": { backgroundColor: "pink" },
                }}
                onClick={handle_open}
              >
                <FiMenu size={30} />
              </Button>
            </Stack>
          ) : (
            <Stack
              direction="row"
              sx={{ position: "absolute", right: "10%" }}
              spacing={10}
            >
              <Button className="bt-nav">เกี่ยวกับหมอหมึก</Button>
              <Button className="bt-nav">บทความ</Button>
              <Button className="bt-nav">จองคิว</Button>
            </Stack>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={open}
        onClose={handle_open}
        PaperProps={{
          sx: { width: "50%",backgroundColor: "#FCF8E8" },
        }}
        
      >
        <div>
          <Stack spacing={5}>
            <Button
              sx={{ color: "black", fontFamily: "Mitr", fontSize: "1.5rem" }}
            >
              เกี่ยวกับหมอหมึก
              <Image src={info} width={40} height={40} />
            </Button>

            <Button
              sx={{ color: "black", fontFamily: "Mitr", fontSize: "1.5rem" }}
            >
              บทความ
              <Image src={note} width={40} height={40} />
            </Button>
            <Button
              sx={{ color: "black", fontFamily: "Mitr", fontSize: "1.5rem" }}
            >
              จองคิว
              <Image src={calendar} width={40} height={40} />
            </Button>
          </Stack>
        </div>
      </Drawer>
    </div>
  );
}

export default Navbar;
