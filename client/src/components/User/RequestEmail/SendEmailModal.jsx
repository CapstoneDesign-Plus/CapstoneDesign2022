import { Modal, Fade, Box, Typography, Backdrop } from "@mui/material";
import { Navigate } from "react-router-dom";

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

const SendEmailModal = ({ isOpen, handleClose }) => {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
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
              className="contents"
              id="transition-modal-description"
              sx={{
                mt: 1,
                color: "#49663c",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              입력하신 이메일로 링크가 전송되었습니다.
              <br />
              비밀번호 재설정 시간은 요청 후 10분 입니다.
            </Typography>
          </Box>
        </Fade>
      </Modal>
      <div>
        <Navigate to="/" />
      </div>
    </div>
  );
};

export default SendEmailModal;
