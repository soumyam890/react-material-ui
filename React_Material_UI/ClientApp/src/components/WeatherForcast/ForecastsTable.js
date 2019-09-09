import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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

const ForecastsTable = (props) => {
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
                            return (
                                <TableRow hover>
                                    {columns.map(column => {
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

export default ForecastsTable;