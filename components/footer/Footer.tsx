import React from "react";
import { Grid, Typography } from "@mui/material";
function Footer() {
  return (
    <div>
      <Grid
        container
        sx={{ position: "relative", marginTop: "10%" }}
        justifyContent="center"
      >
        <Grid item xs={12} lg={6}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31679.98695632104!2d100.46121589775727!3d7.009473470884173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304d2844e52c0e41%3A0xb36033e77dcce56e!2sHat%20Yai%2C%20Hat%20Yai%20District%2C%20Songkhla%2090110!5e0!3m2!1sen!2sth!4v1655442232385!5m2!1sen!2sth"
            width="600"
            height="450"
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography sx={{ fontSize: "2rem", fontFamily: "Mitr",paddingRight: 5,paddingLeft: 5, }}>
            ทํานายชะตากับหมอหมึก
          </Typography>
          <Typography
            sx={{
              fontSize: "1.5rem",
              fontFamily: "Mitr",
              color: "#645C5C",
              marginTop: 5,paddingRight: 5,paddingLeft: 5,
            }}
          >
            สามารถจองคิวได้ในเว็บหรือ อีเมล: octopus_fortune@teller.com
            เเละมาที่สํานักที่ ชั้น 12 อาคาร JWC ถนนโปรเเกรมมิ่ง เเขวง เว็บ
            เขตอินเตอร์เน็ต กรุงเทพ 9999 ตามวันเวลาที่นัดไว้
          </Typography>
          <Typography
            sx={{
              fontSize: "1rem",
              fontFamily: "Mitr",
              color: "#645C5C",
              marginTop: 5,paddingRight:5,paddingLeft:5,
            }}
          >
            จํากัดที่ 10 คิว ต่อหนึ่งวัน เปิดทําการ 10.00 - 18.30 พัก 12.00
            -13.00 เปิดทุกวันอังคารถึงเสาร์ หยุดวันจันทร์เเละอาทิตย์
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
