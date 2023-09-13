import style from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={style.footer}>
        <p>Powered by</p>
        <img src="/src/Img/images/DH.png" alt='DH-logo' className={style.img}/>
    </footer>
  )
}

export default Footer
