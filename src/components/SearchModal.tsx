import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import projectList from '../data/projects.json'

type PaletteItem = {
  label: string
  href: string
  hint?: string
}

function SearchModal() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const goToItems = useMemo<PaletteItem[]>(() => [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Research', href: '/#research' },
    { label: 'Résumé', href: '/resume' },
    { label: 'Contact', href: '/#contact' },
  ], [])

  const projectItems = useMemo<PaletteItem[]>(() => projectList.map((project) => ({
    label: project.title,
    href: `/projects/${project.slug}`,
    hint: 'Project',
  })), [])

  const openModal = () => {
    dialogRef.current?.showModal()
    window.setTimeout(() => {
      searchInputRef.current?.focus()
    }, 0)
  }

  const closeModal = () => {
    dialogRef.current?.close()
  }

  const openSelectedItem = () => {
    const selectedItem = [...goToItems, ...projectItems][selectedIndex]

    if (!selectedItem) {
      return
    }

    closeModal()
    window.location.href = selectedItem.href
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        openModal()
        return
      }

      if (!dialogRef.current?.open) {
        return
      }

      if (event.key === 'ArrowDown') {
        event.preventDefault()
        setSelectedIndex((currentIndex) =>
          Math.min(currentIndex + 1, goToItems.length + projectItems.length - 1),
        )
        return
      }

      if (event.key === 'ArrowUp') {
        event.preventDefault()
        setSelectedIndex((currentIndex) => Math.max(currentIndex - 1, 0))
        return
      }

      if (event.key === 'Enter') {
        event.preventDefault()
        openSelectedItem()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [goToItems, projectItems, selectedIndex])

  return (
    <>
      <button
        type="button"
        className="input hidden w-full max-w-88 items-center gap-2 lg:flex"
        onClick={openModal}
      >
        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <span className="grow text-left text-base-content/50">Search</span>
        <kbd className="kbd kbd-sm">Ctrl K</kbd>
      </button>

      <dialog ref={dialogRef} id="my_modal_2" className="modal">
        <div className="modal-box max-w-3xl overflow-hidden border border-base-300 p-0">
          <div className="flex items-center gap-3 border-b border-base-300 px-5 py-4">
            <svg className="h-5 w-5 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              ref={searchInputRef}
              type="search"
              className="w-full bg-transparent text-base outline-none placeholder:text-base-content/45"
              placeholder="Jump to a page, link, or action..."
              onChange={() => setSelectedIndex(0)}
            />
          </div>

          <div className="max-h-136 overflow-y-auto px-3 py-4">
            <div className="px-3 pb-2 text-xs uppercase tracking-[0.3em] text-base-content/45">
              Go to
            </div>
            <ul className="menu rounded-box w-full p-0">
              {goToItems.map((item, index) => (
                <li key={item.label} className="w-full">
                  <Link
                    to={item.href}
                    onClick={closeModal}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={[
                      'flex w-full items-center justify-between rounded-xl px-4 py-3 text-left',
                      index === selectedIndex ? 'active' : '',
                    ].join(' ')}
                  >
                    <span>{item.label}</span>
                    {item.hint ? <span className="text-xs opacity-60">{item.hint}</span> : null}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="divider my-4" />

            <div className="px-3 pb-2 text-xs uppercase tracking-[0.3em] text-base-content/45">
              Projects
            </div>
            <ul className="menu rounded-box w-full p-0">
              {projectItems.map((item) => (
                <li key={item.label} className="w-full">
                  <Link to={item.href} onClick={closeModal}>
                    <span className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left">
                      <span>{item.label}</span>
                      {item.hint ? <span className="text-xs opacity-60">{item.hint}</span> : null}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-between border-t border-base-300 px-4 py-3 text-xs text-base-content/50">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <kbd className="kbd kbd-sm">↑</kbd>
                <kbd className="kbd kbd-sm">↓</kbd>
                navigate
              </span>
              <span className="flex items-center gap-1">
                <kbd className="kbd kbd-sm">↵</kbd>
                select
              </span>
            </div>
            <span className="flex items-center gap-1">
              <kbd className="kbd kbd-sm">esc</kbd>
              close
            </span>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button aria-label="Close search modal">close</button>
        </form>
      </dialog>
    </>
  )
}

export default SearchModal