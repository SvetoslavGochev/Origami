import { Fragment } from "react";
//<fragment> ako polzvame vmesto
// 6te ima element koito da darji h1 i p vmesto main i nqma da go ima v html
// ili prazen tag <>==<Fragment>
import "./Main.css";

const Main = () => {
  return (
    <main className='main-container'>
      <h1>Soooooooome Heading</h1>

      <p>Some post</p>
    </main>
  );
};

export default Main;
