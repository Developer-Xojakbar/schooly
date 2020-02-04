import React from 'react';
import Header from './Header';
import Aside from './Aside';
import Main from './Main';

const App = () => {
    return (
        <React.Fragment>
            <Header />
            <Aside />
            <Main />
        </React.Fragment>
    );
};

export default App;
