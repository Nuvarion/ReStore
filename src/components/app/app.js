import React from 'react';

import Spinner from '../spinner';
import { withBookstoreService } from '../hoc';
import ErrorBoundry from '../error-boundry';
import BookstoreService from '../../services/bookstore-service';

import './app.css';

const App = ({ bookstoreService }) => {
    console.log(bookstoreService.getBooks());
    return (
        <div>App</div>
    );
};

export default withBookstoreService()(App);