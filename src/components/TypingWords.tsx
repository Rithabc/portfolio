import { useEffect, useState } from 'react'

const words = ['Builder', 'Engineer', 'Creator', 'Machine Learning Enthusiast', 'Problem Solver', 'Innovator', 'Tech Enthusiast', 'Software Developer', 'AI Researcher', 'Data Scientist']

function TypingWords() {
  const [wordIndex, setWordIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const typingDelay = 80
  const deletingDelay = 35

  useEffect(() => {
    const currentWord = words[wordIndex]
    const isWordComplete = displayText === currentWord
    const delay = isDeleting ? deletingDelay : isWordComplete ? 950 : typingDelay

    const timeoutId = window.setTimeout(() => {
      if (!isDeleting) {
        if (isWordComplete) {
          setIsDeleting(true)
          return
        }

        const nextText = currentWord.slice(0, displayText.length + 1)
        setDisplayText(nextText)
        return
      }

      const nextText = currentWord.slice(0, displayText.length - 1)
      setDisplayText(nextText)

      if (nextText === '') {
        setIsDeleting(false)
        setWordIndex((prev) => (prev + 1) % words.length)
      }
    }, delay)

    return () => window.clearTimeout(timeoutId)
  }, [displayText, isDeleting, wordIndex])

  return <h1 className="home-typewriter-text">{displayText}</h1>
}

export default TypingWords
