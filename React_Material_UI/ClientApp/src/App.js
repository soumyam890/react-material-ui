import React, { Component } from 'react'
import NavBar from './components/Layouts/NavBar'
import Posts from './components/Posts/Posts'
import { Route } from 'react-router';
import Home from './components/Home/Home';
import Counter from './components/Counter/Counter';
import FetchData from './components/WeatherForcast/FetchData';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'
import CoursesList from './components/Course/CourseList';


export default class App extends React.Component {

    render() {
        return (
            <div>
                <AppBar color="primary" position="static">
                    <Toolbar>
                        <TypoGraphy variant="title"
                            color="inherit">
                            Material UI Sample
                        </TypoGraphy>
                        <NavBar />
                    </Toolbar>
                </AppBar>
                <Route exact path='/' component={Home} />
                <Route path='/counter' component={Counter} />
                <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
                <Route path='/course' component={CoursesList} />
                <Route path='/posts' component={Posts} />
            </div>
        )
    }
}