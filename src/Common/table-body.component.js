import React, { Component } from "react";


const TableBody = ({ columns, items, onSort }) => {
    
       
    return (
        <tbody>
            {items.map((item, idx) => (
                <tr>
                    
                    {
                        columns.map(column => <td>{column.content(item)}</td>)
                    }
                    
                    {/* <td>
                        <img
                            style={{
                                width: "40px",
                                height: "auto",
                            }}
                            src={item.posterurl}
                        />
                    </td>
                    
                    <td>
                        <i class="bi bi-star"></i> {item.imdbRating}
                    </td>
                    <td>
                        {item.your_rating ? (
                            <i class="bi bi-star-fill"></i>
                        ) : (
                            <i class="bi bi-star"></i>
                        )}
                    </td> */}
                </tr>
            ))}
        </tbody>
    );
};

export default TableBody;
