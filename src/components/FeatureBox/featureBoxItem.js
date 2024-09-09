import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../../assets/sass/layout.scss'

const FeatureBoxItem = ({ title, description, icon, link }) => {
  const linkComponent = link ? <Link to={link}>mehr</Link> : null
  return (
    <div className="featureBox">
      <div className="featureBoxIcon">
        <FontAwesomeIcon icon={icon} size="3x" />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      {linkComponent}
    </div>
  )
}

export default FeatureBoxItem
