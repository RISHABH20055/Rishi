let CurrenTime = ()=>{

     let time = new Date();
    return <p>THIS IS THE CURRENT TIME:{time.toLocaleDateString()}  -{time.toLocaleTimeString()} </p>;
   }
   export default CurrenTime;