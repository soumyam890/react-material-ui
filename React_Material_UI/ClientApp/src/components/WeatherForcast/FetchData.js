import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../../store/WeatherForecasts/WeatherForecasts';
import Box from '@material-ui/core/Box';
import TypoGraphy from '@material-ui/core/Typography'
import ForecastsTable from './ForecastsTable';
import ForecastsTablePagination from './ForecastsTablePagination';

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
                <ForecastsTable forecasts={this.props.forecasts} />
                <ForecastsTablePagination startDateIndex={this.props.startDateIndex} />
            </Box>
        );
    }
}

export default connect(
    state => state.weatherForecasts,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(FetchData);
