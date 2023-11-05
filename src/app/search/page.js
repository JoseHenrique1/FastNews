'use client'
import FiedSearch from "@/components/fieldsearch";
import { useState } from "react";
function Search() {
    const [search, setSearch] = useState("");
    

    
    return ( 
        <main style={{minHeight: "74.5vh"}}>
            <div className="container-sm mt-3">
                <FiedSearch search={search} setSearch={setSearch}/>
            </div>

            <div className="container-fluid bg-primary mt-3 mb-3 h-100" >
                <h1>algo</h1>
                <h1>algo</h1>
                <h1>algo</h1>
                <h1>algo</h1>
                <h1>algo</h1>
                <h1>algo</h1>
                <h1>algo</h1>
                <h1>algo</h1>
                <h1>algo</h1>
                <h1>algo</h1>
                <h1>algo</h1>
                <h1>algo</h1>
            </div>
            
        </main>
     );
}

export default Search;