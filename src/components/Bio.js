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
        <a href="https://instagram.com/jimleefit/">Jim Lindsey</a> is a husband, father, and coach. As an n of 1, he has been self-experimenting with nutrition and fitness for more than two decades. Jim started a low carbohydrate, ketogenic diet in 2012 while studying Applied Physiology at Columbia University. He's since begun biohacking both nutrition and fitness as a way to save time and energy and promote longevity. His goal is help people unlock their mind and body for optimal performance.
      </p>
    </div>
  )
}

export default Bio
