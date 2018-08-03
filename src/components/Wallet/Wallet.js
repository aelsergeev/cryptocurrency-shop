import React, { PureComponent } from 'react';
import './Wallet.css';
import TradeOperations from "../TradeOperations";

export default class Wallet extends PureComponent {
  render() {
    const { wallet: { coins } } = this.props;

    return (
      <div>
        <h2>Ваш счет</h2>
        {Object.keys(coins).map(key => {
          const digit = this.numberToFormatDigit(coins[key]);

          return (
            <div key={key} className="wallet">
              <div className="wallet-input">
                <span className="wallet-digit">{digit.integer}</span>.<span className="wallet-float">{digit.fraction}</span>
              </div>
              <p className="wallet-name">{key.toUpperCase()}</p>
            </div>
          )
        })}
        <TradeOperations/>
      </div>
    );
  }

  numberToFormatDigit = (digit) => {
    const tmp = Number.isInteger(digit) ? [digit, 0] : digit.toString().split('.');

    return {
      integer: tmp[0],
      fraction: tmp[1]
    }
  }
}
