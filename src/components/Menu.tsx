import * as React from "react";

export interface Props {
  getWeather: any;
}

class Menu extends React.Component<Props> {
  render() {
    return (
      <div className="full-width" id="header">
        <div className="container">
          <div className="logo">How is the weather?</div>
          <div>
            <form onSubmit={this.props.getWeather}>
              <label>
                <input id="city" type="text" name="city" placeholder="Search cities..." />
                <input id="country" type="text" name="country" placeholder="County..." />
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