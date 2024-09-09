import React, { useState } from 'react'
import { Link } from 'gatsby'

import '../../assets/sass/layout.scss'

/**
 * Render markdown for the incoming list items. A item has a name and
 * a link property.
 *
 * @param {Array} items
 */
const renderMenuListItems = (items) => {
  return items.map((link) => (
    <li key={link.name} className="navigationItem">
      <Link to={link.link} activeClassName="active">
        {link.name}
      </Link>
    </li>
  ))
}

const renderMenuToggle = (open, handleClick) => {
  return (
    <div className="menuToogle">
      <label>
        <input
          type="checkbox"
          className="openMenu"
          onChange={() => handleClick(!open)}
        />
        <div className="spinner"></div>
        <div className="spinner"></div>
        <div className="spinner"></div>
      </label>
    </div>
  )
}

const Navigation = (items) => {
  const [open, setOpen] = useState(false)
  const menuListItems = renderMenuListItems(items.items)
  return (
    <nav>
      {renderMenuToggle(open, (value) => setOpen(value))}
      <ul className={`navigation ${open ? '' : 'navigationHide'}`}>
        {menuListItems}
      </ul>
    </nav>
  )
}

export default Navigation
