import React, { Component } from 'react';
import './App.css';
class App extends Component {
  menuClick(){
    const navlist = document.getElementById("navlist");
    //navlist.style.display = "block";
    navlist.classList.toggle("active");
  }
  render() {
    return (
      <>
        <header>
          <nav>
            <div className='logo'>Akshay Damarla</div>
            <ul id="navlist">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact Us</li>
            </ul>
            <div className='menu' onClick={()=>this.menuClick()}>&#9776;</div>
          </nav>
          </header>
        <section>
          <h1>Welcome to My Website</h1>
          <p>Follw us on instagram: akshaydamarla</p>
          

        </section>
        <footer>Copyright© 2025. All Rights Reserved.</footer>
      </>
    );
  }
}

export default App;
