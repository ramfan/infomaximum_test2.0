/* eslint-disable import/no-duplicates */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'react-fela';
import { Provider as FellaProvider } from 'react-fela';
import { createRenderer } from 'fela';
import MainPage from './containers/Main/MainPage';
import store from './store';
import { theme } from './utils/theme';
import Auth from './containers/Auth/Auth';
import DashBoardLayout from './containers/Dashboard/DashBoardLayout';

class Root extends Component {
    render() {
        const renderer = createRenderer();
        return (
            <Provider store={store}>
                <FellaProvider renderer={renderer}>
                    <ThemeProvider theme={theme}>
                        <BrowserRouter>
                            <Switch>
                                <Route exact path='/' component={MainPage}/>
                                <Route path='/auth' component={Auth}/>
                                <Route path='/dashSys' component={DashBoardLayout}/>
                            </Switch>
                        </BrowserRouter>
                    </ThemeProvider>
                </FellaProvider>
            </Provider>

        );
    }
}

export default Root;
