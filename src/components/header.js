import React from 'react';


export default class Header extends React.Component {

  constructor() {
    super();

    this.state = {
      showMenu: false,
      show: this.showMenu.bind(this),
      menuMsg:':🗶'
    }
  }

  showMenu() {
    this.setState((prevState) => {
      return {
        showMenu: true,
        show: this.closeMenu.bind(this),
        menuMsg: ':🗶'
      }
    });
  }

  closeMenu() {
    this.setState({
      showMenu: false,
      show: this.showMenu.bind(this),
      menuMsg: ':🖸'
     });
  }
  render() {
    return (
        <header className="header">

          <div className="logo">
            <div>
              <a href="/">
                The logo
              </a>
           </div>
          </div>
          <section className="menu">
            <div className="menu-inner">
              <button className="menuBtn" onClick={this.state.show}>
                {this.state.menuMsg}
              </button>
            </div>

            {
              this.state.showMenu
                ? (
                  <div className="dropdown" >
                    <button className="drp-btn">
                      About us
                    </button>
                    <button className=" drp-btn">
                      Help
                    </button>
                  </div>
                )
                : (
                  null
                )
            }
          </section>
        </header>
    );
  }

};
