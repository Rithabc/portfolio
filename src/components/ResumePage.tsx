import '../App.css'

function ResumePage() {
  const resumeImageSrc = `${import.meta.env.BASE_URL}resume.jpg`
  const resumePdfSrc = `${import.meta.env.BASE_URL}resume.pdf`

  return (
    <main className="min-h-screen bg-base-100 px-4 py-8 text-base-content lg:px-16 xl:px-20">
      <div className="mx-auto max-w-[1200px]">
        <header className="mb-8">
          <span className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] opacity-80">
            <span className="h-px w-8 bg-current opacity-80" />
            RÉSUMÉ
          </span>
        </header>

        <section className="grid gap-10 xl:grid-cols-[1.65fr_0.75fr] xl:items-end">
          <div className="max-w-5xl">
            <h1 className="text-[clamp(3.5rem,6vw,8rem)] font-black leading-[0.88] tracking-[-0.07em]">
              Rithvika Sapalya
            </h1>
            <p className="mt-8 max-w-[62rem] text-[clamp(1.2rem,1.8vw,2rem)] leading-[1.35] opacity-90">
              Software developer across the full stack. The full document is below, and the PDF is one tap away.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-start gap-3 xl:justify-end xl:pb-2">
            <a className="btn btn-primary" href={resumePdfSrc} download>
              <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" />
              </svg>
              Download PDF
            </a>
            <a className="btn btn-outline" href={resumePdfSrc} target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5h5m0 0v5m0-5-7 7m5 2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3" />
              </svg>
              Open in new tab
            </a>
          </div>
        </section>

        <section id="preview" className="mt-12 mx-auto max-w-[1080px] overflow-hidden rounded-[1.25rem] border border-base-300 bg-base-100 shadow-2xl">
          <img className="block w-full bg-white" src={resumeImageSrc} alt="Rithvika Sapalya resume" />
        </section>
      </div>
    </main>
  )
}

export default ResumePage
