import React from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
// import Footer from './components/Footer';

    // function Header() {
    //   return (<h1>Simple React Application</h1>);
    // }
    
    // function Content() {
    //   return (<p>This is my first React Application, wish me luck!</p>);
    // }
    
    // function Footer() {
    //   return (<h1>Created by Me, of course.</h1>);
    // }


    // inline styling when we use theinline styling then we don't need to import the footer component
    function Footer()
{
    const footer ={ // writing it as an object
    backgroundColor: 'brown',
    color: 'white',
    textAlign: 'center', // text-algin changed to textAlign which is camel-cased
    padding: '20px',
    display: 'flex',
    flexDirection: 'column'
    };
    return <div style={footer}> Followus for more details </div>
}
    
     function App() {
       return (
        <>
      <Header />
      <Content />
      <Footer />
      </>
      );
    }
  export default App;
  
 
