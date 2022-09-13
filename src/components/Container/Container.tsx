import React from 'react';
import s from './Container.module.css';

type Props = {
    children: JSX.Element | JSX.Element[],
  };

const Container: React.FC<Props> = ({children})=>
    (<div className='s.container'>
        {children}
    </div>);

    

export default Container;