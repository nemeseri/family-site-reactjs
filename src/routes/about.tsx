import { createFileRoute } from '@tanstack/react-router'
import SocialIcons from '../components/SocialIcons'
import SkillList from '../components/Skills'
import PositionList from '../components/PositionList'
import '../assets/about.css'
import skills from '../data/skills.json'
import positions from '../data/positions.json'

export const Route = createFileRoute('/about')({
  component: About,
  meta: () => [
    {
      title: "About | Andras Nemeseri - Web Developer",
    },
  ],
})

function About() {
  return (
    <>
      <div id="AboutSidebar">
        <header>
          <h1>Andras Nemeseri</h1>
          <p>
            I am a detail-oriented full-stack software engineer with over 15
            years of professional experience, specializing in front-end
            development. During this time, I have delivered numerous complex
            websites and applications, and led teams as a Product Architect.
          </p>
          <p>
            For the past 10 years, I have focused on building multilingual
            enterprise web applications.
          </p>
        </header>
        <section>
          <h2>Languages & Libraries & Tools</h2>
          <SkillList data={skills} />
        </section>
        <section>
          <h2>Education</h2>
          <p>
            BSc Electrical Engineering <span>@</span>{' '}
            <a
              href="https://admissions.sze.hu/welcome"
              target="_blank"
              className="school"
            >
              Szechenyi Univeristy
            </a>
          </p>
        </section>
        <footer>
          <a href="/resume.pdf" className="button" target="_blank">
            Download Resume
          </a>
          <SocialIcons />
        </footer>
      </div>
      <section id="AboutExperience">
        <h2>Experience</h2>
        <PositionList data={positions} />
      </section>
    </>
  )
}
