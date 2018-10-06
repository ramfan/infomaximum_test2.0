import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {Route, Switch} from 'react-router';
import MainPage from './components/Main/MainPage';

class Root extends Component {

    render() {
        return(
            <Provider store={store}>
                <MainPage/>
            </Provider>

        );
    }
}

export default Root;

