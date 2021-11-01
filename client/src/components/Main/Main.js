import { Fragment } from "react";
//<fragment> ako polzvame vmesto
// 6te ima element koito da darji h1 i p vmesto main i nqma da go ima v html
// ili prazen tag <>==<Fragment>
import "./Main.css";

const Main = ({
  posts
})=> {
  console.log(posts)
  return (
    <main className='main-container'>
       <h1>Soooooooome Heading</h1>

      {posts.map(x => 
           <p key={x._id}>{x.content}</p>
      )}
    </main>
  );
};

export default Main;
