import React,{ useState,useEffect} from 'react';
import PokemonList from './PokemonList'
import axios from 'axios'
import Paginationx from './Paginationx';

function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl,setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [loading, setLoading]=useState()
  const [NextPageUrl,setNextPageUrl] = useState()
  const [prevPageUrl,setprevPageUrl] = useState(true) // application is loading

  useEffect(()=>{
    setLoading(true) // application load ho rahi hai
    let cancel
    axios.get(currentPageUrl,{
       cancelToken: new axios.CancelToken(c => cancel =c)
    }).then(res =>{
      setLoading(false) // application load hogyi hai
      setNextPageUrl(res.data.results.next) 
      setNextPageUrl(res.data.results.previous)
      setPokemon(res.data.results.map(p =>p.name))
    })
  
 

  return () => cancel()
 
  },[currentPageUrl])


   function  gotoNextPage(){
    setCurrentPageUrl(NextPageUrl)
   }

   function  gotoPrevPage(){
    setCurrentPageUrl(prevPageUrl)
   }
   
  if (loading) return "loading...."
  
  
  return (
    <>
      <PokemonList pokemon={pokemon}/>
      <Paginationx
          gotoNextPage={gotoNextPage}
          gotoPrevPage={gotoPrevPage}
          />
      </>
     
  );
}

export default App;
