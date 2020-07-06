import React from 'react';
import Banner from './banner'
import Nav from './nav'
import Select from './select'
import HomeLover from './homeLover'
import '../../assets/style/home.less'
const Home = () => {
    return (
        <div className="container">
            <Banner/>
            <Nav/>
            <Select/>
            <HomeLover/>
        </div>
    );
}

export default Home;


