import React, { useEffect, useState } from "react";
import { Box, Grid, Button, ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";
import style from "../../style/buyticket.scss";

const BuyTicket = ({ dA, dB, dC }) => {
  return (
    <div style={{ margin: 0 }}>
      <Box
        sx={{ display: "flex", alignItems: "flex-end", mt: 4, ml: 2, mr: 4 }}
      >
        <Grid container spacing={0}>
          <Grid item xs={8} sx={{ padding: "0", margin: "0" }}>
            <Button
              className="courseBtn"
              variant="contained"
              sx={{ padding: "0" }}
            >
              A
              <br />
              {dA.map((d, index) => (
                <React.Fragment key={index}>
                  {d.replace("&amp;", "&")}
                  <br />
                </React.Fragment>
              ))}
              <br />
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <ButtonGroup orientation="vertical">
                  <Link to="/UnUsed">
                    <Button className="details" variant="contained">
                      잔여식권
                      <br /> 1개
                    </Button>
                  </Link>
                  <Button className="details" variant="contained">
                    4,000원
                  </Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{ display: "flex", alignItems: "flex-end", mt: 2, ml: 2, mr: 4 }}
      >
        <Grid container spacing={0}>
          <Grid item xs={8} sx={{ padding: "0", margin: "0" }}>
            <Button
              className="courseBtn"
              variant="contained"
              sx={{ padding: "0" }}
            >
              B
              <br />
              {dB.map((d, index) => (
                <React.Fragment key={index}>
                  {d.replace("&amp;", "&")}
                  <br />
                </React.Fragment>
              ))}
              <br />
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <ButtonGroup orientation="vertical">
                  <Link to="/BuyList/UnUsed">
                    <Button className="details" variant="contained">
                      잔여식권
                      <br /> 0개
                    </Button>
                  </Link>
                  <Button className="details" variant="contained">
                    4,000원
                  </Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{ display: "flex", alignItems: "flex-end", mt: 2, ml: 2, mr: 4 }}
      >
        <Grid container spacing={0}>
          <Grid item xs={8} sx={{ padding: "0", margin: "0" }}>
            <Button
              className="courseBtn"
              variant="contained"
              sx={{ padding: "0" }}
            >
              C
              <br />
              {dC.map((d, index) => (
                <React.Fragment key={index}>
                  {d.replace("&amp;", "&")}
                  <br />
                </React.Fragment>
              ))}
              <br />
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <ButtonGroup orientation="vertical">
                  <Link to="/BuyList/UnUsed">
                    <Button className="details" variant="contained">
                      잔여식권
                      <br /> 0개
                    </Button>
                  </Link>
                  <Button className="details" variant="contained">
                    3,500원
                  </Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          mt: 5,
          ml: 2,
          mb: 10,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6} sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              sx={{ width: "65%", borderRadius: "20px" }}
            >
              선물하기
            </Button>
          </Grid>
          <Grid item xs={6} sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              sx={{ width: "65%", borderRadius: "20px" }}
            >
              구매하기
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default BuyTicket;
