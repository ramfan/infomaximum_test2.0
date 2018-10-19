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
import Layout from './components/Layout';
import CreateEvent from './components/Event/CreateEvent';
import System from './components/Dashboard/System';
import Nav from './components/Navigate/Nav';

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
                                {/* <Route path='/createEvent' component={CreateEvent}/> */}
                                <Layout left={
                                    <Switch>
                                        <Route path='/event/create' component={Nav}/>
                                        <Route path='/dashSys' component={Nav}/>
                                        <Route path='/event/profile' component={Nav}/>
                                    </Switch>
                                } right={
                                    <Switch>
                                        <Route path='/event' component={CreateEvent}/>
                                        <Route path='/dashSys' component={System}/>
                                    </Switch>
                                }/>
                            </Switch>
                        </BrowserRouter>
                    </ThemeProvider>
                </FellaProvider>
            </Provider>

        );
    }
}

export default Root;
