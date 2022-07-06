import { useReducer } from "react";
import reducer from "../../reducer";
import socket from "../../socket";
import { LoginBlock } from "components/LoginBlock/LoginBlock";
// import { Chat } from "components/Chat/Chat";

export const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    isAuth: false,
  });

  const onLogin = () => {
    dispatch({
      type: "JOINED",
      payload: true,
    });
  };

  return (
    <>
      {!state.isAuth && <LoginBlock onLogin={onLogin} />}
      {/* <Chat /> */}
    </>
  );
};
