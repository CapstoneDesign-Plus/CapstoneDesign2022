import useModal from "../../../hook/useModal";

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

const AlertModal = () => {
  const { isOpen, toggle } = useModal;

  return <div></div>;
};

export default AlertModal;
