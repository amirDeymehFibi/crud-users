import SpinnerContext from "./SpinnerContext";

function Context({ children }) {
  return (
    <SpinnerContext>
      <>{children}</>
    </SpinnerContext>
  );
}

export default Context;
