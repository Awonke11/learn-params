import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const Blog = () => {
    const [data, setData] = useState([])
    const {id} = useParams();
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/" + id)
          .then(res => res.json())
          .then(res => {
            setData((prev) => [...prev, res])
        })
          .catch(err => console.error(err.message))
      }, [id])
    return (
        <div>
            {data && data.map(d => {
                return (
                    <div key={d.id}>
                        <h1>{d.title}</h1>
                        <p>{d.body}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Blog