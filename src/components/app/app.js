import React from 'react';

import Spinner from '../spinner';
import ErrorBoundry from '../error-boundry';

import './app.css';

const App = () => {
    return (
        <ErrorBoundry>
            <Spinner />
        </ErrorBoundry>
    );
};

export default App;