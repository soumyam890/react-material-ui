import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import { Home, Book, AccountBox, Assessment, Timeline, Assignment } from '@material-ui/icons'
import { Link } from 'react-router-dom';
import color from '@material-ui/core/colors/red';

function NavBar(props) {

    return (
        <List component="nav">
            <ListItem component="div" >

                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        <Link to="/" style={{ color: 'white', textDecoration: 'none' }} >Home </Link>  <Home />
                    </TypoGraphy>
                </ListItemText>


                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        <Link to="/posts" style={{ color: 'white', textDecoration: 'none' }}> Posts </Link>  <Book />
                    </TypoGraphy>
                </ListItemText>

                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        <Link to="/counter" style={{ color: 'white', textDecoration: 'none' }}> Counter </Link>  <Assessment />
                    </TypoGraphy>
                </ListItemText>

                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        <Link to="/fetch-data" style={{ color: 'white', textDecoration: 'none' }}> Weather Report </Link>  <Timeline />
                    </TypoGraphy>
                </ListItemText>

                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        <Link to="/course" style={{ color: 'white', textDecoration:'none' }}> Course </Link>  <Assignment />
                    </TypoGraphy>
                </ListItemText>

                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}> Contact Form </Link> <AccountBox />
                    </TypoGraphy>
                </ListItemText>
            </ListItem >

        </List>
    )
}


export default NavBar;
