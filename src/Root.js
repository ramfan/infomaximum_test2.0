import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {Route, Router, Switch} from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import MainPage from './containers/Main/MainPage';
import {ThemeProvider} from 'react-fela';
import { Provider as FellaProvider } from 'react-fela';
import {createRenderer} from 'fela';
import {theme} from './utils/theme';
import Auth from './containers/Auth/Auth';

class Root extends Component {

    render() {
        const renderer = createRenderer();
        return(
            <Provider store={store}>
                <FellaProvider renderer={renderer}>
                    <ThemeProvider theme={theme}>
                        <BrowserRouter>
                            <Switch>
                                <Route exact path='/' component={MainPage}/>
                                <Route path='/auth' component={Auth}/>
                            </Switch>
                        </BrowserRouter>
                    </ThemeProvider>
                </FellaProvider>
            </Provider>

        );
    }
}

export default Root;

