import styled from "styled-components";
import { Link } from "react-router-dom";
import {Box, Grid} from "@mui/material";

const MBoxStyle = styled.div`
  .box {
    border: 3px solid #b1d6a8;
    border-radius: 20px;
    width: 95%;
    height: 105px;
  }

  .coin {
    width: 30px;
    height: 30px;
  }

  .arrow {
    width: 20px;
    height: 20px;
  }

  .boxTitle {
    font-size: 18px;
    display: flex;
    justify-content: space-between;
  }

  .boxContent {
    font-size: 18px;
    display: flex;
    justify-content: space-between;
  }
`;

function MBox() {
  return (
    <MBoxStyle>
      <Box
        className="box"
        sx={{
          display: "flex",
          alignItems: "flex-start",
          margin: "auto",
          mt: 3,
          pb: 0.5,
        }}
      >
        <Grid container spacing={2} style={{ margin: 0 }}>
          <Grid className="boxTitle" item xs={12} sx={{ pr: "16px" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img className="coin" alt="coin" src="\images\coupon.png" />
              &nbsp;&nbsp;잔여 식권
            </Box>
            <Box
              sx={{ fontSize: "20px", display: "flex", alignItems: "center" }}
            >
              2 &nbsp;&nbsp;
              <Link to="/BuyList/UnUsed">
                <img className="arrow" alt="coin" src="\images\arrow.png" />
              </Link>
            </Box>
          </Grid>
          <Grid className="boxContent" item xs={12} sx={{ pr: "16px" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img className="coin" alt="coin" src="\images\coin.png" />
              &nbsp;&nbsp;잔여 재화
            </Box>
            <Box
              sx={{ fontSize: "20px", display: "flex", alignItems: "center" }}
            >
              10,000 &nbsp;&nbsp;
              <Link to="/Charge">
                <img className="arrow" alt="coin" src="\images\arrow.png" />
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </MBoxStyle>
  );
}

export default MBox;
