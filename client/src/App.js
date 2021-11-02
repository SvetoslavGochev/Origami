import { Component } from "react";

import * as postService from './services/postService';
//vsi4ko ot post servise postsService.getAll
import { getAll } from "./services/postService";


import Header from "./components/Header/Header";
import Menu from "./components/Menu";
import Main from "./components/Main"
import style from "./App.module.css";

// function App() {
//   return (
//     <div className={style.app}>
//       <Header />

//       <div className={style.container}>
//         <Menu />

//          <Main posts={this.state.posts}/>
//       </div>
//     </div>
//   );
// }

class App extends Component {
   constructor(props) {
     super(props);

     this.state = {
       posts: [],
       selectedPost : null
     }
   }

//zaqvkasled kato se zaredi kcomponmenta

  componentDidMount() {
    postService.getAll()
    .then(posts => {
      this.setState({posts})
    })
  }

   onMenuItemClick(id) {
     this.setState({selectedPost: id});
   }

   getPosts() {
     if (!this.state.selectedPost) {
       return this.state.posts
     } else {
       return [this.state.posts.find(x => x.id == this.state.selectedPost) ]
     }
   }

 render() {
  return (
    <div className={style.app}>
      <Header />

      <div className={style.container}>
        <Menu 
          onMenuItemClick={this.onMenuItemClick.bind(this)}
        />

         <Main
          posts={this.getPosts()}
          />
      </div>
    </div>
  );
 }
}

export default App;
