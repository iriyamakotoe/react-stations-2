import { Link } from 'react-router-dom';

// @ts-check
export const Header = (props) => {
  return <>
      <header>
        <h1>掲示板</h1>
        <p><Link to={props.header.url}>{props.header.text}</Link></p>
      </header>
  </>
}

export default Header
