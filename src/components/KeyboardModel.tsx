import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

function KeyboardModel() {
  const hostRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const host = hostRef.current

    if (!host) {
      return
    }

    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100)
    camera.position.set(2.6, 3.0, 2.6)
    camera.lookAt(0, 0, 0)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.setSize(host.clientWidth, host.clientHeight, false)
    host.appendChild(renderer.domElement)

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4)
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2)
    keyLight.position.set(4, 5, 6)
    const fillLight = new THREE.PointLight(0xffd7a8, 0.9)
    fillLight.position.set(-3, 2, -2)
    const modelRoot = new THREE.Group()
    const dragRotation = { y: 0 }
    const pointerState = { active: false, x: 0, y: 0 }

    scene.add(ambientLight, keyLight, fillLight, modelRoot)
    modelRoot.rotation.x = -0.18
    modelRoot.rotation.y = 0.65

    const loader = new GLTFLoader()
    let isDisposed = false

    loader.load(`${import.meta.env.BASE_URL}custom_-_mechanical_keyboard.glb`, (gltf: any) => {
      if (isDisposed) {
        return
      }

      const model = gltf.scene
      const box = new THREE.Box3().setFromObject(model)
      const center = box.getCenter(new THREE.Vector3())
      const size = box.getSize(new THREE.Vector3())
      const scale = 2.3 / Math.max(size.x, size.y, size.z)

      model.scale.setScalar(scale)
      model.position.set(-center.x * scale, -center.y * scale, -center.z * scale)
      modelRoot.add(model)
    })

    const resizeRenderer = () => {
      const width = host.clientWidth
      const height = host.clientHeight

      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height, false)
    }

    window.addEventListener('resize', resizeRenderer)

    const handlePointerDown = (event: PointerEvent) => {
      pointerState.active = true
      pointerState.x = event.clientX
      pointerState.y = event.clientY
      host.setPointerCapture(event.pointerId)
      host.style.cursor = 'grabbing'
    }

    const handlePointerMove = (event: PointerEvent) => {
      if (!pointerState.active) {
        return
      }

      const deltaX = event.clientX - pointerState.x
      dragRotation.y += deltaX * 0.01

      pointerState.x = event.clientX
      pointerState.y = event.clientY
    }

    const endPointerInteraction = () => {
      pointerState.active = false
      host.style.cursor = 'grab'
    }

    host.addEventListener('pointerdown', handlePointerDown)
    host.addEventListener('pointermove', handlePointerMove)
    host.addEventListener('pointerup', endPointerInteraction)
    host.addEventListener('pointercancel', endPointerInteraction)
    host.addEventListener('pointerleave', endPointerInteraction)

    let frameId = 0

    const render = () => {
      modelRoot.rotation.x = 0
      modelRoot.rotation.y = 0.65 + dragRotation.y

      renderer.render(scene, camera)
      frameId = window.requestAnimationFrame(render)
    }

    render()

    return () => {
      isDisposed = true
      window.removeEventListener('resize', resizeRenderer)
      host.removeEventListener('pointerdown', handlePointerDown)
      host.removeEventListener('pointermove', handlePointerMove)
      host.removeEventListener('pointerup', endPointerInteraction)
      host.removeEventListener('pointercancel', endPointerInteraction)
      host.removeEventListener('pointerleave', endPointerInteraction)
      window.cancelAnimationFrame(frameId)
      renderer.dispose()
      if (renderer.domElement.parentNode === host) {
        host.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={hostRef} className="three-canvas-host" />
}

export default KeyboardModel