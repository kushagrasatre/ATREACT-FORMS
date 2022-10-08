import { useEffect, useState } from "react";

const useCustomDataHook = (URL) => {
    const [productData, setProductData] = useState("");
    const getData=()=>{
        fetch(URL).then((response)=>{
            return response.json()
        }).then((data)=>{
            setProductData(data);
        })
    };

    useEffect(()=>{
        getData();
    },[]);
    return [productData];
}
export default useCustomDataHook;