import React from 'react'
import EditFirst from './EditFirst'
import EditSecond from './EditSecond'
import styles from './Edit.module.scss'

const Edit: React.FC = ():JSX.Element => {
  return (
    <div className={styles.edit}>
      <EditSecond />
    </div>
  )
}

export default Edit
