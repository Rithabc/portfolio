import '../App.css'
import { type ReactNode } from 'react'
import { motion } from 'motion/react'
import readersCircleImage from '../assets/readers-circle.png'
import projectList from '../data/projects.json'

const projects = projectList.map((project) => ({
  slug: project.slug,
  title: project.title,
  type: project.type,
  stack: project.stack,
  liveLink: project.primaryLink.href.startsWith('http') ? project.primaryLink.href : undefined,
  githubLink: project.secondaryLink.href.startsWith('http') ? project.secondaryLink.href : undefined,
  repoLabel: 'Github',
  description: project.summary,
}))

function ParallaxPreview({ children, initialX }: { children: ReactNode; initialX: number }) {
  return (
    <div className="projects-parallax-frame">
      <motion.div
        className="projects-parallax-preview"
        initial={{ opacity: 0, x: initialX, scale: 0.97 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  )
}

function ProjectsPage() {
  return (
    <main className="min-h-screen bg-base-100 px-4 py-8 text-base-content lg:px-16 xl:px-20">
      <div className="mx-auto max-w-[1200px]">
        <header className="mb-8">
          <span className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] opacity-80">
            <span className="h-px w-8 bg-current opacity-80" />
            PROJECTS
          </span>
        </header>

        <section className="max-w-5xl">
          <h1 className="text-[clamp(3.5rem,6vw,8rem)] font-black leading-[0.88] tracking-[-0.07em]">
            Projects
          </h1>
          <p className="mt-8 max-w-[52rem] text-[clamp(1.2rem,1.8vw,2rem)] leading-[1.35] opacity-90">
            A portfolio of product work, systems thinking, and user-focused software built to solve real problems.
          </p>
        </section>

        <section className="mt-12 space-y-8">
          {projects.map((project, index) => {
            const isImageOnRight = index % 2 === 0

            return (
              <div
                key={project.title}
                className="rounded-2xl bg-base-100 p-6 lg:p-8"
              >
                <div className={`grid gap-6 xl:items-start ${isImageOnRight ? 'xl:grid-cols-[1.3fr_1.1fr]' : 'xl:grid-cols-[1.1fr_1.3fr]'}`}>
                  {isImageOnRight ? (
                    <>
                      <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, delay: index * 0.18, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="mb-4 flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
                          <div>
                            <h2 className="text-2xl font-bold tracking-[-0.04em] lg:text-3xl">{project.title}</h2>
                            <p className="mt-1 text-sm font-medium uppercase tracking-[0.12em] opacity-75">{project.type}</p>
                          </div>
                          <div className="flex flex-wrap items-center gap-2 text-sm opacity-80">
                            <a href={`/projects/${project.slug}`} className="link link-primary">
                              Details
                            </a>
                            {project.liveLink && (
                              <a href={project.liveLink} target="_blank" rel="noreferrer" className="link link-primary">
                                Live
                              </a>
                            )}
                            {project.githubLink && (
                              <a href={project.githubLink} target="_blank" rel="noreferrer" className="btn border-black bg-black text-white hover:bg-black hover:text-white">
                                <svg aria-label="GitHub logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                  <path fill="white" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                                </svg>
                                Source
                              </a>
                            )}
                          </div>
                        </div>

                        <p className="mb-4 text-sm opacity-80">{project.stack}</p>
                        <p className="text-base leading-relaxed opacity-80">{project.description}</p>
                      </motion.div>

                      <ParallaxPreview initialX={80}>
                        <div className="mockup-browser bg-base-100 w-full border border-base-300">
                        <div className="mockup-browser-toolbar">
                          <div className="input">{project.liveLink ?? project.githubLink ?? 'project-preview'}</div>
                        </div>
                        <div className="grid h-64 overflow-hidden bg-base-200">
                          {project.title === 'The Reader’s Circle' ? (
                            <img src={readersCircleImage} alt="The Reader’s Circle project preview" className="h-full w-full object-cover" />
                          ) : (
                            <div className="grid place-content-center text-lg font-medium text-base-content/80">{project.title}</div>
                          )}
                        </div>
                        </div>
                      </ParallaxPreview>
                    </>
                  ) : (
                    <>
                      <ParallaxPreview initialX={-80}>
                        <div className="mockup-browser bg-base-100 w-full border border-base-300">
                        <div className="mockup-browser-toolbar">
                          <div className="input">{project.liveLink ?? project.githubLink ?? 'project-preview'}</div>
                        </div>
                        <div className="grid h-64 overflow-hidden bg-base-200">
                          {project.title === 'The Reader’s Circle' ? (
                            <img src={readersCircleImage} alt="The Reader’s Circle project preview" className="h-full w-full object-cover" />
                          ) : (
                            <div className="grid place-content-center text-lg font-medium text-base-content/80">{project.title}</div>
                          )}
                        </div>
                        </div>
                      </ParallaxPreview>

                      <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, delay: index * 0.18, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="mb-4 flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
                          <div>
                            <h2 className="text-2xl font-bold tracking-[-0.04em] lg:text-3xl">{project.title}</h2>
                            <p className="mt-1 text-sm font-medium uppercase tracking-[0.12em] opacity-75">{project.type}</p>
                          </div>
                          <div className="flex flex-wrap items-center gap-2 text-sm opacity-80">
                            <a href={`/projects/${project.slug}`} className="link link-primary">
                              Details
                            </a>
                            {project.liveLink && (
                              <a href={project.liveLink} target="_blank" rel="noreferrer" className="link link-primary">
                                Live
                              </a>
                            )}
                            {project.githubLink && (
                              <a href={project.githubLink} target="_blank" rel="noreferrer" className="btn border-black bg-black text-white hover:bg-black hover:text-white">
                                <svg aria-label="GitHub logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                  <path fill="white" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                                </svg>
                                Source
                              </a>
                            )}
                          </div>
                        </div>

                        <p className="mb-4 text-sm opacity-80">{project.stack}</p>
                        <p className="text-base leading-relaxed opacity-80">{project.description}</p>
                      </motion.div>
                    </>
                  )}
                </div>
              </div>
            )
          })}
        </section>
      </div>
    </main>
  )
}

export default ProjectsPage