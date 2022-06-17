import React from "react";
import { Grid, TextField, Stack } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Button from "@mui/material/Button";
import { useState } from "react";
import swal from "sweetalert2";
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

          text: `วันที่จอง ${new Date(date).toLocaleDateString()} ชื่อ ${name} เบอร์โทร ${phone}`,
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "ยืนยัน",
          cancelButtonText: "ยกเลิก",
        })
        .then((result) => {
          if (result.value) {
            swal.fire(
              "จองหมอหมึกสำเร็จ",
              "ขอบคุณสําหรับการจอง",
              "success"
            );
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
      <Stack spacing={3}>
        <TextField label="ชื่อ" onChange={handle_name} />

        <TextField label="เบอร์โทร" onChange={handle_phone} />

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
