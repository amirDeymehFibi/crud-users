import { Avatar, Box, Typography } from "@mui/material";
import styles from "./styles";

function Header({ title }) {
  return (
    <Box className="center-between container" sx={styles.body}>
      <Box className="center">
        <Avatar
          src="/images/deymeh.jpg"
          alt="Amir Mohammad Deymeh"
          sx={styles.avatar}
        />
        <Box sx={styles.username}>امیر محمد دیمه</Box>
      </Box>
      <Typography component="h1" sx={styles.title}>
        {title}
      </Typography>
    </Box>
  );
}

export default Header;
