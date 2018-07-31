import React, { PureComponent } from "react";
import "./Header.css"
import logo from "./image/Logo-white.svg"

export default class Header extends PureComponent {
  render() {
    const { coins, ethPrize, btcPrize } = this.props;

    return (
      <header className="header">
        <div className="header-div">
          <img className="header-image" src={logo} alt="Logo" />
          <div className="header-buttons">
            <div className="header-button">{ethPrize && ethPrize.toFixed(1)}<b>{coins.btc} BTC</b></div>
            <div className="header-button">{btcPrize && btcPrize.toFixed(1)}<b>{coins.eth} ETH</b></div>
          </div>
          <span>username</span>
        </div>
      </header>
    );
  }
}