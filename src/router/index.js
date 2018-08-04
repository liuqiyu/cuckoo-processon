import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

const loadingComponent = ({ isLoading, error }) => {
    // Handle the loading state
    if (isLoading) {
        return <span className="loading">123</span>
    }
    // Handle the error state
    else if (error) {
        return <div>Sorry, there was a problem loading the page.</div>;
    }
    else {
        return null;
    }
};

const Index = Loadable({
    loader: () => import('./../views/index/index'),
    loading: loadingComponent
});

const Monitor = Loadable({
    loader: () => import('../views/monitor/monitor'),
    loading: loadingComponent
});

const route = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' component={Index} exact></Route>
                <Route path='/monitor' component={Monitor}></Route>
            </Switch>
        </Router>
    )
};

export default route;