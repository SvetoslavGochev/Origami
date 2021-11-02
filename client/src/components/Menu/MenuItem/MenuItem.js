import "./MenuItem.css";

const MenuItem = ({
      id,
      onClick,
      isSelected,
      children, 
    }) => {
let classes = ['menu-item'];

if(isSelected) {
  classes.push('menu-item-selected');
}

  return (
    <li className={classes.join(' ')}>
      {/* imeto stava menu-item or menu-item menu-item-selected */}
      <a href="#" onClick={() => onClick(id)}>
        {/* 6te pomni koi e posledno natisnatiq currentItem */}
        {children}
      </a>
    </li>
  );
};

export default MenuItem;
