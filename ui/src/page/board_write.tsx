// css
import { Box, Button, Container, TextField } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
// icon
import SaveIcon from '@material-ui/icons/Save';
import * as React from 'react';

// =============================================== Input =============================================== //
type IInputProps = {
    id?: string;
    label?: string;
    rows?: number;
    margin?: any;
    dataName?: string;
    multiline?: boolean;
    fullWidth?: boolean;
    onChange?: Function;
};

function Input(props: IInputProps) {
    const handleChange = function (e: any) {
        props.onChange(e);
    };

    return (
        <TextField
            id={props.id}
            rows={props.rows}
            label={props.label}
            name={props.dataName}
            margin={props.margin}
            multiline={props.multiline}
            fullWidth={props.fullWidth}
            onChange={handleChange}
        ></TextField>
    );
}

// =============================================== Button =============================================== //
type IButtonProps = {
    label: string;
    variant?: any;
    color?: any;
    startIcon?: React.ReactNode;
};

function ButtonDefault(props: IButtonProps) {
    return (
        <Button
            variant={props.variant}
            color={props.color}
            startIcon={props.startIcon}
            style={{
                marginLeft: '10px',
            }}
        >
            {props.label}
        </Button>
    );
}

// =============================================== Board =============================================== //
type BoardWriteFuncProps = {
    data?: object;
};

export default function BoardWrite(data: BoardWriteFuncProps) {
    const handleChange = function (e: any) {
        const { name, value } = e.target;
        console.log(name, value);
    };

    return (
        <Container>
            <Box
                sx={{
                    m: 1,
                }}
            >
                <div>
                    <Input
                        fullWidth={true}
                        margin="normal"
                        id="boardTitle"
                        label="??????"
                        dataName="title"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <Input
                        fullWidth
                        margin="normal"
                        id="boardContent"
                        label="??????"
                        rows={10}
                        multiline={true}
                        dataName="content"
                        onChange={handleChange}
                    />
                </div>
            </Box>
            <Box
                sx={{
                    m: 1,
                }}
            >
                <ButtonDefault
                    label="??????"
                    variant="contained"
                    color="primary"
                    startIcon={<SaveIcon />}
                />
                <ButtonDefault label="????????????" variant="contained" startIcon={<EditIcon />} />
            </Box>
        </Container>
    );
}
