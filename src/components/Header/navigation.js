import React from 'react'
import { Link } from 'gatsby'
import headerStyles from "../../css/header.module.css"

/**
 * Render markdown for the incoming list items. A item has a name and
 * a link property.
 *
 * @param {Array} items 
 */
const renderMenuListItems = items => {
  return items.map(link => (
    <li key={link.name} style={headerStyles.navigationItem}>
      <Link to={link.link} activeClassName="active">{link.name}</Link>
    </li>)
  );
}

const renderMenuToggle = () => {
  return (
    <div className={headerStyles.menuToogle}>
      <label>
          <input type="checkbox" className={headerStyles.openMenu}/>
          <div className={headerStyles.spinner}></div>
          <div className={headerStyles.spinner}></div>
          <div className={headerStyles.spinner}></div>
      </label>
    </div>
  );
}

const Navigation = (items) => {
  const menuListItems = renderMenuListItems(items.items);
  return (
    <nav>
      {renderMenuToggle()}
      <ul className={headerStyles.navigation}>
        {menuListItems}
      </ul>
    </nav>
  )
}

export default Navigation
