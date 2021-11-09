import { Component }  from "react";
import "../Welcome/Welcome.css";

function solve () {
    console.log(5);
}

solve();

class Welcome extends Component {
    
    render () {
       
        let title = this.props.title || "Title";
        let subtitle = this.props.title || 'Zdrasti';
        let specificClass="Welcome-" + (this.props.specificClass || "default");
        return (

            <div className={specificClass}>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
            </div>
        );
    }

}

export default Welcome;