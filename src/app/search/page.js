'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.min.css"
import FiedSearch from "@/components/fieldsearch";
import CardNew from "@/components/cardnew";
import { useEffect, useState } from "react";
import apikey from "../my_env";
function Search() {
    const [search, setSearch] = useState("");
    const [allnews, setAllnews] = useState([]);
    const [newsPerPage, setNewsPerPage] = useState([]);
    const [page, setPage] = useState(0);

    async function handleSearch() {
        let url = `https://newsapi.org/v2/everything?q=${search}&sortBy=publishedAt&apiKey=${apikey}`
        let requisicao = await fetch(url)
        .then((response)=> response.json())
        .catch((error)=>{console.log("Erro na requisição")});

        let news = await requisicao.articles;
        news = await news.map( (currentNew)=> {
            return {"title":currentNew.title, "description":currentNew.description, "urlImg":currentNew.urlToImage, "urlSite":currentNew.url, "author":currentNew.author}
        });

        setAllnews(news);
    }

    useEffect(()=>{
        setNewsPerPage(allnews.slice(page,page+9 ))
    }, [page, allnews]);   

    
    return ( 
        <main style={{minHeight: "74.5vh"}}>
            <div className="container-sm mt-3 d-flex justify-content-center">
                <FiedSearch search={search} setSearch={setSearch} handleSearch={handleSearch}/>
            </div>

            <div className="container-fluid mt-3 mb-3 d-flex flex-wrap justify-content-around h-100" >
                {newsPerPage && newsPerPage.map((item,id)=>{
                    return <CardNew key={id} title={item.title} description={item.description} urlImg={item.urlImg} urlSite={item.urlSite} author={item.author} />
                })}
            </div>  

            <div className="container-fluid d-flex justify-content-center mb-3">
                <div className="d-flex w-25 justify-content-around">
                    <button 
                        className="btn btn-outline-primary" 
                        onClick={()=>{setPage(p=>p-9)}}
                        disabled={page == 0? true : false}
                        >Before</button>
                    <button 
                        className="btn btn-outline-primary" 
                        onClick={()=>{setPage(p=>p+9)}} 
                        disabled={page >= allnews.length? true : false}
                        >Next</button>
                </div>
                
            </div> 
        </main>
     );
}

export default Search;