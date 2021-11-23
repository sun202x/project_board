import React from 'react';
import { TextField } from '@material-ui/core';

interface IInputProps {
    id: string;
    label?: string;
    value?: string;
    rows?: number;
    margin?: any;
    dataName?: string;
    multiline?: boolean;
    fullWidth?: boolean;
    onChange?: Function;
}

export default function Input(props: IInputProps) {
    const handleChange = function (e: any) {
        props.onChange && props.onChange(e);
    };

    return (
        <TextField
            id={props.id}
            rows={props.rows}
            label={props.label}
            value={props.value}
            name={props.dataName}
            margin={props.margin}
            multiline={props.multiline}
            fullWidth={props.fullWidth}
            onChange={handleChange}
        ></TextField>
    );
}
