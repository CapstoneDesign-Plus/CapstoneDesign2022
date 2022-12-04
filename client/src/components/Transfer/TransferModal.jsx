import { Modal, Fade, Box, Typography, Backdrop, Button } from "@mui/material";
import { Link } from "react-router-dom";

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

const TransferModal = ({ isOpen, toggle, tclass }) => {
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
              Complete!
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
              입력하신 이메일로 {tclass}식권이 발송되었습니다.
              <br />
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
              <Link to="/UnUsed">
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "10px",
                    color: "#49663c",
                    fontWeight: "bolder",
                  }}
                >
                  확인
                </Button>
              </Link>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default TransferModal;
