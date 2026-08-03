import '../App.css'
import { Link, Navigate, useParams } from 'react-router-dom'
import projectList from '../data/projects.json'
import heroPreview from '../assets/hero.png'

type ProjectSection = {
  title: string
  body: string
}

type ProjectStat = {
  value: string
  label: string
}

type ProjectRecord = {
  slug: string
  title: string
  year: string
  status: string
  kicker: string
  summary: string
  description: string
  primaryLink: { label: string; href: string }
  secondaryLink: { label: string; href: string }
  thirdLink: { label: string; href: string }
  stats: ProjectStat[]
  previewImage: string
  previewAlt: string
  sections: ProjectSection[]
}

const projects = projectList as ProjectRecord[]
const previewImages: Record<string, string> = {
  hero: heroPreview,
}

function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return <Navigate to="/" replace />
  }

  return (
    <main className="project-page">
      <section className="project-hero">
        <div className="project-back-link-wrap">
          <Link className="project-back-link" to="/">
            ← All projects
          </Link>
        </div>

        <div className="project-meta-row">
          <span className="project-year">{project.year}</span>
          <span className="project-divider" />
          <span className="project-kicker">{project.kicker}</span>
          <span className="project-divider" />
          <span className="project-status">● {project.status}</span>
        </div>

        <h1 className="project-title">{project.title}</h1>
        <p className="project-summary">{project.summary}</p>

        <div className="project-action-row">
          <a className="project-action project-action-primary" href={project.primaryLink.href}>
            {project.primaryLink.label} ↗
          </a>
          <a className="project-action" href={project.secondaryLink.href}>
            {project.secondaryLink.label}
          </a>
          <a className="project-action" href={project.thirdLink.href}>
            {project.thirdLink.label} ↗
          </a>
        </div>

        <div className="project-stats">
          {project.stats.map((stat) => (
            <div key={stat.label} className="project-stat">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="project-preview-shell">
        <img
          className="project-preview-image"
          src={previewImages[project.previewImage] ?? project.previewImage}
          alt={project.previewAlt}
        />
      </section>

      <section className="project-detail-grid">
        <div className="project-detail-intro">
          <p>{project.description}</p>
        </div>
        <div className="project-detail-panels">
          {project.sections.map((section) => (
            <article key={section.title} className="project-detail-panel">
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default ProjectPage