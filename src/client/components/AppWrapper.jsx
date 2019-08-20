import React, { useReducer } from "react";
import { reducer, initalReducerState } from "../store/state";

export const AppContext = React.createContext(initalReducerState);

export default function AppWrapper({ children }) {
  const [appState, dispatch] = useReducer(reducer, initalReducerState);

  return (
    <AppContext.Provider value={{ ...appState, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
