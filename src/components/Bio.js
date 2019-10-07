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
        <a href="https://instagram.com/leanhuman/">Jimmy Lindsey</a> is a husband, father, and biohacker. As an n of 1, he has been experimenting with fitness and nutrition since 2002. Jimmy studied Applied Physiology at Columbia University and has worked in strength and conditioning, physical therapy, and biohacking. His goal is to help every human realize their unlimited potential. This blog provides a systems-engineering approach to unlocking your body and mind for optimal performance and longevity.
      </p>
    </div>
  )
}

export default Bio
