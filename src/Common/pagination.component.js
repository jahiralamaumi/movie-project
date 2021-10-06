import React, { Component } from 'react';
import _ from 'lodash';

class Pagination extends Component {
    state = {  }
    render() { 

        const {totalItems, pageCount, activePage, onClickPage} = this.props;
        const totalPages = Math.ceil(totalItems/pageCount)+1;

        const pages = _.range(1, totalPages, 1);

        if(totalItems <= pageCount) return null;

        return ( 
            <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li 
                            onClick= {() => activePage-1 >=1? onClickPage(activePage-1) : null}
                        style={{cursor: 'pointer'}} class="page-item">
                            <a class="page-link" href="#">
                                Previous
                            </a>
                        </li>
                        {pages.map(page => (
                        <li style={{cursor: 'pointer'}} class={activePage === page? "page-item active" : 'page-item'}
                            onClick = {() => onClickPage(page)}
                        >
                            <a class= "page-link">{page}</a>
                        </li>
                        ))}

                        <li 
                        onClick={() => activePage+1 <= totalPages-1? onClickPage(activePage+1) : null}
                        style={{cursor: 'pointer'}} class="page-item">
                            <a class="page-link" href="#">
                                Next
                            </a>
                        </li>
                    </ul>
                </nav>
         );
    }
}
 
export default Pagination;