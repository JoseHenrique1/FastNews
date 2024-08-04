import { createContext, useState } from 'react';
import { useContext, useEffect } from 'react';
import { LinkContext } from './link-context';

const api = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

interface news {
  title: string | null
  description: string | null,
  url: string | null,
  urlToImage: string | null
}

interface getNewsInterface {
  status: string,
  totalResults: number,
  articles: news[]
}

type NewsProviderProps = {
  children: React.ReactNode;
};

type NewsContextType = {
  news: news[],
  setNews: React.Dispatch<React.SetStateAction<news[]>>
};

export const NewsContext = createContext({} as NewsContextType);

export function NewsProvider({ children }: NewsProviderProps) {
  const { link } = useContext(LinkContext);
  const [news, setNews] = useState<news[]>([]);

  async function getNews(keyword: string) {
    const response = await fetch(`${api}/top-headlines?q=${keyword}&apiKey=${apiKey}`)
      .then(data => data.json())
      .then((data: getNewsInterface) => data)
      .catch(() => null);

    if (response && response.status === "ok") {
      console.log(response);

      setNews(response.articles);
    }
  }

  useEffect(() => {
    getNews(link);
  }, [link])



  return (
    <NewsContext.Provider
      value={{
        news,
        setNews,

      }}
    >
      {children}
    </NewsContext.Provider>
  );
}