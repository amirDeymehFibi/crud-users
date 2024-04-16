import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { IconButton, Typography } from "@mui/material";
import styles from "./styles";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export default function MyModal({
  open,
  handelClose,
  children,
  title,
  width = "697px",
}) {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handelClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={styles.modal(width)} className="light-scroll">
          <Box sx={styles.bg}>
            <Box className="center-between">
              <Typography component={"h4"} className="title center">
                {title}
              </Typography>
              <IconButton sx={styles.close} onClick={handelClose}>
                <HighlightOffIcon />
              </IconButton>
            </Box>
            {children}
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}
