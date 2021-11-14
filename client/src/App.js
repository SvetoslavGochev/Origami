import { Component } from "react";

import { Route, Link, NavLink, Redirect, Switch } from 'react-router-dom'

import { Routes } from "react-router-dom";

import * as postService from './services/postService';
//vsi4ko ot post servise postsService.getAll
import { getAll } from "./services/postService";


import About from './components/About';
import ContactUs from "./components/ContactUs";

import Header from "./components/Header/Header";
import Menu from "./components/Menu";
import Main from "./components/Main"
import style from "./App.module.css";
import Welcome from "./components/Welcome/Welcome";

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
   chek(id) {
     this.setState({ sessionStorage: true});
   }

   getPosts() {
     if (!this.state.selectedPost) {
       return this.state.posts
     } else {
       return [ this.state.posts.find(x => x.id == this.state.selectedPost)  ]
     }
   }

 render() {
  let WelcomeProps = {
    title:"abv",
    subtitle:"das"
};
  return (
    <div className={style.app}>
      {/* <Welcome {...WelcomeProps}/>
      <Welcome  title='Hello' subtitle='from react' specificClass='green'/>
      <Welcome  message='Zdrasti' subtitle='ot react'/> */}
      <Header />

      <div className={style.container}>
        <Menu  onMenuItemClick={this.onMenuItemClick.bind(this)}/>
        <Switch>
        <Route path="/" exact>
           <Main posts={this.getPosts()} />
        </Route>
          
           <Route path="/about/:name" component={About} /> 
            <Route path="/contact" component={ContactUs} />
            <Route render={({match, location, history}) => <h1>ErrorPAge</h1>} />
{/* ako ne ma4va ni6to 6te pokave eror page */}
          </Switch>
      </div>
    </div>
  );
 }
}

export default App;
