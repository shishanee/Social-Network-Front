import React from 'react'
import styles from './Edit.module.scss'
import EditFirst from './EditFirst'

const EditSecond: React.FC = ():JSX.Element => {
  return (
    <div className={styles.editSecond}>
        <EditFirst />
    </div>
  )
}

export default EditSecond
