import { useEffect, useState } from 'react'
import KeyboardModel from './KeyboardModel'

function HomePage() {
  const fullText = 'Rithvika\nSapalya'
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const isComplete = displayText === fullText
    const isEmpty = displayText === ''
    const delay = isDeleting ? 70 : 120
    let timeoutId: number

    if (isComplete && !isDeleting) {
      timeoutId = window.setTimeout(() => {
        setIsDeleting(true)
      }, 900)
    } else {
      timeoutId = window.setTimeout(() => {
        if (isDeleting) {
          if (isEmpty) {
            setIsDeleting(false)
            return
          }

          setDisplayText(fullText.slice(0, displayText.length - 1))
          return
        }

        setDisplayText(fullText.slice(0, displayText.length + 1))
      }, delay)
    }

    return () => window.clearTimeout(timeoutId)
  }, [displayText, fullText, isDeleting])

  return (
    <>
      <div className="main-padding desc-section">
        <p className="text-lg">
          I&apos;m a passionate software engineer with a love for creating innovative solutions. With a strong foundation in computer science and extensive experience in full-stack development, I thrive on turning complex problems into simple, elegant designs.
        </p>
      </div>
      <div className="main-padding model-section">
        <div className="model-textbox">
          <div className="model-content-box font-size-2xl">
            <h1 className="typewriter-text typewriter-heading">{displayText}</h1>
          </div>
        </div>
        <div className="model-card">
          <KeyboardModel />
        </div>
      </div>
    </>
  )
}

export default HomePage