import React from "react";
import { Link } from 'react-router-dom';

import CardLayout from '../common/CardLayout';

const SearchList = (props) => {

    return (
        <Link to={`/${props.media_type}/${props.id}`}>
            <CardLayout {...props} />
        </Link>
    );
}

export default SearchList; 