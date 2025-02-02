import React from 'react';
import S from './style';
import LeftAreaContainer from './leftArea/LeftAreaContainer';
import ContentAreaContainer from './contentArea/ContentAreaContainer';

const MyPageContainer: React.FunctionComponent = (): JSX.Element => {
    
    return (
        <>
            <LeftAreaContainer />
            <ContentAreaContainer />
        </>
    );
};


export default MyPageContainer;