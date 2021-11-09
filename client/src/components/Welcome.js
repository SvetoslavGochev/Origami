import { Component }  from "react";

function solve () {
    console.log(5);
}

solve();

class Welcome extends Component {
    
    render () {
        let title = this.props.title || "Title";
        let subtitle = this.props.title || 'Zdrasti';
        return (

            <div>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
            </div>
        );
    }

}

export default Welcome;