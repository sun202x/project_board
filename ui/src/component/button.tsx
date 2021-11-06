import React from 'react';
import { Button } from '@material-ui/core';

interface IButtonProps {
    label: string;
    variant?: any;
    color?: any;
    startIcon?: React.ReactNode;
};

const buttonStyle = {
    marginLeft: '10px',
};

export default function ButtonBase(props: IButtonProps) {
    return (
        <Button
            variant={props.variant}
            color={props.color}
            startIcon={props.startIcon}
            style={buttonStyle}
        >
            {props.label}
        </Button>
    );
}