import { useState } from 'react';
//da znae koe e natisnato
import MenuItem from './MenuItem'

import "./Menu.css";
import { MENU_ITEMS } from './MenuConstants'



const  Menu =() =>  {
     const [currentItem, setCurrentItem] = useState();
     //   tuk e get     , tuk e set
console.log(currentItem);
//koe e posslednoto izbrano

  return (
   <aside className="menu">
    {MENU_ITEMS.map(x => 
        <MenuItem 
        key={x.id}
         id={x.id} 
         isSelected={x.id == currentItem }
         //ako e == zna4i e tuku6tiq selectiranmiq izbraniq vra6ta true or false
         onClick={setCurrentItem}
        >
             {x.text} {x.id}
             </MenuItem>

        )}
   </aside>
  );
}

export default Menu;