import React from 'react'
import styles from "./Gallery.module.scss";

const Gallery = ({ images }) => {
  return (
    <div className={styles.gallery}>
      {images.map((image, index) => (
        <img key={index} loading="lazy" src={image} alt={`gallery-${index}`} />
      ))}
    </div>
  )
}

export default Gallery
