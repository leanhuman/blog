import React from 'react'
import styles from './Bio.module.css'
import { getGravatarURL } from '../utils/getGravatarURL'

function Bio(props) {
  let photoURL = getGravatarURL({
    email: "bkjimmie@gmail.com",
    size: 56,
  })

  return (
    <div className={`
      ${styles.Bio}
      ${props.className || ''}
    `}>
      <img src={photoURL} alt="Me" />
      <p>
        The Lean Human methodology, created by{' '}
        <a href="https://instagram.com/leanhuman/">Jimmy Lindsey</a>, is built on the premise that every human is an experiment of one. The Lean Human provides a scientific and experimental approach to help humans unlock their body and mind to function more efficiently.
      </p>
    </div>
  )
}

export default Bio
