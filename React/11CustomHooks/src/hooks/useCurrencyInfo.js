import { useEffect,useState } from "react";

function useCurrencyInfo(currency)
{
    console.log("Currency=",currency);
    const [data,setData] =useState({})
    useEffect(()=>{
        console.log("Hree");
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>{
            console.log("res=",res);
            return res.json()
        })
        .then((res)=>{
            
           return setData(res[currency])
        });
    },[currency]);
    return data;
}

export default useCurrencyInfo;