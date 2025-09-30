import React, { useEffect, useState } from 'react'

const Fetch = () => {
    const [data,setData] = useState([]);

    useEffect(()=> {
        const fetchData = async() =>{
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const json = await res.json();
            setData(json);
        }catch(err) {
            console.log(err.message);
        }}
        fetchData();
    },[])

  return (
    <div>
        <h1>Fetch Data</h1>
        <h3>Data : {data.map((i,n) => {
            return (<p key={n}>{i.title}</p>)
        })}</h3>
    </div>
  )
}

export default Fetch