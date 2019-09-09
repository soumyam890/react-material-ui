import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../../store/WeatherForecasts/WeatherForecasts';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Box from '@material-ui/core/Box';
import TypoGraphy from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';


const columns = [
    { id: 'dateFormatted', label: 'Date', minWidth: 30 },
    {
        id: 'temperatureC',
        label: 'Temp. (C)',
        minWidth: 20,
        align: 'left',
    },
    {
        id: 'temperatureF',
        label: 'Temp. (F)',
        minWidth: 20,
        align: 'left',
    },
    {
        id: 'summary',
        label: 'Summary',
        minWidth: 30,
    },
];


class FetchData extends Component {


    componentDidMount() {
        // This method is called when the component is first added to the document
        this.ensureDataFetched();
    }

    componentDidUpdate() {
        // This method is called when the route parameters change
        this.ensureDataFetched();
    }

    ensureDataFetched() {
        const startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestWeatherForecasts(startDateIndex);
    }

    render() {
        return (
            <Box
                color="primary.main"
                bgcolor="background.paper"
                fontSize="fontSize"
                m="2rem"
                p="1rem"
                boxShadow={2}
            >   <TypoGraphy variant="h4" color="inherit">
                    Weather forecast
                        </TypoGraphy>

                <TypoGraphy variant="body1" color="inherit">
                    This component demonstrates fetching data from the server and working with URL parameters.
                </TypoGraphy>
                {renderForecastsTable(this.props)}
                {renderPagination(this.props)}
            </Box>
        );
    }
}
function renderForecastsTable(props) {
    return (
        <Paper style={{ width: '100%' }}>
            <div style={{ maxHeight: '407', overflow: 'auto' }}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            {columns.map(column => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.forecasts.map(row => {
                            console.log(props.forecasts)
                            return (
                                <TableRow hover>
                                    {columns.map(column => {
                                        console.log(columns)
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </div>
        </Paper>
    );
}

function renderPagination(props) {
    const prevStartDateIndex = (props.startDateIndex || 0) - 5;
    const nextStartDateIndex = (props.startDateIndex || 0) + 5;

    return <p className='clearfix text-center'>
        <Button variant="contained" color="primary" style={{ marginTop:'2rem', marginRight:'2rem' }} onClick={props.increment}>
            <Link to={`/fetch-data/${prevStartDateIndex}`} style={{ color: 'white',textDecoration:'none' }}>Previous</Link>
        </Button>
        <Button variant="contained" color="primary" style={{ marginTop: '2rem' }} onClick={props.increment}>
            <Link to={`/fetch-data/${nextStartDateIndex}`} style={{ color: 'white', textDecoration: 'none' }}>Next</Link>
        </Button>
        {props.isLoading ? <span>Loading...</span> : []}
    </p>;
}

export default connect(
    state => state.weatherForecasts,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(FetchData);
