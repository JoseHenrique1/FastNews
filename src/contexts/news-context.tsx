import { createContext, useState } from 'react';
import { useContext, useEffect } from 'react';
import { LinkContext } from './link-context';

const api = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

interface newsRaw {
  webTitle: string,
  webUrl: string,
  fields: {
    trailText: string,
    thumbnail: string
  }
}

interface getNewsInterface {
  response: {
    status: string,
    total: number,
    startIndex: number,
    pageSize: number,
    currentPage: number,
    pages: number,
    orderBy: "newest",

    results: newsRaw[]
  }
}

interface news {
  title: string | null
  description: string | null,
  url: string | null,
  urlToImage: string | null
}

type NewsProviderProps = {
  children: React.ReactNode;
};

type NewsContextType = {
  news: news[],
  search: string,
  setSearch: React.Dispatch<React.SetStateAction<string>>,
  handleSearch: (keyword: string) => void
};

export const NewsContext = createContext({} as NewsContextType);

export function NewsProvider({ children }: NewsProviderProps) {
  const { link } = useContext(LinkContext);
  const [news, setNews] = useState<news[]>([]);
  const [search, setSearch] = useState<string>("");

  async function getNews(keyword: string) {
    const url = `${api}/search?q=${keyword}&api-key=${apiKey}&show-fields=thumbnail,trailText`
    const response = await fetch(url)
      .then(data => data.json())
      .then((data: getNewsInterface) => data)
      .catch(() => null);

    

    if (response && response.response.status === "ok") {
      const results = response.response.results;

      const mappedResults: news[] = results.map(
        ({ webTitle, webUrl, fields }) => {

          const wordsToDelete = ["<strong>", "</strong>"];

          for (const word of wordsToDelete) {
            fields.trailText = fields.trailText.replace(new RegExp(word, 'g'), " ");
          }
          
          return {
            title: webTitle,
            description: fields.trailText ,
            url: webUrl,
            urlToImage: fields.thumbnail
          };
        }
      )
      setNews(mappedResults);
    }
  }

  function handleSearch(keyword: string) {
    getNews(keyword)
  }

  useEffect(() => {
    getNews(link);
  }, [link])



  return (
    <NewsContext.Provider
      value={{
        news,
        search,
        setSearch,
        handleSearch


      }}
    >
      {children}
    </NewsContext.Provider>
  );
}