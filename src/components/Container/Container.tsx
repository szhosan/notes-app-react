import React from 'react';

import { IProps } from '../../interfaces/interfaces';

const Container: React.FC<IProps> = (props) => (
  <div className='container lg mx-auto'>{props.children}</div>
);

export default Container;
