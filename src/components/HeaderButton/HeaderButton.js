import React, { PureComponent } from 'react';
import './HeaderButton.css';
import { Link } from 'react-router-dom';

class HeaderButton extends PureComponent {
  render() {
    const { price, count, name, disabled } = this.props;

    if (disabled) {
      return (
        <div className="header-button disabled" onClick={this.handleClick}>
          {price && price.toFixed(1)}
          <b>
            {count} {name}
          </b>
        </div>
      );
    } else {
      return (
        <Link className="header-button-link" to={`/trade/${name}`}>
          <div className="header-button" onClick={this.handleClick}>
            {price && price.toFixed(1)}
            <b>
              {count} {name}
            </b>
          </div>
        </Link>
      );
    }
  }

  handleClick = () => {
    this.props.onChooseCurrency(this.props.name);
  };
}

export default HeaderButton;
