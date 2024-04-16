const stylesFaqs = {
  title: {
    color: ({ palette }) => (palette?.mode === "dark" ? "#D1D1D1" : "#2C2C2C"),
    fontSize: { xs: "23px", sm: "27px" },
    fontWeight: 600,
    fontFamily: "payda-semi-bold",
    textAlign: "center",
    mb: { xs: 1.5, sm: "17px" },
    pt: { xs: 0.5, sm: 2 },
  },
  boxTitle: {
    position: "relative",
    width: "fit-content",
    mx: "auto",
  },
  tabs: {
    mb: { xs: 4.2, sm: "47px" },
    ".MuiTabs-flexContainer": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    },
    button: {
      color: ({ palette }) =>
        palette?.mode === "light" ? "#686868" : "#868686",
      fontSize: { xs: "15.84px", sm: "19.68px" },
      fontWeight: 500,
      px: { xs: 1.5, sm: 1.7 },
      borderBottom: ({ palette }) =>
        `1px solid ${palette?.mode === "light" ? "#C7C7C7" : "#353535"}`,
      minWidth: { xs: "80px", sm: "120px" },
      "&.Mui-selected": {
        color: ({ palette }) =>
          palette?.mode === "light" ? "#3F59DA" : "#D2D2D2",
        fontWeight: 700,
        fontFamily: "payda-bold",
        px: 0,
      },
    },
    ".MuiTabs-indicator": {
      height: "3px",
      backgroundColor: "#3F59DA",
    },
    ".MuiTabs-scroller": {
      pb: "1px",
    },
  },
  mainFaqs: {
    ".container-small": {
      width: "100%",
      px: 0,
      border: "none",
      pb: { xs: 2, md: 15 },
    },
    ".head-faqs": {
      display: "none",
    },
  },
  des: {
    color: ({ palette }) => (palette?.mode === "dark" ? "#D1D1D1" : "#565656"),
    fontSize: { xs: "16px", sm: "19px" },
    fontWeight: 500,
    mb: "47px",
    textAlign: "center",
    maxWidth: { xs: "335px", sm: "100%" },
  },
};

export default stylesFaqs;
