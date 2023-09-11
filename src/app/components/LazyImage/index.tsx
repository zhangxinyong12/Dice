import React, { useState, useEffect, useRef } from "react"

const LazyImage = ({ src, alt, width, height }) => {
  const [loaded, setLoaded] = useState(false)
  const imageRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "0px",
      threshold: 0.1, // 根据需要调整此值
    })

    if (imageRef.current) {
      observer.observe(imageRef.current)
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current)
      }
    }
  }, [])

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        loadImage()
        observer.unobserve(entry.target)
      }
    })
  }

  const loadImage = () => {
    const image = new Image()
    image.src = src
    image.onload = () => {
      setLoaded(true)
    }
    image.alt = alt
    image.width = width
    image.height = height
    if (imageRef.current) {
      imageRef.current.appendChild(image)
    }
  }

  return (
    <div ref={imageRef}>
      {loaded ? (
        <img src={src} alt={alt} width={width} height={height} />
      ) : null}
    </div>
  )
}

export default LazyImage
