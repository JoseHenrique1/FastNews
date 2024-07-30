import { createContext, useState } from 'react';

type LinkProviderProps = {
  children: React.ReactNode;
};

type LinkContextType = {
  link: string,
  setLink: (link: string) => void,
};

export const links = ["Brazil", "Sports", "Medicine", "Famous"]

export const LinkContext = createContext({} as LinkContextType);

export function LinkProvider  ({ children }: LinkProviderProps) {
  const [link, setLink] = useState("Brazil");

  return (
    <LinkContext.Provider
      value={{
        link,
        setLink,
      }}
    >
      {children}
    </LinkContext.Provider>
  );
}