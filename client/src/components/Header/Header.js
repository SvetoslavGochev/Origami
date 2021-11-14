import style from "./Header.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className={style.navigation}>
      <ul>
        <li className="listItem">
          <img src="white-origami-bird.png" alt="white-origami"></img>
        </li>  
        
       <NavLink activeClassName="nav-item" exact={true} to="/"><NavigationItem>Home</NavigationItem></NavLink>
       <NavLink activeClassName="nav-item" exact={true} to="/about"><NavigationItem>About</NavigationItem></NavLink>
       <NavLink activeClassName="nav-item" exact={true} to="contact"><NavigationItem>ContactUs</NavigationItem></NavLink>
       <NavLink activeClassName="nav-item" exact={true} to="/about/pesho"><NavigationItem>Pesho</NavigationItem></NavLink>
       <NavLink activeClassName="nav-item" exact={true} to="/about/gosho"><NavigationItem>Going to 4</NavigationItem></NavLink>
       <NavLink activeClassName="nav-item" exact={true} to="/about/pe6o2"><NavigationItem>Going to 5</NavigationItem></NavLink>
       <NavLink activeClassName="nav-item" exact={true} to="/about/pe6o3"><NavigationItem>Going to 6</NavigationItem></NavLink>
       <NavLink activeClassName="nav-item" exact={true} to="/about/pe6o4"><NavigationItem>Going to 7</NavigationItem></NavLink>
       <NavLink activeClassName="nav-item" exact={true} to="/about/pe6o5"><NavigationItem>Going to 8</NavigationItem></NavLink>
       <NavLink activeClassName="nav-item" exact={true} to="/about/pe6o6"><NavigationItem>Going to 9</NavigationItem></NavLink>
       <NavLink activeClassName="nav-item" exact={true} to="/about/pe6o7"><NavigationItem>Going to 10</NavigationItem></NavLink>
       <NavLink activeClassName="nav-item" exact={true} to="/about/pe6o8"><NavigationItem>Going to 11</NavigationItem></NavLink>
{/* poslednoto natisnato e 4erveno ako e bez exact={true} vsi4ki natisnati sa 4erveni */}
      
      </ul>
    </nav>
  );
};

export default Header;
