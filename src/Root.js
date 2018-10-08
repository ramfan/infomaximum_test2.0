import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {Route, Switch} from 'react-router';
import MainPage from './components/Main/MainPage';
import {ThemeProvider} from 'react-fela';
import { Provider as FellaProvider } from 'react-fela';
import {createRenderer} from 'fela';
import {theme} from './utils/theme';

class Root extends Component {

    render() {
        const renderer = createRenderer();
        return(
            <Provider store={store}>
                <FellaProvider renderer={renderer}>
                    <ThemeProvider theme={theme}>
                        <MainPage/>
                    </ThemeProvider>
                </FellaProvider>
            </Provider>

        );
    }
}

export default Root;

