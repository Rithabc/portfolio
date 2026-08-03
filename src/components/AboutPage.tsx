import '../App.css'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <main className="project-page">
      <section className="project-hero">
        <div className="project-back-link-wrap">
          <Link className="project-back-link" to="/">
            ← Home
          </Link>
        </div>

        <div className="project-meta-row">
          <span className="project-year">TEMP</span>
          <span className="project-divider" />
          <span className="project-kicker">About page</span>
          <span className="project-divider" />
          <span className="project-status">● Placeholder</span>
        </div>

        <h1 className="project-title">About</h1>
        <p className="project-summary">
          This is a placeholder About page. You can replace this later with your bio, background, skills, and timeline.
        </p>
      </section>

      <section className="project-detail-grid">
        <div className="project-detail-intro">
          <p>
            The layout is intentionally simple for now so you can expand it later without changing the navigation or route structure.
          </p>
        </div>

        <div className="project-detail-panels">
          <article className="project-detail-panel">
            <h2>What goes here later</h2>
            <p>Short bio, technical interests, tools, experience, and contact details.</p>
          </article>
          <article className="project-detail-panel">
            <h2>Next step</h2>
            <p>Drop in the real content when you are ready and keep the same page shell.</p>
          </article>
        </div>
      </section>
    </main>
  )
}

export default AboutPage