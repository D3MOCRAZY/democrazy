import React from 'react';


export default class Header extends React.Component {

  constructor() {
    super();

    this.state = {
      showMenu: false,
      show: this.showMenu.bind(this),
      menuMsg: 'Show Menu'
    }
    // this.showMenu = this.showMenu.bind(this);
    // this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu() {
    this.setState((prevState) => {
      return {
        showMenu: true,
        show: this.closeMenu.bind(this),
        menuMsg: 'Close Menu'
      }
    });
  }

  closeMenu() {
    this.setState({
      showMenu: false,
      show: this.showMenu.bind(this),
      menuMsg: 'Show Menu'
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
            <div>
              <button className="menuBtn" onClick={this.state.show}>
                {this.state.menuMsg}
              </button>
            </div>

            {
              this.state.showMenu
                ? (
                  <div className="dropdown" >
                    <hr />
                    <button className="drp-btn">
                      Om oss
                    </button>
                    <hr />
                    <button className="drp-btn">
                      Hjälp
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
