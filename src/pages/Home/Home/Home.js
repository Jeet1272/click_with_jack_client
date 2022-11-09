import React from 'react';
import Banner from '../Banner/Banner';
import RecentWork from '../RecentWork/RecentWork';
import Services from '../Services/Services';
import WorkWeapon from '../Weapon/WorkWeapon';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <RecentWork></RecentWork>
            <WorkWeapon></WorkWeapon>
        </div>
    );
};

export default Home;