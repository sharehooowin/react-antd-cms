import React from 'react';
import ReactDOM from 'react-dom';
import MainLayout from './components/MainLayout/MainLayout';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import styles from './index.module.css';
import {routes} from './route.js';
import PageNotFound from './components/PageNotFound/PageNotFound';

let renderRoute = (item,index)=>{

    return(
        <Route key={index} path={item.url} component={item.component}/>
    );

};

ReactDOM.render(
    <div className={styles.container}>
        <Router>
            <Switch>
                {routes.map(renderRoute)}
                <Route component={PageNotFound}/>
            </Switch>
        </Router>
    </div>
    , document.getElementById('root'));

