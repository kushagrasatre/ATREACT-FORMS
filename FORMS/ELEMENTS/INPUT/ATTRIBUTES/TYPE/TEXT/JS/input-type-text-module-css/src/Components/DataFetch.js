// USEEFFECT FOR SIDE EFFECT AND USESTATE HOOKS FOR STATE MANAGEMENT
import React, { useEffect, useState } from "react";
//CUSTOM HOOKS
const useDataFetch = ({ URL }) => {
    // console.log("DATAFETCH COMPONENT");
    //HOOKS FOR STATE MANAGEMENT AND IT IS BEING USE FOR GET AND SET DATA
    const [getData, setData] = useState("")
    // METHOD FOR RETRIVING DATA FROM API WITH THE HELP OF FETCH METHOD
    const getDataMethod = () => {
        //FETCH METHOD RETURNS TWO PROMISE
        fetch(URL).then((response) => {
            //CONVERTING RESPONSE IN JSON FORMATE
            return response.json()
        }).then((Data) => {
            //FINAL PROMISE IS RETURNING READY TO USE DATA AND WE ARE UPDATING STAGE WITH THE HELP OF USE HOOKS METHOD
            setData(Data)
        });

    }
    //EVERY TIME THIS EFFECT WILL CALL ONLY ONES BECAUSE WE HAVE GIVEN THE DEPENDENCY BLANK ARRAY []
    useEffect(() => {
        //CALLING GETDATAMETHOD
        getDataMethod();
    }, [])
//RETURN GETDATA STATE TO CUSTOM HOOKS
    return getData;
}
//DEFAUL EXPORT THIS HOOKS
export default useDataFetch;