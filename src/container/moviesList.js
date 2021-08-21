import React, { Component } from 'react'
import NavBar from '../components/navBar/NavBar'
import SideBar from '../components/sideBar/SideBar'
import MoviesTable from '../components/moviesTable/moviesTable'
import Pagination from '../components/pagination/Pagination'
import './movieList.css'
import axios from 'axios'
import Loader from '../components/loader/Loader'
import { HandleGetMovies } from './dataManager'
import { connect } from 'react-redux'

 class MoviesList extends React.Component {
    constructor(props){
        super(props);
        this.state={
            search:'',
            pageNumber:1,
            rating:"all",
            genre:"all",
            data:[],
            loader:true,
            
        };
    }
    
    changeinput=(e)=>{
        this.setState({
            search:e.target.value,
            pageNumber:1
        })
        

    }
    changePage=(pagenumber)=>{
        if(pagenumber<1){
            pagenumber=1
        }
        if(pagenumber>4){
            pagenumber=4;
        }
        this.setState({
            pageNumber:pagenumber
        })
    }
    changeRating=(e)=>{
       
        this.setState({
            rating:e.target.value==="all"?"all":parseInt(e.target.value),
            pageNumber:1
        })
    }
    changeGenre=(genre)=>{
        this.setState({
            genre:genre==="All Genres"?"all":genre,

        })
    }
    async componentDidMount(){
            let data= await HandleGetMovies()
            this.setState({
                data:data,
                loader:false
            })
            // this.props.updateMovies(data)

    }
  

    PrevPage=(pagenumber)=>{
        this.setState({
            pageNumber:pagenumber
        })
    }
    render() {
      
        let page=this.state.pageNumber;
        
        let data=this.state.data;


            let filteredData=data.filter((movie)=>{
                if(this.state.genre!=="all"){
                    return movie.genre===this.state.genre;
                }
                if(this.state.rating!=="all"){
                    return movie.rating===this.state.rating
                }
                return true
            });

            
             filteredData=filteredData.filter((movie)=>{
               
                let movieName=movie.moviename.toLowerCase();
                let search=this.state.search.toLowerCase();
                let ans = movieName.includes(search);
                return ans;
            });
            let finalData=[];
            for(let i=(this.state.pageNumber-1)*5 ; i<(this.state.pageNumber*5) && i<filteredData.length;i++){
                finalData.push(filteredData[i]);
            }

        return (
            <div className="main-container">
                {this.state.loader===true?<Loader/>:""}
                <NavBar/>
                <SideBar changeGenre={this.changeGenre} />
                <div className="movie-container">
                <div className=".filter">
                <input type="text"   onChange={this.changeinput} value={this.state.search} className="movie-search" placeholder="Search for movies"/>
                
              
                <select name="" id="" className="rating-dropdown" onChange={this.changeRating}>
                    <option value="all">All Rating</option>
                    <option value="0">0 Rating</option>
                    <option value="1">1 Rating</option>
                    <option value="2">2 Rating</option>
                    <option value="3">3 Rating</option>
                    <option value="4">4 Rating</option>
                    <option value="5">5 Rating</option>
                </select>
                </div>
               
                <MoviesTable data={finalData}/>
                <Pagination totalMovies={filteredData.length} pno={page} changePage={this.changePage} nextPage={this.NextPage} prevPage={this.PrevPage}/>

                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        data: state.data
    }
}

const mapActionToProps = dispatch => {
    return {
        updateMovies: (data) => dispatch({type: "updateMovies", data: data})
    }
}
export default connect(mapStateToProps,mapActionToProps)(MoviesList)
