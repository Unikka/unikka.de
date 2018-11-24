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
    <li key={link.name} style={headerStyles.navigationItem} activeClassName="active">
      <Link to={link.link}>{link.name}</Link>
    </li>)
  );
}

const Navigation = (items) => {
  const menuListItems = renderMenuListItems(items.items);
  return (
    <ul className={headerStyles.navigation}>
      {menuListItems}
    </ul>
  )
}

export default Navigation
