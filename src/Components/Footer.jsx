import style from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={style.footer}>
        <img src="/src/Img/images/DH.png" alt='DH-logo' className={style.img}/>
        <p>Powered by</p>
        <a href="https://www.facebook.com/?locale=es_LA"> <img src="/src/Img/images/ico-facebook.png" alt="" className={style.redes} /></a>
        <a href=""><img src="/src/Img/images/ico-instagram.png" alt="" className={style.redes} /></a>
        <a href=""><img src="/src/Img/images/ico-tiktok.png" alt="" className={style.redes} /></a>
        <a href="" className={style.redes}><img src="/src/Img/images/ico-whatsapp.png" alt="" className={style.redes} /></a>

    </footer>
  )
}

export default Footer
