import "./MenuItem.css";

const MenuItem = ({
     id, onClick, children 
    }) =>{
  return (
    <li className="menu-item">
      <a href="#" onClick={() => onClick(id)}>
        {/* 6te pomni koi e posledno natisnatiq currentItem */}
        {children}
      </a>
    </li>
  );
};

export default MenuItem;
