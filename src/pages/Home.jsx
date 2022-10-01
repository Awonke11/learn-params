import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => console.error(err.message))
  })

  return (
    <div className="home">
      {data.map(d => {
          return (
            <Link to={`/blog/${d.id}`} className="home-link">
              <div key={d.id} className="home-container">
                <h1>{d.title}</h1>
              </div>
            </Link>
          )
        })}
    </div>
  )
}

export default Home
