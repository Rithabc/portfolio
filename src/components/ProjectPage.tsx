import '../App.css'
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import {
  siFastapi,
  siGit,
  siMysql,
  siNumpy,
  siOllama,
  siOpencv,
  siPython,
  siPytorch,
  siReact,
  siSpring,
  siTypescript,
  type SimpleIcon,
} from 'simple-icons'
import projectList from '../data/projects.json'
import heroPreview from '../assets/hero.png'
import readersCirclePreview from '../assets/readers-circle.png'

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
  type: string
  stack: string
  stackIcons: string[]
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
  'readers-circle': readersCirclePreview,
}

const stackIconMap: Record<string, SimpleIcon> = {
  FastAPI: siFastapi,
  Git: siGit,
  MySQL: siMysql,
  NumPy: siNumpy,
  Ollama: siOllama,
  OpenCV: siOpencv,
  Python: siPython,
  PyTorch: siPytorch,
  React: siReact,
  Spring: siSpring,
  TypeScript: siTypescript,
}

function ProjectPage() {
  const { slug } = useParams()
  const previewRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: previewRef, offset: ['start end', 'end start'] })
  const previewY = useTransform(scrollYProgress, [0, 1], [-28, 28])
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

        <div className="project-title-row">
          <h1 className="project-title">{project.title}</h1>
          <section className="project-stack-section" aria-label="Project technologies">
            <div className="project-stack-icon-grid">
              {project.stackIcons.map((technology) => {
                const icon = stackIconMap[technology]

                return (
                  <span key={technology} className="project-stack-icon tooltip" data-tip={technology}>
                    {icon && (
                      <svg viewBox="0 0 24 24" aria-label={technology} role="img">
                        <path d={icon.path} />
                      </svg>
                    )}
                  </span>
                )
              })}
            </div>
          </section>
        </div>
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

      <motion.section ref={previewRef} className="project-preview-shell" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
        <motion.img
          className="project-preview-image"
          style={{ y: previewY, scale: 1.08 }}
          src={previewImages[project.previewImage] ?? project.previewImage}
          alt={project.previewAlt}
        />
      </motion.section>

      <section className="project-detail-grid">
        <div className="project-detail-intro">
          <span className="project-section-label">A CLOSER LOOK</span>
          <p>{project.description}</p>
        </div>
        <div className="project-detail-panels">
          {project.sections.map((section, index) => (
            <motion.article
              key={section.title}
              className="project-detail-panel card bg-base-100"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="card-body">
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default ProjectPage