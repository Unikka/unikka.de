import React from 'react'
import styles from '../../css/featureBox.module.css'

const FeatureBoxContainer = ({children}) => (
  <div className={styles.featureBoxContainer}>
    {children}
  </div>
)

export default FeatureBoxContainer