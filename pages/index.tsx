import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Music Centre</title>
        <meta name="description" content="La mejor Academia de proframación en Colombia" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logos/mc-short-black.png" />
      </Head>
      <main className={styles.main}>
        <nav className={styles.navbar}>
          <Image src="/logos/mc-black.png" alt="Logo de Music Centre"/>
        </nav>
        <header className={styles.hero}>
          <h2>Transforma tu amor por la música en una habilidad impresionante</h2>
        </header>
        <section className={styles.about}>
          <div className={styles.about_description}>
            <h3>Descubre tu pasión musical</h3>
            <p>Nuestra academia de música es el lugar perfecto para aquellos que buscan desarrollar su pasión por la música. </p>
            <p>Ofrecemos una amplia variedad de clases y programas para todas las edades y niveles de habilidad, desde principiantes hasta avanzados. Contamos con un equipo de profesores altamente calificados y experimentados que están dedicados a ayudar a nuestros estudiantes a alcanzar su máximo potencial. Además, brindamos un ambiente de aprendizaje positivo y acogedor en el que los estudiantes pueden crecer musicalmente y desarrollar su confianza en sí mismos.</p>
            <p>Si estás buscando una experiencia educativa de música de alta calidad, ¡Ven a visitarnos hoy!</p>
            <button className={styles.button}>Agenda una clase de prueba</button>
          </div>
          <div className={styles.about_image}>
            <Image src="/images/clases.png" alt="maestra esnseñando las notas musicales a 3 niños en un pizarrón" />
          </div>
        </section>
        <section className={styles.programs}>
          <h3>Conoce nuestros programas</h3>
          <p className={styles.subtitle}>Ofrecemos clases para todos los niveles de habilidad, desde principiantes hasta avanzados, y nuestro equipo de profesores altamente capacitados y dedicados ayudarán a cada estudiante a alcanzar su máximo potencial.</p>
          <div className={styles.programs_list}>
            <article className={styles.programs_card}>
              <Image src="/images/canto.jpeg" alt="artista cantando enfaticamente"/>
              <div className={styles.programs_card_description}>
                <h4>Canto</h4>
                <p>Nuestras clases de canto son el lugar perfecto para aquellos que desean mejorar su técnica vocal y aumentar su confianza en el escenario.</p>
                <p>Ofrecemos clases para todos los niveles, desde principiantes hasta profesionales, y abarcamos una amplia variedad de géneros y estilos.</p>
                <a href="https://wa.me/+573114200732?text=Quiero más información sobre sus clases de canto." target="_blank" rel="noreferrer"><button>Más información</button></a>
              </div>
            </article>
            <article className={styles.programs_card}>
              <Image src="/images/piano.jpeg" alt="Pianista tocando piano"/>
              <div className={styles.programs_card_description}>
                <h4>Piano</h4>
                <p>Nuestras clases de piano son ideales para aquellos que desean aprender a tocar este instrumento maravilloso.</p>
                <p>Aprenderás técnicas de juego, teoría musical, y podrás tocar tus canciones favoritas.</p>
                <a href="https://wa.me/+573114200732?text=Quiero más información sobre sus clases de piano." target="_blank" rel="noreferrer"><button>Más información</button></a>
              </div>
            </article>
            <article className={styles.programs_card}>
              <Image src="/images/guitarra.jpeg" alt="Guitarrista tocando la guitarra"/>
              <div className={styles.programs_card_description}>
                <h4>Guitarra</h4>
                <p>Nuestras clases de guitarra son el lugar perfecto para aquellos que desean aprender a tocar este instrumento versátil y emocionante.</p>
                <p>Aprenderás técnicas de juego, acordes, solos, y podrás tocar tus canciones favoritas.</p>
                <a href="https://wa.me/+573114200732?text=Quiero más información sobre sus clases de guitarra." target="_blank" rel="noreferrer"><button>Más información</button></a>
              </div>
            </article>
            <article className={styles.programs_card}>
              <Image src="/images/bateria.jpeg" alt="Baterista tocando la batería"/>
              <div className={styles.programs_card_description}>
                <h4>Batería</h4>
                <p>Nuestras clases de batería son el lugar perfecto para aquellos que buscan desarrollar su habilidad en este emocionante instrumento. </p>
                <p>Aprenderás técnicas de juego, ritmo, tiempos y podrás tocar tus canciones favoritas. </p>
                <a href="https://wa.me/+573114200732?text=Quiero más información sobre sus clases de batería." target="_blank" rel="noreferrer"><button>Más información</button></a>
              </div>
            </article>
          </div>
        </section>
        <footer  className={styles.footer}>
          <div>
            <Image src="/logos/mc-large-white.png" alt="Logo de Music Centre"/>
          </div>
          <div className={styles.footer_info}>
            <p><Image src="/icons/phone.png"  alt="Teléfono" width="32"/>3114200732</p>
            <p><Image src="/icons/instagram.png"  alt="Instagram" width="32"/>@musiccentre</p>
            <p><Image src="/icons/location.png"  alt="Direccion" width="32"/>Cra. 50 #88-35, Barranquilla, Atlantico, Colombia</p>
          </div>
        </footer>

      </main>
    </>
  )
}
