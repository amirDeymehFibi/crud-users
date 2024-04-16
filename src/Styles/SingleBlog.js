const stylesSingleBlog = {
  title: {
    color: ({ palette }) => (palette?.mode === "light" ? "#2D2D2D" : "#F8F8F8"),
    fontSize: { xs: "20px", sm: "22px", lg: "29px" },
    fontWeight: 600,
    fontFamily: "payda-semi-bold",
    mt: { xs: 0, md: 5 },
    textAlign: "justify",
  },
  image: {
    mb: { xs: 1, md: "27px" },
    mt: "27px",
    video: {
      width: "100%",
      height: "auto",
      maxHeight: "606px",
    },
  },
  dataSection: {
    backgroundColor: "grey.themeColor",
    height: { xs: "63px", sm: "70px" },
    width: "100%",
    borderRadius: "9px",
    px: 2.5,
    overflow: "auto",
    mt: { xs: 2.5, md: 0 },
    boxShadow: ({ palette }) =>
      palette?.mode === "light" &&
      "0px 8.439661979675293px 37.50960922241211px 0px #00000012",
    span: {
      color: ({ palette }) => (palette?.mode === "light" ? "#212121" : "#fff"),
      fontSize: "16px",
      fontWeight: 500,
      mr: "20px",
      fontFamily: "payda-light",
      display: "flex",
      alignItems: "center",

      svg: {
        mr: "7px",
      },
    },
    ".btn-share": {
      color: "#FDFDFD",
      fontSize: "13.6px",
      fontWeight: 600,
      fontFamily: "payda-semi-bold",
      letterSpacing: "-0.09px",
      backgroundColor: "#0065FF",
      width: "139px",
      height: "43px",
      px: 0,
      gap: "3px",
      display: { xs: "none", sm: "flex" },
      svg: {
        mr: "5px",
      },
      span: {
        mr: "0px",
      },
    },
  },
  mainData: {
    "& *": {
      fontSize: "15px !important",
      fontWeight: "500 !important",
      color: ({ palette }) =>
        palette?.mode === "dark" ? "#D8D8D8 !important" : "#666 !important",
      lineHeight: "2em !important",
      fontFamily: ({ palette }) =>
        palette?.mode === "light"
          ? "payda-regular !important"
          : "payda-light !important",
      textAlign: "justify !important",
      wordSpacing: "2px !important",
    },
    "a *, a": {
      color: ({ palette }) => `${palette?.primary.main} !important`,
      fontWeight: "700 !important",
      fontFamily: "payda-bold !important",
    },
    "img, input[type=image]": {
      borderRadius: { xs: "12px !important", sm: "20px !important" },
      mb: 2,
      mt: 1,
      mx: "auto",
      maxWidth: "97% !important",
      height: "auto !important",
    },
    "h2, h2 *, h3, h3 *, h4, h4 *,h5, h5 *,h6, h6 *,h1 , h1 *": {
      fontSize: "22px !important",
      color: ({ palette }) => palette?.gray?.titleColor + " !important",
      fontWeight: "700 !important",
      fontFamily: "payda-bold !important",
      mt: 3,
      mb: 1,
    },
    ".link-area": {
      backgroundColor: "grey.themeColor",
      borderRadius: "10px",
      py: 3,
      my: 2,
      boxShadow: ({ palette }) =>
        palette?.mode === "dark"
          ? "none"
          : "0px 8.439661979675293px 37.50960922241211px 0px #00000012",
    },
    table: {
      width: "100% !important",
      mt: 2,
      mb: 3,
      boxShadow: ({ palette }) =>
        palette?.mode === "light" &&
        "0px 8.439661979675293px 37.50960922241211px 0px #00000012",

      "tr td": {
        backgroundColor: "transparent !important",
        borderColor: ({ palette }) => `${palette?.grey.themeColor} !important`,
        py: 1.2,
        px: 2,
      },
      "tr:nth-child(odd) td": {
        backgroundColor: ({ palette }) =>
          `${palette?.mode === "light" ? "#f5f5f5" : "#14181f5c"} !important`,
      },
      "tr:nth-child(1) td": {
        backgroundColor: ({ palette }) =>
          `${palette?.grey.themeColor} !important`,
        borderColor: ({ palette }) => `${palette?.grey.themeColor} !important`,
        py: 1.2,
        px: 2,
        "& *": {
          textAlign: "center !important",
          width: "100% !important",
        },
      },
    },
    "ul, ol": {
      pl: { xs: 1, sm: 4.5 },
      mt: 0.7,
      mb: 3,
      li: {
        fontSize: "13.93px",
        fontWeight: 500,
        color: ({ palette }) =>
          palette?.mode === "dark" ? "#fdfdfd" : "#2C2C2C",
        lineHeight: "1.8em",
        fontFamily: ({ palette }) =>
          palette?.mode === "light" ? "payda" : "payda-regular",
        textAlign: "justify",
        wordSpacing: "2px",
      },
    },
    "p:has(img)": {
      textAlign: "center !important",
    },
  },
};

export default stylesSingleBlog;
