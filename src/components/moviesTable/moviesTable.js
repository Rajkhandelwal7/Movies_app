import React, { Component } from 'react'
import MoviesTableRow from '../movieTableRow/MovieTableRow';
import './moviesTable.css'

export default class MoviesTable extends Component {
    render() {
        let data=this.props.data
        let header={
            sno:"S.no",
            moviename:"Movie name",
            genre:"Genre",
            rating:"Rating"
        }
        let rows=[];
        for(let i of data){
            rows.push(<MoviesTableRow  data={i}/>)
        }
        return (
            <div className="movies-table">
                <MoviesTableRow data={header} header={true}/>
                {rows}
            </div>
        )
    }
}
