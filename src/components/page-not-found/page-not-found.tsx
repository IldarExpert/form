import React from 'react';
import {Colored, FlexCentered} from './page-not-found.styled';

const PageNotFound = () => {
    return (
        <FlexCentered>
            Page not found. Please, go to&nbsp;<Colored to={'/'}>Main</Colored>&nbsp;page
        </FlexCentered>
    );
};

export default PageNotFound;
