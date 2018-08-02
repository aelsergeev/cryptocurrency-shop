import React, { PureComponent } from 'react';
import './Header.css';
import logo from './image/Logo-white.svg';
import HeaderButton from '../HeaderButton/HeaderButton';

export default class Header extends PureComponent {
  componentDidMount() {
    this.handleChooseCurrency(this.props.selected);
  }

  render() {
    const { email, coins, ethPrice, btcPrice, selected } = this.props;
    const buttons = [
      {
        name: 'btc',
        price: btcPrice,
        count: coins.btc
      },
      {
        name: 'eth',
        price: ethPrice,
        count: coins.eth
      }
    ];

    return (
      <header className="header">
        <div className="header-div">
          <img className="header-image" src={logo} alt="Logo" />
          <div className="header-buttons">
            {buttons.map(button => (
              <HeaderButton
                key={button.name}
                name={button.name}
                price={button.price}
                count={button.count}
                onChooseCurrency={this.handleChooseCurrency}
                disabled={selected === button.name}
              />
            ))}
          </div>
          <span>{email}</span>
        </div>
      </header>
    );
  }

  handleChooseCurrency = selected => {
    const { selectBtc, selectEth } = this.props;

    switch (selected) {
      case 'btc':
        selectBtc();
        return;
      case 'eth':
        selectEth();
        return;
      default:
        return;
    }
  };
}
