import React, { useEffect, useState } from "react";
import "./css/style.css";
 const Tempapp =()=>{
 const[city,setCity ]= useState(null);
 const [search,setSearch] = useState("Mumabai");
 useEffect(()=>{

    const fetchApi = async()=>{
        const url =`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=94939cfe8134b50bd8552ddbbd54023b `
   const response = await fetch(url);
  // console.log(response) now converting data into json
  const resJson = await response.json();
  setCity(resJson.main);
    }


    fetchApi();
 },[search])

    return(
        <>
        <div className="box">
            <div className="inputData">
                <input
                type="search"
                value={search}
                className="inputFeild"
                onChange={(event) =>{setSearch(event.target.value)}}
                />
            </div>

           {
            !city ? (
                <p> NODATA FOUND</p>
            ):(
        <div>
         <div className="info">
    <h2 className="location">
    <i className="fa-solid fa-street-view"></i>{search}
    </h2>
    <h1 className="temp">
   {city.tepm}°Cel
    </h1>
     

     <h3 className="tempmin_max">Min :{city.tepm_min}°Cel | Max :{city.tepm_max} °Cel	</h3>
    
        </div>
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
            </div>
         ) }
      
       
        </div>
        </>
    )
 }
 export default Tempapp;