import { createContext, useContext, useEffect, useReducer } from "react";

const initialState = {
  user: localStorage.getItem('user')===undefined?null:JSON.parse(localStorage.getItem('user')),
  role: localStorage.getItem('role') || null,
  token: localStorage.getItem('token') || null,
};

export const authContext = createContext(initialState);

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        role: null,
        token: null,
      };
      break;

    case "LOGIN_SUCCESS":
      return {
        user: action.payload.user,
        token: action.payload.token,
        role: action.payload.role,
      };
      break;

    case "LOGOUT":
      return {
        user: null,
        role: null,
        token: null,
      };
      break;

    default:
      return state;
      break;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user))
    localStorage.setItem('token', state.token)
    localStorage.setItem('role',state.role)
  },[state])
  return (
    <authContext.Provider
      value={{
        user: state.user,
        token: state.token,
        role: state.role,
        dispatch,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
