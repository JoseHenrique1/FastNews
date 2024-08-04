import { createContext, useState } from 'react';

type LinkProviderProps = {
  children: React.ReactNode;
};

type LinkContextType = {
  link: string,
  setLink: (link: string) => void,
};

export const links = ["Football", "Sports", "Medicine", "Famous", "Games"]

export const LinkContext = createContext({} as LinkContextType);

export function LinkProvider  ({ children }: LinkProviderProps) {
  const [link, setLink] = useState("Football");

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