import React from 'react';
import s from './Container.module.css';

import { IProps } from '../../interfaces/interfaces';

const Container: React.FC<IProps> = (props)=>
    (<div className={s.container}>
        {props.children}
    </div>);

    

export default Container;