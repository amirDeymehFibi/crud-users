const styles = {
  modal: (width) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    px: { xs: 2.5, sm: 5 },
    pb: 1.5,
    pt: { xs: 2.5, sm: 4 },
    boxShadow: "14px 18px 58px 0px #00000021",
    outline: "none",
    borderRadius: "12px",
    width: "97%",
    maxWidth: width,
    maxHeight: "97vh",
    overflow: "auto",
    ".title": {
      color: "#191919",
      fontSize: "16px",
      fontWeight: 600,
      svg: {
        mr: 1.5,
      },
    },
  }),
  bg: { width: "100%", height: "100%", position: "relative" },
};

export default styles;
