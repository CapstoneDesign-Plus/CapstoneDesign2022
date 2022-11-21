import { Modal, Fade, Box, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const SendEmailModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      handleOpen
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
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Complete!
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              입력하신 이메일로 링크가 전송되었습니다.
              <br />
              비밀번호 재설정 시간은 요청 후 10분 입니다.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default SendEmailModal;
