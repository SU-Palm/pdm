import React, { Component } from "react";

import BookList from "./BookList";
import StoreList from "./StoreList";

class Dashboard extends Component {
    render() {
        return(
            <div>
                <div class="items-start">
                    <BookList/> 
                </div>
                <div class="items-start">
                    <StoreList/>
                </div>
                
            </div>
        );
    }
}

export default Dashboard;