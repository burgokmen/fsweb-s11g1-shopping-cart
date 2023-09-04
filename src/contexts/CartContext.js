import { createContext } from "react";

export const CardContext = createContext();

const CardProvider = () => {
  return <CardContext.Provider value={{ cart }}></CardContext.Provider>;
};
