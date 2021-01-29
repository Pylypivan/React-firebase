import React from 'react';
import Header from '../component/header/header';
import Footer from '../component/footer/footer';



const HomePageLayout = props => {
    return (
        <div className = 'fullHeight'>
            <Header {...props} />
            {props.children}
            <Footer />
        </div>
    )
}

export default HomePageLayout;