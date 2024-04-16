import { Box, Pagination } from "@mui/material";
import React from "react";
import styles from "./styles";

function MyPagination({ total_pages, page, onChange = null }) {
  return (
    <Box className="full-center" sx={styles.boxPagination}>
      <Pagination
        count={total_pages}
        siblingCount={0}
        page={page}
        onChange={(e, newPage) => {
          if (onChange) onChange(newPage);
        }}
      />
    </Box>
  );
}

export default MyPagination;
