import React, { PureComponent } from 'react';
import moment from 'moment';
import './Transactions.css';

export default class Transactions extends PureComponent {
  render() {
    const { transactions, selected } = this.props;

    return (
      <article>
        <table className="transaction-table">
          <thead>
            <tr>
              <th>Операция</th>
              <th>Дата</th>
              <th className="transaction-left">{selected.toUpperCase()}</th>
              <th className="transaction-left">USD</th>
            </tr>
          </thead>
          <tbody>
            {transactions.records.map(transaction => {
              if (!transaction[`${selected}_delta`]) return null;

              const { usd_delta, [`${selected}_delta`]: delta, created_at, id } = transaction;

              return (
                <tr key={id}>
                  <td>{delta > 0 ? 'Покупка' : 'Продажа'}</td>
                  <td>{moment(created_at).format('DD.MM.YYYY HH:mm')}</td>
                  <td className="transaction-left">{parseInt(delta, 10)}</td>
                  <td className="transaction-left">{usd_delta}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </article>
    );
  }
}
