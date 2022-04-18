import { useEffect, useState } from "react"

const useData = (fileName) => {
    const [data, setData] = useState([]);
    useEffect( () => {
        fetch(fileName)
        .then(res => res.json())
        .then(element=> setData(element));
    },[])
    return data;
}

export default useData;