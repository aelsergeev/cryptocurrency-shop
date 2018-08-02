import React, { PureComponent } from 'react';
import { LineChart } from 'react-easy-chart';
import moment from 'moment';
import './Graph.css';

const offsets = {
  '2h': '2ч',
  '4h': '4ч',
  '8h': '8ч',
  '1d': '1д',
  '7d': '7д'
};

export default class Graph extends PureComponent {
  render() {
    const { currency } = this.props;
    const { selected, offset } = currency;
    const data = currency[selected];

    if (!data.length) {
      return null;
    }

    const sell = data.map(val => ({ x: moment(val.mts).format('DD-MM HH:mm'), y: val.sell }));
    const purchase = data.map(val => ({ x: moment(val.mts).format('DD-MM HH:mm'), y: val.purchase }));

    return (
      <article>
        <h2>Окно графика</h2>
        <div className="graph-div">
          <div className="graph-buttons">
            {Object.keys(offsets).map(key => (
              <button
                key={key}
                className={`graph-button${offset === key ? '-selected' : ''}`}
                name={key}
                onClick={this.handleChangeGraph}
              >
                {offsets[key]}
              </button>
            ))}
          </div>
          <LineChart
            lineColors={['blue', 'red']}
            axes
            grid
            verticalGrid
            interpolate={'cardinal'}
            xType={'time'}
            datePattern={'%d-%m %H:%M'}
            width={750}
            height={400}
            style={{
              '.axis path': {
                stroke: '#EDF0F1'
              }
            }}
            data={[sell, purchase]}
          />
        </div>
      </article>
    );
  }

  handleChangeGraph = event => {
    this.props.selectOffset(event.target.name);
  };
}
