"use client"
import Link from "next/link";
function About() {
    return ( 
        <main className="container-fluid p-5" style={{minHeight:"77vh"}}>
            <h1>Fast News</h1>
            <p className="w-50">
                O Fast News é um site tendo foco informacional, o mesmo utilliza a <Link target="__blank" href="https://newsapi.org/">News API</Link> para receber os dados da noticia, 
                alem disso ele foi feito em NEXT 13 com Bootstrap 5
            </p>
        </main> 
     );
}

export default About;