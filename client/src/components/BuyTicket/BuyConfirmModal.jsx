import { Modal, Fade, Box, Typography, Backdrop, Button } from "@mui/material";
import authState from "../../state/auth";
import createTicket from "../../lib/createTicket";
import { useRecoilState } from "recoil";
import CompleteAlert from "./CompleteAlert";

const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 285,
  bgcolor: "background.paper",
  border: "4px solid #49663c",
  borderRadius: "20px",
  boxShadow: 24,
  p: 3,
};

const BuyConfirmModal = ({ isOpen, toggle, course, cost, setIssued }) => {
  const [auth, setAuth] = useRecoilState(authState);

  const handleClick = (c) => () => {
    //createTicket(auth.email, c);
    setIssued(true);
    console.log(`식권 ${c}가 발급되었습니다.`);
    //toggle();
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen}
        onClose={toggle}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpen}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              sx={{ fontWeight: "bold" }}
            >
              Confirm
            </Typography>
            <Typography
              id="transition-modal-description"
              sx={{
                mt: 1,
                color: "#49663c",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              {`${course}코스(${cost[course]}원) 식권을 구매하시겠습니까?`}
              <br />
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
              <Button
                variant="contained"
                sx={{
                  mr: 1,
                  fontWeight: "bolder",
                  color: "#49663c",
                  backgroundColor: "#cfe8c9",
                }}
                onClick={handleClick(course)}
              >
                구매
              </Button>
              <Button
                variant="contained"
                sx={{
                  fontWeight: "bolder",
                  color: "#49663c",
                  backgroundColor: "#cfe8c9",
                }}
                onClick={toggle}
              >
                취소
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default BuyConfirmModal;
