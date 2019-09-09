import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../../store/Counter/Counter';
import styled, { ThemeProvider } from 'styled-components';
import NoSsr from '@material-ui/core/NoSsr';
import { makeStyles, createStyles, Theme, createMuiTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme();
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            margin: theme.spacing(1),
        }
    }),
);
const Counter = props => (
    <NoSsr>
        <ThemeProvider theme={theme}>
            <Box
                color="primary.main"
                bgcolor="background.paper"
                fontSize="fontSize"
                m="2rem"
                p="5rem"
                boxShadow={2}
            >
                <h1>Counter</h1>

                <p>This is a simple example of a React component.</p>

                <p>Current count: <strong>{props.count}</strong></p>

                <Button variant="contained" color="secondary" className={useStyles().button} onClick={props.increment}>
                    Increment
      </Button>
            </Box>
        </ThemeProvider>
    </NoSsr>
);

export default connect(
    state => state.counter,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Counter);
