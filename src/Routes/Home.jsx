import { useEffect, useState } from 'react'
import Card from '../Components/Card'
import axios from 'axios'
import styles from "./Home.module.css"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [cards,setCards]=useState([])

  const url ="https://jsonplaceholder.typicode.com/users"
  useEffect(() => {
    axios(url)
    .then(res => 
      setCards(res.data)
    )

  },[])
  return (
    <main className="" >
      <h1>Home</h1>
      <div className={styles.card}>
        {cards.map(card => (
          <div className={styles.tarjeta}>

            <Card key={card.id} card={card} />
          </div>
        ))}
      </div>
    </main>
  )
}

export default Home