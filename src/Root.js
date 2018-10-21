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
import Participant from './components/Dashboard/Participant';
import CreateCommand from './components/Command/Command';

class Root extends Component {
    render() {
        const renderer = createRenderer();
        const navProp = {
            participant: {
                path: '/dashParticipant',
                description: 'Создать ...',
            },
        };
        const WrappedNavParticipant = props => (<Nav {...props} path={'/command/create'} description={'Создать ...'}/>);
        const WrappedNavCreate = props => (<Nav {...props} path={'/event/create'} description={'Создать событие'}/>);
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
                                        <Route path='/event/create' component={WrappedNavCreate}/>
                                        <Route path='/dashSys' component={WrappedNavCreate}/>
                                        <Route path='/event/profile' component={WrappedNavCreate}/>
                                        <Route path='/dashParticipant' component={WrappedNavParticipant}/>
                                        <Route path='/command/create' component={WrappedNavParticipant}/>
                                    </Switch>
                                } right={
                                    <Switch>
                                        <Route path='/event' component={CreateEvent}/>
                                        <Route path='/dashSys' component={System}/>
                                        <Route path='/dashParticipant' component={Participant}/>
                                        <Route path='/command/create' component={CreateCommand}/>
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
