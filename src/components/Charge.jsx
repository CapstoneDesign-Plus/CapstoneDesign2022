import React, { Component } from "react";
import { Box, Grid, Chip, Table, TableCell,TableRow, TableHead, TableBody, Button } from "@mui/material";

import style from "../style/charge.scss";

function createData(coin, price) {
  return { coin,price};
}

const rows = [
  createData("4,000 캐시", "4,000 원"),
  createData("8,000 캐시", "8,000 원"),
  createData("12,000 캐시", "12,000 원"),
  createData("16,000 캐시", "16,000 원"),
  createData("20,000 캐시", "20,000 원"),
 
];
 
export default function Charge(){
   
        return(
            <>
          <Box className="title"sx={{ display: "flex", alignItems: "flex-end", mt:2, ml:2 }}>
            <Grid container spacing={2}>
                <Grid className={"title"} item  sx={{ ml: 0}}>
                      <h4>재화 충전</h4> 
                </Grid>
            </Grid>
         </Box>
  
          {/*잔여재화박스*/}
            <Box className="coin_box"
              sx={{ display: "flex", alignItems: "flex-start", mt: 1, ml: 0 }}
            >
              <Grid container spacing={2}>
                <Grid className="coin_title" item sx={{mt: 2, ml:2}} xs={12} sm={12}>
                  잔여재화
                </Grid>
                <Grid className="coin_content" item sx={{mt: 1, ml:2}} xs={12} sm={2}>
                  <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                    <img className="coin" alt="coin" src="\images\coin.png" />
                    &nbsp;&nbsp;10,000
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={8}
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                 
                </Grid>
              </Grid>
            </Box>


            {/*table*/}
            <Box className="table">
        <Table sx={{ maxWidth: 440 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: "#B1D6A8" }}>
            <TableRow>
              <TableCell
                align="center"
                sx={{ color: "white", lineHeight: "0.5" }}
              >
                충전 캐시
              </TableCell>
            
              <TableCell
                align="center"
                sx={{ color: "white", lineHeight: "0.5" }}
              >
              결제금액
              </TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.coin}>
                <TableCell align="center" component="th" scope="row">
                  {row.coin}
                </TableCell>
                <TableCell align="center">  <button className="price_btn">{row.price}</button></TableCell>
              
               
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
            </>
        );
    
}
