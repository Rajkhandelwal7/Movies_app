import React from 'react';
import Rating from '../ratings/Ratings';
import "./movieTableRow.css";

class MoviesTableRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let { sno, moviename, genre, rating } = this.props.data;
        return (
            <div className="movies-table-row" style={this.props.header ? { backgroundColor:"#c0392b",fontFamily:"Staatliches",color:"#fff"} : {}}>
                <div className="column serial-number">{sno + "."}</div>
                <div className="column movie-name">{moviename}</div>
                <div className="column genre">{genre}</div>
                <div className="column rating">{this.props.header ? rating : <Rating rating={rating} />} </div>
            </div>
        )
    }
}

export default MoviesTableRow;