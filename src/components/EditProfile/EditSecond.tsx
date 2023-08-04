import React from 'react'
import styles from './Edit.module.scss'
import EditFirst from './EditFirst'

const EditSecond: React.FC = () => {
  return (
    <div className={styles.editSecond}>
        <h3>Edit</h3>
        <EditFirst />
        <h3>Edit</h3>
    </div>
  )
}

export default EditSecond
