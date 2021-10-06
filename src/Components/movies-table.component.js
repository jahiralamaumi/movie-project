import React from "react";
import Table from "../Common/table.component";

const MoviesTable = ({ movies, onSort, sortColumn }) => {

    const columns = [
        { path: 'posterurl', label: 'Poster', content: item =>  
        <img 
            style={{ width: "40px", height: "auto", }} 
            src={item.posterurl} 
        /> 
    },
        { path: 'title', label: 'Title', content: item => item.title },
        { path: 'imdbRating', label: 'Rating', content: item => item.imdbRating},
        { path: 'your_rating', label: 'Your Rating', content: item => item.your_rating ? ( <i class="bi bi-star-fill"></i> ) : ( <i class="bi bi-star"></i> )}
    ]

    return (
        <Table 
            items= { movies }
            columns = { columns }
            onSort = {onSort}
            sortColumn = {sortColumn}
        />
    );
};

export default MoviesTable;
