const styles = {
  boxPagination: {
    my: 7,
    ".MuiButtonBase-root": {
      backgroundColor: "transparent",
      boxShadow: "0px 4px 40px 0px #0E08541A",
      color: "#767676",
      fontSize: { xs: "13.95px", sm: "18px" },
      fontWeight: 500,
      width: { xs: "25px", sm: "35px" },
      minWidth: { xs: "25px", sm: "35px" },
      height: { xs: "25px", sm: "35px" },
      borderRadius: "50%",
      lineHeight: "25px",
      opacity: 1,
    },
    ".MuiPaginationItem-previousNext": {
      backgroundColor: "transparent",
      mx: { xs: 0.5, sm: 1.5 },
    },
    ".Mui-selected": {
      backgroundColor: "#3F59DA !important",
      color: "#fff !important",
      boxShadow: "none",
    },
    ".MuiPaginationItem-text": {
      color: "#9EA3AE",
    },
    ".MuiPagination-ul": {
      gap: { xs: "5px", sm: "5px" },
    },
  },
};

export default styles;
