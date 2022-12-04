import React, { Component } from 'react';
import css from './css/NavBarForm.module.css'

export class NavBarForms extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: false,
    }
  }

  handleClick() {
    this.setState((prevState) => {
        return {
            isLoggedIn: prevState.isLoggedIn === true ? false : true,
        }
    });
}

  render() {
    return (
      <div className={css.NavBar}>
        <h1>My Gallery</h1>
        {this.state.isLoggedIn ? (
          <form>
            <input type="text" value="Username" />
            <input type="password" />
            <input type="submit" value="Submit" onClick={() => this.handleClick()} />
          </form>
        ) : (
          <button onClick={() => this.handleClick()}>Login</button>
        )}
      </div>
    )
  }
}

export default NavBarForms