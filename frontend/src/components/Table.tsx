import React from 'react';
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
} from '@material-ui/core';
import { LocationOn, Schedule, DirectionsBus } from '@material-ui/icons';

const data = [
	{ station: 'Estación A', location: 'Calle 1', time: '10:00am', bus: 'Bus 1' },
	{ station: 'Estación B', location: 'Calle 2', time: '11:00am', bus: 'Bus 2' },
	{ station: 'Estación C', location: 'Calle 3', time: '12:00pm', bus: 'Bus 3' },
	{ station: 'Estación C', location: 'Calle 3', time: '12:00pm', bus: 'Bus 3' },
	{ station: 'Estación C', location: 'Calle 3', time: '12:00pm', bus: 'Bus 3' },
	{ station: 'Estación C', location: 'Calle 3', time: '12:00pm', bus: 'Bus 3' },
];

const AdminPanel = () => {
	return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Estación</TableCell>
                        <TableCell>Ubicación</TableCell>
                        <TableCell>Hora</TableCell>
                        <TableCell>Bus</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row">
                                {row.station}
                            </TableCell>
                            <TableCell>
                                <LocationOn />
                                {row.location}
                            </TableCell>
                            <TableCell>
                                <Schedule />
                                {row.time}
                            </TableCell>
                            <TableCell>
                                <DirectionsBus />
                                {row.bus}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
	);
};

export default AdminPanel;