import React, { Component } from 'react'
import './Pagination.css'

export default class Pagination extends Component {
    render() {
        var temp;
        var temp=''
        let prevpage=[];
        let paginNationButton=[];
        let numberOfPages=Math.ceil(this.props.totalMovies/5);
        // console.log(numberOfPages);

        for(let i=0;i<numberOfPages;i++){
            // temp=i+1;
            // console.log(temp);
            paginNationButton.push(<div className="pagination-button" onClick={()=>{
                this.props.changePage(i+1);
            }}>{i+1}</div>)
        }
        return (
            <div className="pagination">
             <div className="pagination-button prev-btn" onClick={()=>{
                 this.props.changePage(this.props.pno-1);
             }}> Prev</div>
              {paginNationButton}
              <div className="pagination-button next-btn" onClick={()=>{
                  this.props.changePage(this.props.pno+1);
              }}>Next</div>
            </div>
        )
    }
}
