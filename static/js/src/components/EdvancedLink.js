// @flow

import React from 'react';
import { Link } from 'react-router';

type CompProps = {
    path?: string;
    children?: any
}

export default ({ path, children }: CompProps) => {
    return (
        <Link to={ path } >
            { children }
        </Link>
    )
}