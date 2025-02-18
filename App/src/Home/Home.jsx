import React from 'react'
import { Hero } from './Hero'
import About from './About'
import MeetOurDevelopers from './MeetOurDev'
import Dashboard from './Dashoard'
import BecomeAContributor from './BecomeAContributor'

const Home = () => {
    return (
        <div className='px-16 py-3'>
            <Hero />
            <About />
            <MeetOurDevelopers />
            <Dashboard/>
            <BecomeAContributor/>
        </div>
    )
}

export default Home