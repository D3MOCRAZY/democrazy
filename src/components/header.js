import React from 'react';


export default class Header extends React.Component {

  constructor() {
    super();

    this.state = {
      showMenu: false,
    }
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);

  }
  showMenu(event) {
    event.preventDefault();
    // cancela o evento se for cancelavel
    this.setState({ showMenu: true }, () => {
      //document.addEventListener('click', this.closeMenu);

    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {


      this.setState({ showMenu: false }, () => {
        //document.addEventListener('click', this.closeMenu);
      });
    }
  }
  render() {
    return (
      <div>

        <header className="header">

          <div className="logo">
            <p></p>
           
          </div>


          <div className="menu1">
            <button onClick={this.showMenu}>
              Menu</button>
          </div>

          {
            this.state.menu,
            this.state.showMenu
              ? (

                <div
                  className="menu" ref={(element) => {
                    this.dropdownMenu = element;
                  }}
                >

                  <button>menu 1</button>
                  <button>menu 2</button>
                  <button>menu 3</button>
                </div>
              )
              : (
                null
              )
          }
        </header>

      </div>
    );
  }

};
