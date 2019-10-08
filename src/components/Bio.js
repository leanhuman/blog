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
        <a href="https://instagram.com/leanhuman/">Jimmy Lindsey</a> started low carbohydrate, high fat diet in 2012 while studying Applied Physiology at Columbia University. Having read a sliver of text on this "diet" in one of his textbooks, Jimmy began to question all of his teachings up to that point, which emphasized carbohydrate as the primary source of fuel for the brain and body. He ran with the assumption that the brain and body can function more optimally when fueled by fat instead of carbohydrate, and hasn't looked back.
      </p>
    </div>
  )
}

export default Bio
