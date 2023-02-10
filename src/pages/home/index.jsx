import React from 'react'
import BannerDev from './component/BannerDev'
import Section_whoWork from './component/Sections_whoWok/index'
const Home_ui = () => {
    return <>
        <BannerDev />
        {/* <div style={{backgroundColor:'grey'}}> Baner de prueba </div> */}
        <Section_whoWork />
        {/* <Section_Without_Junior />
        <Section_agenda />
        <Footer_Dev /> */}
    </>
}


export default Home_ui