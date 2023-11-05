'use client'
import FiedSearch from "@/components/fieldsearch";
import CardNew from "@/components/cardnew";
import { useState } from "react";
import apikey from "../my_env";
function Search() {
    const [search, setSearch] = useState("");
    const [allnews, setAllnews] = useState([]);

    async function handleSearch() {
        let url = `https://newsapi.org/v2/everything?q=${search}&sortBy=publishedAt&apiKey=${apikey}`
        let requisicao = await fetch(url)
        .then((response)=> response.json())
        .catch((error)=>{console.log("Erro na requisição")});

        let news = await requisicao.articles;
        news = news.slice(0,9);
        news = await news.map( (currentNew)=> {
            return {"title":currentNew.title, "description":currentNew.description, "urlImg":currentNew.urlToImage, "urlSite":currentNew.url, "author":currentNew.author}
        });

        setAllnews(news);
        console.log(allnews)
    }
    

    
    return ( 
        <main style={{minHeight: "74.5vh"}}>
            <div className="container-sm mt-3">
                <FiedSearch search={search} setSearch={setSearch} handleSearch={handleSearch}/>
            </div>

            <div className="container-fluid mt-3 mb-3 d-flex flex-wrap justify-content-around h-100" >
                {allnews && allnews.map((item,id)=>{
                    return <CardNew key={id} title={item.title} description={item.description} urlImg={item.urlImg} urlSite={item.urlSite} author={item.author} />
                })}
            </div>   
        </main>
     );
}

export default Search;