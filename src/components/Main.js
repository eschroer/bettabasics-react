import React from 'react'
import Navbar from './Navbar'
import './Style.css'
import AccordionComponent from './Accordion';
import CarouselComponent from './Carousel'
import Instructions from './Instructions';
import PlantCards from './Cards';
import Footer from './Footer';
import Questions from './Questions';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

function Main() {
    return (
        <>
        <Navbar/>
        <Switch>
            <Route path='/home'>
            <AccordionComponent/>
            </Route>
            <Route path='/aquarium'>
            <CarouselComponent/>
            <Instructions />
            </Route>
            <Route path='/plants'>
            <PlantCards/>
            </Route>
            <Route path='/faq'>
                <Questions />
            </Route>
            <Redirect to='/home'/>
        </Switch>    
        <Footer/>
        </>
    )
}

export default withRouter(Main)
