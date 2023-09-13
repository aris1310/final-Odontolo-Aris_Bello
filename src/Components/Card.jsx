import styles from "./Card.module.css"

const Card = ({ card }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className={styles.card}>
        {/* En cada card deberan mostrar en name - username y el id */}
        <img src="/src/Img/images/doctor.jpg" alt="" />
        <h3>{card.id}</h3>
        <h2>{card.name}</h2>
        <h3>{card.username}</h3>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
