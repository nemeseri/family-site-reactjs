import { createFileRoute } from '@tanstack/react-router'
import SocialIcons from '../components/SocialIcons'
import '../assets/home.css'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <section id='Welcome'>
      <div>
        <h1>Hi, I'm Andras.</h1>
        <p>I'm a full-stack web developer, based in San Francisco, CA.</p>
        <footer>
          <SocialIcons />
        </footer>
      </div>
    </section>
  )
}
