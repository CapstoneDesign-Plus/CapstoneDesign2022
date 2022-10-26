import React, { Component } from "react";
import { Box, Grid, Chip, Table, TableCell,TableRow, TableHead, TableBody, Button } from "@mui/material";
import style from "../style/buyticket.scss";

export default function BuyTicket() {
  
        return(
            <>
            <Box className="title"sx={{ display: "flex", alignItems: "flex-end", mt:2, ml:2 }}>
            <Grid container spacing={2}>
                <Grid className={"title"} item  sx={{ ml: 0}}>
                      <h4>식권 구매</h4> 
                </Grid>
            </Grid>
         </Box>

         <Box>
                  <button className="ticket_btn"> A </button>

                
                  <p></p>
                  <button className="ticket_btn"> B</button>
                  <p></p>
                  <button className="ticket_btn"> C</button>
                  <p></p>
              
                 
            </Box>
            <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          mt: 5,
          ml: 2,
          
          float: "right",
        }}
      >
        <Grid>
          
        <button className="buy_btn">선물하기 </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <button className="buy_btn">구매하기 </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       
        </Grid>
      </Box>
            </>
           
        );
    
}

