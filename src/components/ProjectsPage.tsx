import '../App.css'
import { Link } from 'react-router-dom'
import projectList from '../data/projects.json'

type ProjectRecord = {
  slug: string
  title: string
  year: string
  status: string
  summary: string
  previewAlt: string
}

const projects = projectList as ProjectRecord[]

function ProjectsPage() {
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
          <span className="project-kicker">Projects index</span>
          <span className="project-divider" />
          <span className="project-status">● In progress</span>
        </div>

        <h1 className="project-title">Projects</h1>
        <p className="project-summary">
          This is a temporary projects landing page. It will become the full index once you add more project details to the JSON file.
        </p>
      </section>

      <section className="project-detail-grid">
        <div className="project-detail-intro">
          <p>
            The page is already wired to the same project source data, so this can stay as a staging template while the content grows.
          </p>
        </div>

        <div className="project-detail-panels">
          {projects.map((project) => (
            <article key={project.slug} className="project-detail-panel">
              <div className="project-meta-row">
                <span className="project-year">{project.year}</span>
                <span className="project-divider" />
                <span className="project-status">● {project.status}</span>
              </div>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
              <div className="pt-4">
                <Link className="btn btn-outline btn-sm" to={`/projects/${project.slug}`}>
                  Open project
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default ProjectsPage