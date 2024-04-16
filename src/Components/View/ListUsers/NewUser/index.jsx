import { Button, Grid, TextField } from "@mui/material";
import styles from "./styles";
import { useForm } from "react-hook-form";
import useRequest from "Hooks/useRequest";
import { useDispatch } from "react-redux";
import { actionNewUser } from "../../../../Redux/Users/actions";
import { useEffect } from "react";

function NewUser({ onReload, open }) {
  const { Post, Update } = useRequest();
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const handelClose = () => {
    dispatch(actionNewUser(false));
  };

  const handelCreate = (formData) => {
    Post(`/users`, formData, () => {
      onReload();
      handelClose();
    });
  };

  const handelUpdate = (formData) => {
    Update(`/users/${open?.id}`, formData, () => {
      onReload();

      handelClose();
    });
  };

  console.log("open amir");
  console.log(open);

  useEffect(() => {
    if (open?.id) {
      reset({
        name: open?.first_name + " " + open?.last_name,
        job: open?.job,
      });
    }
  }, [open]);

  return (
    <Grid
      container
      spacing={2.5}
      sx={styles.body}
      component="form"
      onSubmit={handleSubmit(open?.id ? handelUpdate : handelCreate)}
    >
      <Grid item xs={12} sm={6}>
        <TextField
          id="name"
          label="نام و نام خانوادگی"
          variant="outlined"
          sx={styles.input}
          error={errors?.name}
          {...register("name", { required: true })}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="job"
          label="شغل"
          variant="outlined"
          sx={styles.input}
          error={errors?.job}
          {...register("job", { required: true })}
        />
      </Grid>
      <Grid item xs={12}>
        {" "}
        <Button type="submit">{open?.id ? "ویرایش" : "ساخت"}</Button>
      </Grid>
    </Grid>
  );
}

export default NewUser;
