import React from "react";
import {
  Box,
  Grid,
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
} from "@mui/material";

import style from "../../../style/charge.scss";
import authState from "../../../state/auth";
import { useRecoilState } from "recoil";
import axios from "../../../lib/axios";
import styled from "styled-components";
import useModal from "../../../hook/useModal";
import ChargeConfirm from "./ChargeConfirm";

const Btn = styled.button`
  &:hover {
    outline: none;
  }
`;

function createData(coin, price) {
  return { coin, price };
}

const rows = [
  createData("4,000 캐시", 4000),
  createData("8,000 캐시", 8000),
  createData("12,000 캐시", 12000),
  createData("16,000 캐시", 16000),
  createData("20,000 캐시", 20000),
];

async function point(email, delta) {
  const response = await axios.get(
    `v1/user/point?email=${email}&delta=${delta}`
  );
  return response;
}

async function getUser(email) {
  const response = await axios.get("v1/user/get/" + email);
  return response;
}

function Charge() {
  const [auth, setAuth] = useRecoilState(authState);
  const { isOpen, toggle } = useModal();

  const handleClick = () => {
    toggle();
  };

  const handler = (price) => () => {
    point(auth.email, price).then((value) => {
      if (value.data.ok) {
        getUser(auth.email).then((value) => {
          setAuth(value.data.result);
        });
      }
      console.log(value);
    });
  };

  return (
    <div style={{ margin: 0 }}>
      <Box
        className={"title"}
        sx={{ display: "flex", alignItems: "flex-end", mt: 3, ml: 2 }}
      >
        재화충전
      </Box>
      {/*잔여재화박스*/}
      <Box
        className="coin_box"
        sx={{
          display: "flex",
          alignItems: "flex-start",
          margin: "auto",
          mt: 3,
          ml: 1,
        }}
      >
        <Grid container spacing={2} style={{ margin: 0 }}>
          <Grid className="coin_title" item xs={12}>
            잔여재화
          </Grid>
          <Grid className="coin_content" item xs={8}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img className="coin" alt="coin" src="\images\coin.png" />
              &nbsp;&nbsp;{auth.point}
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          ></Grid>
        </Grid>
      </Box>

      {/*table*/}
      <Box className="table">
        <Table sx={{ width: "95%" }} aria-label="simple table">
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
                <TableCell align="center">
                  {" "}
                  <Btn className="price_btn" onClick={handleClick}>
                    {row.price} 원
                  </Btn>
                  <div>
                    {isOpen && (
                      <ChargeConfirm
                        isOpen={isOpen}
                        toggle={toggle}
                        handler={handler(price)}
                      />
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </div>
  );
}

export default Charge;
