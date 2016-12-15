/**
 * Created by yura on 15.12.16.
 */

import React from 'react';
import { Link } from 'react-router';

export default ({ path, children }) => {
    return (
        <Link to={ path } >
            { children }
        </Link>
    )
}