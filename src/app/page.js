'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.min.css"
import CardNew from "@/components/cardnew/index";
import { useState, useEffect } from "react";

import apikey from "./my_env";


export default function Home() {
  const [dataone, setDataOne] = useState([]);
  const [datatwo, setDataTwo] = useState([]);
  const [datathree, setDataThree] = useState([]); 
  
  async function load (search) {
      let url = `https://newsapi.org/v2/everything?q=${search}&sortBy=publishedAt&apiKey=${apikey}`
      let requisicao = await fetch(url)
      .then((response)=> response.json())
      .catch((error)=>{ return {msg:'error'}});

      if (!requisicao.msg) {
        let news = await requisicao.articles;
        news = news.slice(0,9);
        news = await news.map( (currentNew)=> {
            return {"title":currentNew.title, "description":currentNew.description, "urlImg":currentNew.urlToImage, "urlSite":currentNew.url, "author":currentNew.author}
        });
        
        if (search == "Brasil") {
          setDataOne(news); 
        }
        else if (search == "Futebol") {
          setDataTwo(news)
        }
        else {
          setDataThree(news)
        }
      }
      else {
        console.log('kkkk')
      }
      
  }

  
  useEffect(()=>{
    load("Brasil");
    load("Futebol");
    load("Europa");
  }, [])
  
  
  
  return (
    <main className='row container-fluid justify-content-around' style={{minHeight: "80vh"}}>
      <h1 className="mt-3">Brasil </h1>
      {dataone && dataone.map((item,id)=>{
        return <CardNew key={id} title={item.title} description={item.description} urlImg={item.urlImg} urlSite={item.urlSite} author={item.author} />
      })}
      
      <h1 className="mt-3">Futebol</h1>
      {datatwo[0] && datatwo.map((item,id)=>{
        return <CardNew key={id} title={item.title} description={item.description} urlImg={item.urlImg} urlSite={item.urlSite} author={item.author} />
      })}
      <h1 className="mt-3">Europa</h1>
      {datathree[0] && datathree.map((item,id)=>{
        return <CardNew key={id} title={item.title} description={item.description} urlImg={item.urlImg} urlSite={item.urlSite} author={item.author} />
      })}
     </main>
  )
}
