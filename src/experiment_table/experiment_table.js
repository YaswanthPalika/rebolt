import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Chip } from '@mui/material';
import { HelpOutline } from '@mui/icons-material';

export default function Experiment_table() {
    return (
        <>
        <Chip icon={<HelpOutline />} label="Only latest experiments will be shown here" />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Experiment name</TableCell>
                            <TableCell align="left">createdAt</TableCell>
                            <TableCell align="left">project name</TableCell>
                            <TableCell align="left">status</TableCell>
                            <TableCell align="left">Output</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                  
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="left"></TableCell>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
