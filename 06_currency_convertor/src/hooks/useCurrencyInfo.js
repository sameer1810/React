import { useEffect, useState } from "react";

function useCurrencyInfo(currency){

    const [data, setData]= useState({})

    useEffect(()=>{
        fetch(` https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.json())//convert string typ to json
        .then((res)=>setData(res[currency]))//res[currency]->kyuki date bhi api k andr === holding val in setData
        //setData(res[currency]) updates the data state with the fetched currency data. This triggers a re-render of the component using this state, allowing it to display the updated data.
         
        console.log(data);
    },[currency])

    console.log(data);

    return data
}

export default useCurrencyInfo;//returning method
//hook
//[var , method]
//we are returning method and method returing var