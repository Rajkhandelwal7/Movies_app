import "./App.css";
import React from "react";
import MoviesList from "./container/moviesList";
import { BrowserRouter } from "react-router-dom";
import Navigator from "./Navigator";

class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Navigator>
                        
                    </Navigator>
                </BrowserRouter>
                {/* <MoviesList/> */}
            </div>
        );
    }
}
export default App
