import * as React from 'react';
import { Box, Container } from '@material-ui/core';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

// =============================================== Board =============================================== //
interface IBoardListProps {}

interface IBoardListState {
    rows: any[];
}

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 130 },
    { field: 'title', headerName: 'Title', width: 130 },
    { field: 'content', headerName: 'Content', width: 200 },
];

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
            row.id = i;
            rows.push(row);
        }

        return rows;
    };

    render() {
        const { rows } = this.state;

        console.log(this.state);

        return (
            <Container>
                <Box style={boxStyle}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                </Box>
            </Container>
        );
    }
}
