import { Avatar, Box, Grid, Typography } from "@mui/material";
import styles from "./styles";
import useRequest from "Hooks/useRequest";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function SingleUser() {
  const { Get } = useRequest();
  const { query } = useRouter();
  const [dataUser, setDataUser] = useState(null);

  const handelGetSingle = () => {
    if (query?.id)
      Get(`/users/${query.id}`, (res) => {
        setDataUser(res?.data?.data);
      });
  };

  useEffect(handelGetSingle, [query?.id]);

  return (
    <Box className="container">
      <Grid container alignItems={"center"} spacing={3}>
        <Grid item xs={12} md={3}>
          <Avatar
            src={dataUser?.avatar}
            alt={dataUser?.first_name + " " + dataUser?.last_name}
            sx={styles.avatar}
          />
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography component="h1" sx={styles.username}>
            {dataUser?.first_name + " " + dataUser?.last_name}
          </Typography>
          <Box sx={styles.email}> {dataUser?.email}</Box>
          <Typography paragraph sx={styles.des}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد لورم ایپسوم
            متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
            گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
            لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
            هدف بهبود ابزارهای کاربردی می باشد
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SingleUser;
