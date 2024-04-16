import { Box, Button, IconButton, Tooltip } from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";
import AddIcon from "@mui/icons-material/Add";
import MyModal from "Components/Common/Modal";
import NewUser from "./NewUser";
import { useDispatch, useSelector } from "react-redux";
import { actionNewUser } from "../../../Redux/Users/actions";

function Actions({ onReload }) {
  const dispatch = useDispatch();
  const openNewUser = useSelector((state) => state?.users?.openNewUser);

  const handelOpen = (value) => {
    dispatch(actionNewUser(value));
  };

  return (
    <>
      <Box className="center-between" sx={{ mt: 2 }}>
        <Tooltip title="بارگذاری مجدد">
          <IconButton color="info" onClick={onReload}>
            <ReplayIcon />
          </IconButton>
        </Tooltip>
        <Button startIcon={<AddIcon />} onClick={() => handelOpen(true)}>
          کاربر جدید
        </Button>
      </Box>

      {/* modal add user  */}

      <MyModal
        open={openNewUser}
        handelClose={() => handelOpen(false)}
        title={openNewUser?.id ? "ویرایش کاربر" : `افزودن کاربر جدید`}
      >
        <NewUser onReload={onReload} open={openNewUser} />
      </MyModal>
    </>
  );
}

export default Actions;
