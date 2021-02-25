import React, { useState, useEffect } from "react";


const MovieList = (props) => {

    const { original_title } = props;


    return (
        <div>
            {original_title}
        </div>
    )
}

export default MovieList; 