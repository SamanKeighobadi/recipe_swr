import React from 'react';
import Header from '../common/Header'

const MainLayout = ({children}) =>{
    return(
        <>
            <Header />
            {children}
        </>
    )
}

export default MainLayout;