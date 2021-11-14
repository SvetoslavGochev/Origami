import { Redirect, useHistory }  from 'react-router-dom';
 

const About = ({
    match,
    location,
    history
}
) => {
if(Math.random() > 0.5 ) {

    return <Redirect path="/"/>
}

const histori = useHistory();
    
    return (
        <main className="main-container">
    <h1>About {match.params.name} Page</h1>
    </main>
    ) ;
}
    
export default About;