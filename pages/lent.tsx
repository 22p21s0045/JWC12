import React from "react";
import { Grid, TextField, Stack, Box } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Button from "@mui/material/Button";
import { useState } from "react";
import swal from "sweetalert2";
import Lottie from "lottie-react";
import space from "../public/lottie/bgspace.json";
import lentbg from "../public/lottie/lentbg.json";
function lent() {
  const [date, setDate] = useState(null);
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);
  const handle_date = (newvalue: any) => {
    setDate(newvalue);
  };
  const handle_name = (event: any) => {
    setName(event.target.value);
  };
  const handle_phone = (event: any) => {
    setPhone(event.target.value);
  };
  const handle_submit = () => {
    if (date && name && phone) {
      swal
        .fire({
          title: "ยืนยันการจอง",

          text: `วันที่จอง ${new Date(
            date
          ).toLocaleDateString()} ชื่อ ${name} เบอร์โทร ${phone}`,
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "ยืนยัน",
          cancelButtonText: "ยกเลิก",
        })
        .then((result) => {
          if (result.value) {
            swal.fire("จองหมอหมึกสำเร็จ", "ขอบคุณสําหรับการจอง", "success");
          }
        });
    } else {
      swal.fire({
        title: "กรุณากรอกข้อมูลให้ครบถ้วน",
        text: "กรุณากรอกข้อมูลให้ครบถ้วน",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "ยืนยัน",
        cancelButtonText: "ยกเลิก",
      });
    }
  };

  return (
    <div>
      <Box sx={{ position: "absolute",width: "100%",height: "100vh"}}>
        <Lottie animationData={lentbg} loop={true} style={{ height: "100%" }} />

        </Box>

      <Stack
        spacing={3}
        sx={{
          position: "absolute",
          width: "50%",
          top: "30%",
          left: "30%",
          backgroundColor: "#F6E7D8",
          borderRadius: "10px",
          border: "5px solid #000",
        }}
      >
        <TextField
          label="ชื่อ"
          onChange={handle_name}
          sx={{
            width: "50%",
            marginTop: 10,
            left: "25%",
            position: "relative",
          }}
        />

        <TextField
          label="เบอร์โทร"
          onChange={handle_phone}
          sx={{
            width: "50%",
            marginTop: 10,
            left: "25%",
            position: "relative",
          }}
        />

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            label="เลือกเวลา"
            value={date}
            onChange={handle_date}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>

        <Button onClick={handle_submit}>จองเลย</Button>
      </Stack>
    </div>
  );
}

export default lent;
