import * as React from "react";

class Menu extends React.Component {
  render() {
    return (
      <div className="full-width" id="header">
        <div className="container">
          <div className="logo">How is the weather?</div>
          <div>
            <form>
              <label>
                <input type="text" name="name" placeholder="Search cities..." />
              </label>
              <input type="submit" value="Search" id="submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;