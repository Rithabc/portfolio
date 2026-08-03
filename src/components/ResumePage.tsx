import '../App.css'
import { Link } from 'react-router-dom'

function ResumePage() {
  const resumeImageSrc = '/resume_page-0001.jpg'

  return (
    <main className="resume-page">
      <section id="preview" className="resume-viewer resume-image-viewer">
        <img className="resume-viewer-image" src={resumeImageSrc} alt="Rithvika Sapalya resume" />
      </section>

      <footer className="resume-footer">
        <p>
          <Link className="resume-footer-link" to="/">
            Return home
          </Link>
          <span>Software developer, portfolio site</span>
        </p>
      </footer>
    </main>
  )
}

export default ResumePage
