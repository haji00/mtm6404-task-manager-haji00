import { createContext, useContext, useReducer, useState } from "react";
import { tasksReducer } from "./reducers";

const GlobalContext = createContext();


export const GlobalContextProvider = ({children}) => {
  const [tasksState, tasksDispatch] = useReducer(tasksReducer, {
    tasks: [],
    isTask: false
  });
  
  const [query, setQuery] = useState("");
  const [isComp, setIsComp] = useState("");
  return <GlobalContext.Provider value={{tasksState, tasksDispatch, query, setQuery, isComp, setIsComp}}>{children}</GlobalContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(GlobalContext);
}