import { Modal, Fade, Box, Typography, Backdrop, Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 285,
  bgcolor: "background.paper",
  border: "4px solid #49663c",
  borderRadius: "20px",

  p: 3,
};

const ChargeConfirm = ({ isOpen, toggle, price, handler }) => {
  return (
    <div style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
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
              재화 구매
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
              {price}원을 충전하시겠습니까?
            </Typography>
            <Box>
              <Button
                variant="contained"
                onClick={() => {
                  handler();
                  toggle();
                }}
              >
                확인
              </Button>
              <Button variant="contained" onClick={toggle}>
                취소
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ChargeConfirm;
