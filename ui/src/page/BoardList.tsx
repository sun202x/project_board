import * as React from 'react';
import { Box, Container } from '@material-ui/core';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// =============================================== Board =============================================== //
interface IBoardListProps {}

interface IBoardListState {
    rows: any[];
}

const boxStyle = {
    width: '100%',
    height: 500,
};

export default class BoardList extends React.Component<IBoardListProps, IBoardListState> {
    constructor(props) {
        super(props);
        this.state = {
            rows: this.createRows(),
        };
    }

    createRows = () => {
        const ls = localStorage;
        const rows = [];

        for (let i = 0, len = ls.length; i < len; i++) {
            const row = JSON.parse(ls.getItem(String(i)));
            if (!row) continue;
            rows.push(row);
        }

        return rows;
    };

    render() {
        const { rows } = this.state;

        return (
            <Container>
                <Box style={boxStyle}>
                    <TableContainer>
                        <Table sx={{ minWidth: 400 }} aria-label="list">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">번호</TableCell>
                                    <TableCell align="center">제목</TableCell>
                                    <TableCell align="center">작성자</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row, idx) => (
                                    <TableRow key={row.id}>
                                        <TableCell align="center" style={{ width: 30 }}>
                                            {idx}
                                        </TableCell>
                                        <TableCell>{row.title}</TableCell>
                                        <TableCell align="center" style={{ width: 100 }}>
                                            {row.writer}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Container>
        );
    }
}
