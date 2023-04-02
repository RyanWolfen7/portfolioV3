import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import hero from '../../public/MeHero.png'
import fsd from '../../public/full-stack-developer-icon.svg'
import uxui from '../../public/web-page-icon.svg'
import refactor from '../../public/information-technology-icon.svg'
import arch from '../../public/microservice-icon.svg'
import TitleCard from '@/components/cards/TitleCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.mainContainer}>      
        <div className={styles.heroContainer}>
          <Image src={hero} alt="ryan-hero" className={styles.hero} />
        </div>
        <div className={styles.container}>
          <TitleCard title="Full Stack Development" src={fsd} alt="full stack" color="#1E3231"/>
          <TitleCard title="UX/UI Design" src={uxui} alt="ux ui" color="#C3C9E9"/>
          <TitleCard title="App Architecture" src={arch} alt="architecture" color="#B5B682"/>
          <TitleCard title="Consulting" src={refactor} alt="consulting" color="#C44536"/>
        </div>
      </div>
    </main>
  )
}
