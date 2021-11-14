import { Redirect, useHistory, Switch, Route }  from 'react-router-dom';
 

const About = ({
    match,
    location,
    history
}
) => {
//     const histori = useHistory();
// if(Math.random() > 0.5 ) {

//     // return <Redirect path="/"/>
//     histori.push("/");
//     return null;
// }

    
    return (
        <main className="main-container">
            <h1>About {match.params.name} Page</h1>
            {/* da pi6e pe6p 5 7 8 da izpisva tam kadeto sme natisnali */}
            <Switch>
                <Route path="/about/pesho">
                <h2>Pe6o is the best</h2>
                </Route>
            </Switch>
            {/*  kogatoi se natisne pe6o 6te pokage dopalnmitelno i tova */}
        </main>
    ) ;
}
    
export default About;