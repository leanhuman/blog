import React from 'react'
import styles from './Bio.module.css'
import { getGravatarURL } from '../utils/getGravatarURL'

function Bio(props) {
  let photoURL = getGravatarURL({
    email: "bkjimmie@gmail.com",
    size: 120,
  })

  return (
    <div className={`
      ${styles.Bio}
      ${props.className || ''}
    `}>
      <img src={photoURL} alt="Me" />
      <p>
        The Lean Human methodology, created by{' '}
        <a href="https://instagram.com/leanhuman/">Jimmy Lindsey</a>, is built on the premise that every human is an experiment of one. The Lean Human provides a systems-thinking approach to unlocking your body and mind for optimal performance and longevity.
      </p>
    </div>
  )
}

export default Bio
