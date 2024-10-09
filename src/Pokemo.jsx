import { useState } from "react"
import { useEffect } from "react"
import PokemonCard from "./PokemonCards"

export const Pokemon=()=>{
   const [name,setName]=useState([])




   const API="https://pokeapi.co/api/v2/pokemon?limit=124"
   const Fetch = async()=>{
     try{
        const res=await fetch(API)
        const data=await res.json();
       
        const detailed=data.results.map(async(curPokemon)=>{
             const res= await fetch(curPokemon.url);
             const data=await res.json();
             return data;
        });
        const detailedRes= await Promise.all(detailed);
        console.log(detailedRes);
        setName(detailedRes);
     }catch(error){
        console.log(error);
       
     }
   };

   useEffect (()=>{
       Fetch();
   },[]);

   return(
    <div>
        <ul>
            {
                name.map((curPokemon)=>{
                    return <PokemonCard key={curPokemon.id} pokemonData={curPokemon}/>;
                })}
        </ul>
    </div>
   )
 
}