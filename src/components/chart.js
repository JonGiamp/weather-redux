import React from 'react';
import _ from 'Lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const average = data => _.round(_.sum(data)/data.length);

export default (props) => {
  return (
    <div>
      <Sparklines height={80} width={140} data={ props.data }>
        <SparklinesLine color={ props.color } />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div className="data__average">{average(props.data)} {props.units}</div>
    </div>
  );
};
