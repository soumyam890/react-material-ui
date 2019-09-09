import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const ForecastsTablePagination = (props) => {
    const prevStartDateIndex = (props.startDateIndex || 0) - 5;
    const nextStartDateIndex = (props.startDateIndex || 0) + 5;

    return <p className='clearfix text-center'>
        <Button variant="contained" color="primary" style={{ marginTop: '2rem', marginRight: '2rem' }} onClick={props.increment}>
            <Link to={`/fetch-data/${prevStartDateIndex}`} style={{ color: 'white', textDecoration: 'none' }}>Previous</Link>
        </Button>
        <Button variant="contained" color="primary" style={{ marginTop: '2rem' }} onClick={props.increment}>
            <Link to={`/fetch-data/${nextStartDateIndex}`} style={{ color: 'white', textDecoration: 'none' }}>Next</Link>
        </Button>
        {props.isLoading ? <span>Loading...</span> : []}
    </p>;
}

export default ForecastsTablePagination;