import axios from "axios";
import { getCookie } from "./useCookie";
import { toast } from "react-toastify";
import { useSpinner } from "Context/SpinnerContext";
import { Error } from "Hooks/Toast";
import { baseApi } from "Services/config";
import { useRouter } from "next/router";

export const handelTextError = (errors) => {
  let textArray = [];

  const values = Object.values(errors);

  values.forEach((error, index) => {
    if (typeof error === "object") {
      textArray[index] = "";
      error?.forEach((textError, i) => {
        textArray[index] += textError + (i < error?.length - 1 ? "و" : "");
      });
    } else {
      textArray[index] = error;
    }
  });

  let textError = "";

  textArray.forEach((e, i) => {
    textError += i + 1 + " - " + e + " \n";
  });

  Error(textError);
};

const useRequest = () => {
  const spinner = useSpinner();
  const router = useRouter();
  const { pathname, push } = useRouter();

  const headers = {
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
      authorization: "Bearer " + getCookie("user"),
    },
  };

  const headerUploadFile = {
    headers: {
      Accept: "application/json",
      "Content-type": "multipart/form-data",
      authorization: "Bearer " + getCookie("user"),
    },
  };

  const handelErrors = (res, type = "get") => {
    if (spinner) spinner.end();

    console.log(res);

    switch (res?.status) {
      case 200:
        if (type === "delete" || type === "post")
          toast.success(res?.data?.message || "دیتا با موفقیت ذخیره شد", {
            position: "top-right",
          });
        return res;

      case 201:
        toast.success(res?.data?.message || "دیتا با موفقیت ذخیره شد", {
          position: "top-right",
        });

        return res;
      case 204:
        toast.success(res?.data?.message || "دیتا با موفقیت حذف گردید", {
          position: "top-right",
        });

        return res;
      case 318:
        if (type === "delete" || type === "post")
          toast.success(res?.data?.message, {
            position: "top-right",
          });
        return res;

      case 422:
        if (Array.isArray(res?.data?.message)) {
          handelTextError(res?.data?.message);
        } else if (typeof res?.data?.message === "string") {
          Error(res?.data?.message);
        }

        return res;
      case 400:
        if (Array.isArray(res?.data?.message)) {
          handelTextError(res?.data?.message);
        } else if (typeof res?.data?.message === "string") {
          Error(res?.data?.message);
        }

        return res;
      default:
        toast.error("!مشکلی پیش آمده است", {
          position: "top-right",
        });
        break;
    }
  };

  const Get = async (url, action = () => {}, params = {}) => {
    try {
      spinner.start();
      const res = await axios.get(baseApi + url, { ...headers, params });

      const errors = handelErrors(res);

      if (res.status === 200 || res.status === 201) {
        action(res);
      }
      return errors;
    } catch (err) {
      console.log(err);
      const errors = handelErrors(err.response);
      return errors;
    }
  };

  const Post = async (
    url,
    body,
    action = () => {},
    configReq = {
      showMessage: true,
    }
  ) => {
    spinner.start();

    try {
      const res = await axios.post(baseApi + url, body, headers);

      const response = handelErrors(
        res,
        !configReq?.showMessage ? "get" : "post"
      );

      if (response.status === 200 || response.status === 201) {
        action(response);
      }

      return response;
    } catch (err) {
      const errors = handelErrors(
        err.response,
        !configReq?.showMessage ? "get" : "post"
      );
      return errors;
    }
  };

  const Update = async (
    url,
    body,
    action = () => {},
    configReq = {
      showMessage: true,
    }
  ) => {
    spinner.start();

    try {
      const res = await axios.put(baseApi + url, body, headers);

      const response = handelErrors(
        res,
        !configReq?.showMessage ? "get" : "post"
      );

      if (response.status === 200 || response.status === 201) {
        action(response);
      }

      return response;
    } catch (err) {
      const errors = handelErrors(
        err.response,
        !configReq?.showMessage ? "get" : "post"
      );
      return errors;
    }
  };

  const Delete = async (
    url,
    action = () => {},
    configReq = {
      showMessage: true,
    }
  ) => {
    spinner.start();

    try {
      const res = await axios.delete(baseApi + url, headers);

      const response = handelErrors(
        res,
        !configReq?.showMessage ? "delete" : "post"
      );

      if (
        response.status === 200 ||
        response.status === 201 ||
        response?.status === 204
      ) {
        action(response);
      }

      return response;
    } catch (err) {
      const errors = handelErrors(
        err.response,
        !configReq?.showMessage ? "delete" : "post"
      );
      return errors;
    }
  };

  const UploadFile = async (url, data, isHandelError = true) => {
    let res;
    try {
      spinner.start();

      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((file) => {
            formData.append(key, file);
          });
        } else {
          formData.append(key, value);
        }
      });

      res = await axios.post(baseApi + url, formData, headerUploadFile);
      if (isHandelError) {
        const errors = handelErrors(res, "post");
        return errors;
      } else {
        return res;
      }
    } catch (err) {
      if (isHandelError) {
        const errors = handelErrors(err.response, "post");
        return errors;
      } else {
        return err.response;
      }
    }
  };

  const CustomUpload = async (url, data, isHandelError = true) => {
    let res;
    try {
      spinner.start();

      res = await axios.post(baseApi + url, data, headerUploadFile);
      if (isHandelError) {
        const errors = handelErrors(res, "post");
        return errors;
      } else {
        return res;
      }
    } catch (err) {
      if (isHandelError) {
        const errors = handelErrors(err.response, "post");
        return errors;
      } else {
        return err.response;
      }
    }
  };

  return {
    Get,
    Post,
    // PostGet,
    Delete,
    Update,
    UploadFile,
    CustomUpload,
  };
};

export default useRequest;
