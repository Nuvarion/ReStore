import React from 'react';
import { BookctoreServiceConsumer } from '../bookstore-service-context';

const withBookstoreService = (Wrapped) => {

    return (props) => {
        return (
            <BookctoreServiceConsumer>{
                (bookstoreService) => {
                   return (<Wrapped {...props}
                                    bookstoreService={bookstoreService} />);
                }
            }</BookctoreServiceConsumer>
        );
    }
};

export default withBookstoreService;