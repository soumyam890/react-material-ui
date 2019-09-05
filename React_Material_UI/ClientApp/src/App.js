import React, { Component } from 'react'
import NavBar from './components/NavBar'
import CoursesList from './components/CourseList'


export default class App extends React.Component {

    render() {
        return (
            <div>
                <NavBar />
                <CoursesList />
            </div>
        )
    }
}