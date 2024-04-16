import MyTable from "Components/Common/Table";
import { dataBody, dataHead } from "./data";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Actions from "./actions";
import MyPagination from "Components/Common/Pagination";
import useRequest from "Hooks/useRequest";
import { useDispatch, useSelector } from "react-redux";
import { actionGetUsers, actionNewUser } from "../../../Redux/Users/actions";

function LitsUsers() {
  const { Get, Delete } = useRequest();
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handelGetUsers = (page = 1) => {
    Get(
      "/users",
      (res) => {
        dispatch(actionGetUsers(res?.data));
      },
      { page }
    );
  };

  const handelDelete = (id) => {
    Delete(`/users/${id}`, () => handelGetUsers());
  };

  const handelOpenEdit = (dataUser) => {
    dispatch(actionNewUser(dataUser));
  };

  useEffect(handelGetUsers, []);

  console.log("users");
  console.log(users);

  return (
    <>
      <Box className="container">
        <Actions onReload={handelGetUsers} />
        {/* //// */}
        <MyTable
          dataBody={dataBody(users?.list, handelDelete, handelOpenEdit)}
          dataHead={dataHead}
        />
        {/* /// */}
        <MyPagination
          page={users?.page}
          total_pages={users?.total_pages}
          onChange={handelGetUsers}
        />
      </Box>
    </>
  );
}

export default LitsUsers;
