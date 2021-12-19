import * as React from 'react';
import { Link } from 'react-router-dom';
import ButtonBase from '../component/button';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
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

const wrapperBoardList = {
    width: '100%',
};

const wrapperBtn = {
    width: '100%',
    margin: '10px 0',
};

const createRows = () => {
    const ls = localStorage;
    const rows: any[] = [];

    for (let i = 0, len = ls.length; i < len; i++) {
        const item = ls.getItem(String(i));

        if (item) {
            const row = JSON.parse(item);
            if (!row) continue;
            rows.push(row);
        }
    }

    return rows;
};

export default class BoardList extends React.Component<IBoardListProps, IBoardListState> {
    state = {
        rows: createRows(),
    };

    render() {
        const { rows } = this.state;

        return (
            <Container>
                <Box style={wrapperBoardList}>
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
                                        <TableCell>
                                            {/* path에 boardNum을 넣어주고 작성 페이지에서 해당 boardNum로 저장되어 있는 데이터를 보여준다 */}
                                            <Link to={`/write/${row.boardNum}`}>{row.title}</Link>
                                        </TableCell>
                                        <TableCell align="center" style={{ width: 100 }}>
                                            {row.writer}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
                <Box style={wrapperBtn}>
                    <Link to="/write/new">
                        <ButtonBase
                            id="new"
                            label="새로작성"
                            variant="contained"
                            color="primary"
                            startIcon={<CreateIcon />}
                        />
                    </Link>
                    <ButtonBase
                        id="delete"
                        label="삭제"
                        variant="contained"
                        startIcon={<DeleteIcon />}
                    />
                </Box>
            </Container>
        );
    }
}
