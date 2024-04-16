import { Backdrop, CircularProgress } from "@mui/material";
import React, { createContext, useContext, useState } from "react";

const Context = createContext();

const SpinnerContext = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true);
  };
  const end = () => {
    setLoading(false);
  };

  return (
    <>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 10000,
          backdropFilter: "blur(15px)",
        }}
        open={loading}
      >
        <CircularProgress color="primary" />
      </Backdrop>
      <Context.Provider value={{ start, end, loading }}>
        {children}
      </Context.Provider>
    </>
  );
};

export const useSpinner = () => useContext(Context);
export default SpinnerContext;
