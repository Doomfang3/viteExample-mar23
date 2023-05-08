import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImgLink from './components/ImgLink'
import Container from './components/Container'

const imgLinks = [
  { link: 'https://vitejs.dev', src: viteLogo, alt: 'Vite logo' },
  { link: 'https://react.dev', src: reactLogo, alt: 'React logo' },
]

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <Container>
          <ImgLink
            link={imgLinks[0].link}
            src={imgLinks[0].src}
            alt={imgLinks[0].alt}
            fruit='strawberry'
          />
        </Container>
        <Container>
          <ImgLink link={imgLinks[1].link} src={imgLinks[1].src} alt={imgLinks[1].alt} />
          <ImgLink />
        </Container>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </div>
  )
}
