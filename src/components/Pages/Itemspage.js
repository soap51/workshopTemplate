import Layouts from '../Layouts/Layouts';
import React from 'react';
import * as qs from 'query-string';
import {Jumbotron} from 'react-bootstrap';
const Itemspage = (props) => {
    const data = qs.parse(props.location.search);
    
    return(
    <Layouts>
        <Jumbotron className="container">
            <h1>{data.comment} from homepage</h1>
        </Jumbotron>
    </Layouts>
    )
}

export default Itemspage;