import React, { Component } from 'react'

export default class Ratings extends Component {
    render() {
        let ratingarr=[
            <img src="https://img.icons8.com/color/28/000000/star--v1.png" alt="empty-star" />,
            <img src="https://img.icons8.com/color/28/000000/star--v1.png" alt="empty-star" />,
            <img src="https://img.icons8.com/color/28/000000/star--v1.png" alt="empty-star" />,
            <img src="https://img.icons8.com/color/28/000000/star--v1.png" alt="empty-star" />,
            <img src="https://img.icons8.com/color/28/000000/star--v1.png" alt="empty-star" />
        ]
        for(let i=0;i<this.props.rating;i++){
            ratingarr[i]=  <img src="https://img.icons8.com/fluent/28/000000/star.png" alt="rated-star" />
        }
        return (
            <div>
                {ratingarr}
            </div>
        )
    }
}
