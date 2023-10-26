'use client';
import CardNew from "@/components/cardnew";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {


  async function load () {
    let apikey = "2a6927b988284b7b8f6466c6bc7f3176";
    let search = "tesla"
    let date = "2023-09-21"
    let url = `https://newsapi.org/v2/everything?q=${search}&sortBy=publishedAt&apiKey=${apikey}`
    fetch(url).then((response)=>response.json()).then((json)=>console.log(json))
  }
  load()
  return (
    <main className='row container-fluid justify-content-around' style={{minHeight: "80vh"}}>
      <h1 className="mt-2">Brasil</h1>
      <CardNew title="Flamengo rico?" description="O C.R.F divulgou sua receita anual chegando a UM BILHÃO! Isso mesmo torcedor, veja a seguir os principais." urlImg="images.jpeg" urlSite="https://react-bootstrap.github.io/" author="Renata Fan" />
      <CardNew title="Flamengo rico?" description="O C.R.F divulgou sua receita anual chegando a UM BILHÃO! Isso mesmo torcedor, veja a seguir os principais." urlImg="images.jpeg" urlSite="https://react-bootstrap.github.io/" author="Renata Fan" />
      <CardNew title="Flamengo rico?" description="O C.R.F divulgou sua receita anual chegando a UM BILHÃO! Isso mesmo torcedor, veja a seguir os principais." urlImg="images.jpeg" urlSite="https://react-bootstrap.github.io/" author="Renata Fan" />
      <CardNew title="Flamengo rico?" description="O C.R.F divulgou sua receita anual chegando a UM BILHÃO! Isso mesmo torcedor, veja a seguir os principais." urlImg="images.jpeg" urlSite="https://react-bootstrap.github.io/" author="Renata Fan" />
      <CardNew title="Flamengo rico?" description="O C.R.F divulgou sua receita anual chegando a UM BILHÃO! Isso mesmo torcedor, veja a seguir os principais." urlImg="images.jpeg" urlSite="https://react-bootstrap.github.io/" author="Renata Fan" />
      <CardNew title="Flamengo rico?" description="O C.R.F divulgou sua receita anual chegando a UM BILHÃO! Isso mesmo torcedor, veja a seguir os principais." urlImg="images.jpeg" urlSite="https://react-bootstrap.github.io/" author="Renata Fan" />

      <h1 className="mt-2">Futebol</h1>
      <CardNew title="Flamengo rico?" description="O C.R.F divulgou sua receita anual chegando a UM BILHÃO! Isso mesmo torcedor, veja a seguir os principais." urlImg="images.jpeg" urlSite="https://react-bootstrap.github.io/" author="Renata Fan" />
      <CardNew title="Flamengo rico?" description="O C.R.F divulgou sua receita anual chegando a UM BILHÃO! Isso mesmo torcedor, veja a seguir os principais." urlImg="images.jpeg" urlSite="https://react-bootstrap.github.io/" author="Renata Fan" />
      <CardNew title="Flamengo rico?" description="O C.R.F divulgou sua receita anual chegando a UM BILHÃO! Isso mesmo torcedor, veja a seguir os principais." urlImg="images.jpeg" urlSite="https://react-bootstrap.github.io/" author="Renata Fan" />
      <CardNew title="Flamengo rico?" description="O C.R.F divulgou sua receita anual chegando a UM BILHÃO! Isso mesmo torcedor, veja a seguir os principais." urlImg="images.jpeg" urlSite="https://react-bootstrap.github.io/" author="Renata Fan" />
      <CardNew title="Flamengo rico?" description="O C.R.F divulgou sua receita anual chegando a UM BILHÃO! Isso mesmo torcedor, veja a seguir os principais." urlImg="images.jpeg" urlSite="https://react-bootstrap.github.io/" author="Renata Fan" />
      <CardNew title="Flamengo rico?" description="O C.R.F divulgou sua receita anual chegando a UM BILHÃO! Isso mesmo torcedor, veja a seguir os principais." urlImg="images.jpeg" urlSite="https://react-bootstrap.github.io/" author="Renata Fan" />
     
      <h1 className="mt-2">Europa</h1>
      <CardNew title="Flamengo rico?" description="O C.R.F divulgou sua receita anual chegando a UM BILHÃO! Isso mesmo torcedor, veja a seguir os principais." urlImg="images.jpeg" urlSite="https://react-bootstrap.github.io/" author="Renata Fan" />
      <CardNew title="Flamengo rico?" description="O C.R.F divulgou sua receita anual chegando a UM BILHÃO! Isso mesmo torcedor, veja a seguir os principais." urlImg="images.jpeg" urlSite="https://react-bootstrap.github.io/" author="Renata Fan" />
      <CardNew title="Flamengo rico?" description="O C.R.F divulgou sua receita anual chegando a UM BILHÃO! Isso mesmo torcedor, veja a seguir os principais." urlImg="images.jpeg" urlSite="https://react-bootstrap.github.io/" author="Renata Fan" />
      <CardNew title="Flamengo rico?" description="O C.R.F divulgou sua receita anual chegando a UM BILHÃO! Isso mesmo torcedor, veja a seguir os principais." urlImg="images.jpeg" urlSite="https://react-bootstrap.github.io/" author="Renata Fan" />
      <CardNew title="Flamengo rico?" description="O C.R.F divulgou sua receita anual chegando a UM BILHÃO! Isso mesmo torcedor, veja a seguir os principais." urlImg="images.jpeg" urlSite="https://react-bootstrap.github.io/" author="Renata Fan" />
      <CardNew title="Flamengo rico?" description="O C.R.F divulgou sua receita anual chegando a UM BILHÃO! Isso mesmo torcedor, veja a seguir os principais." urlImg="images.jpeg" urlSite="https://react-bootstrap.github.io/" author="Renata Fan" />
     
     </main>
  )
}
