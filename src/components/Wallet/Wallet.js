import React, { PureComponent } from 'react';
import './Wallet.css';
import TradeOperations from "../TradeOperations/TradeOperations";

export default class Wallet extends PureComponent {
  render() {
    const { wallet: { coins } } = this.props;

    return (
      <div>
        <h2>Ваш счет</h2>
        {Object.keys(coins).map(key => {
          const digits = Number.isInteger(coins[key]) ? [coins[key], 0] : coins[key].toString().split('.');

          return (
            <div key={key} className="wallet">
              <div className="wallet-input">
                <span className="wallet-digit">{digits[0]}</span>.<span className="wallet-float">{digits[1]}</span>
              </div>
              <p className="wallet-name">{key.toUpperCase()}</p>
            </div>
          )
        })}
        <TradeOperations/>
      </div>
    );
  }
}
