import React from "react";
import { Grid, TextField,Stack } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Button from '@mui/material/Button';
import { useState } from "react";
function lent() {
  const [date, setDate] = useState(null);
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);
  const handle_date = (newvalue: any) => {
    setDate(newvalue);
  };
  return (
    <div>
      <Grid
        container
        spacing={3}
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "pink",
        }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} lg={4}>
          <TextField label="ชื่อ" />
        </Grid>
        <Grid item xs={12} lg={4}>
          <TextField label="เบอร์โทร" />
        </Grid>
        <Grid item xs={12} lg={4}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            label="เลือกเวลา"
            value={date}
            onChange={handle_date}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <Grid item xs={12} lg={12}>
            <Button>จองเลย</Button>
            </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default lent;
