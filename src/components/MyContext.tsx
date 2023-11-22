import { createContext } from 'react';

type MyContextType = {
  state: string;
  setState:React.Dispatch<React.SetStateAction<string>>;
};

export const MyContext = createContext<MyContextType | undefined>(undefined);
