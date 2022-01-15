import React from "react";
import CreateStore from "./components/Store/CreateStore";
import Nav from "./components/NavBar"
import CreateBook from "./components/Book/CreateBook";
import BookList from "./components/Dashboard/BookList";
import StoreList from "./components/Dashboard/StoreList";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from "./components/Dashboard/Dashboard";
import ViewStore from "./components/Store/ViewStore";

const App = () => {
    return (
        <React.Fragment>
        <Nav />
        <BrowserRouter>
            <Switch>
                <Route path="/book/create/:id" component={CreateBook}/>
                <Route path="/books" component={BookList} />
                <Route path="/store/create" component={CreateStore} />
                <Route path="/stores" component={StoreList} />
                <Route path="/store/:id" component={ViewStore} />
                <Route path="/" component={Dashboard} />
            </Switch>
        </BrowserRouter>
        </React.Fragment>
    )
};

export default App;