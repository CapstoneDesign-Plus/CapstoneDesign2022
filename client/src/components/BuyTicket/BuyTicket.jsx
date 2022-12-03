import React, { useState } from "react";
import { Box, Grid, Button, ButtonGroup, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import style from "../../style/buyticket.scss";
import { useRecoilState } from "recoil";
import authState from "../../state/auth";
import createTicket from "../../lib/createTicket";
import Loading from "../Loading";
import useModal from "../../hook/useModal";
import BuyConfirmModal from "../MyPage/BuyList/BuyConfirmModal";

const BuyTicket = ({ dA, dB, dC, cost, cnt }) => {
  const { isOpen, toggle } = useModal();
  const [tclass, setTclass] = useState();

  //console.log(tclass);

  const handleClick = (c) => () => {
    toggle();
    setTclass(c);
    //createTicket(auth.email, c);
    //console.log(`식권 ${c}가 발급되었습니다.`);
    console.log(`식권 ${c}의 구매 모달 띄우기 성공`);
  };

  if (!dA || !dA.length || !cost || !cnt) return <Loading />;

  return (
    <div style={{ margin: 0 }}>
      <Box
        sx={{ display: "flex", alignItems: "flex-end", mt: 4, ml: 2, mr: 4 }}
      >
        <Grid container spacing={0}>
          <Grid item xs={8} sx={{ padding: "0", margin: "0" }}>
            <Button
              className="courseBtn"
              sx={{ padding: "0", color: "#49663c", fontWeight: "bolder" }}
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
                      <br />
                      {cnt.filter((v) => v.tclass === "A").length}개
                    </Button>
                  </Link>
                  <Button
                    className="details"
                    variant="contained"
                    onClick={handleClick("A")}
                  >
                    {cost.A}원
                  </Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Divider />
      <Box
        sx={{ display: "flex", alignItems: "flex-end", mt: 2, ml: 2, mr: 4 }}
      >
        <Grid container spacing={0}>
          <Grid item xs={8} sx={{ padding: "0", margin: "0" }}>
            <Button
              className="courseBtn"
              sx={{ padding: "0", color: "#49663c", fontWeight: "bolder" }}
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
                  <Link to="/UnUsed">
                    <Button className="details" variant="contained">
                      잔여식권
                      <br /> {cnt.filter((v) => v.tclass === "B").length}개
                    </Button>
                  </Link>
                  <Button
                    className="details"
                    variant="contained"
                    onClick={handleClick("B")}
                  >
                    {cost.B}원
                  </Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Divider />
      <Box
        sx={{ display: "flex", alignItems: "flex-end", mt: 2, ml: 2, mr: 4 }}
      >
        <Grid container spacing={0}>
          <Grid item xs={8} sx={{ padding: "0", margin: "0" }}>
            <Button
              className="courseBtn"
              sx={{ padding: "0", color: "#49663c", fontWeight: "bolder" }}
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
                  <Link to="/UnUsed">
                    <Button className="details" variant="contained">
                      잔여식권
                      <br /> {cnt.filter((v) => v.tclass === "C").length}개
                    </Button>
                  </Link>
                  <Button
                    className="details"
                    variant="contained"
                    onClick={handleClick("C")}
                  >
                    {cost.C}원
                  </Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <div>
        {isOpen && (
          <BuyConfirmModal
            isOpen={isOpen}
            toggle={toggle}
            course={tclass}
            cost={cost}
          />
        )}
      </div>
    </div>
  );
};

export default BuyTicket;
