import { Fragment } from "react";
//<fragment> ako polzvame vmesto
// 6te ima element koito da darji h1 i p vmesto main i nqma da go ima v html
// ili prazen tag <>==<Fragment>
import Post from '../Post'
import "./Main.css";


const Main = ({
  posts
})=> {
  console.log(posts)
  return (
    <main className='main-container'>
       <h1>Soooooooome Heading</h1>
      
      <div className="posts">
         {posts.map(x => 
              <Post 
             key={x.id}
             content={x.content}
              author={x.author}
            />
           )}
      </div>
    </main>
  );
};

export default Main;
