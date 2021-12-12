import React from 'react';
import { Button } from '@material-ui/core';

interface IButtonProps {
    id: string;
    label: string;
    variant?: any;
    color?: any;
    startIcon?: React.ReactNode;
    onClick?: Function;
}

const buttonStyle = {
    marginLeft: '10px',
};

export default function ButtonBase(props: IButtonProps) {
    const handleClick = function (e: any) {
        props.onClick?.(e);
    };

    return (
        <Button
            id={props.id}
            variant={props.variant}
            color={props.color}
            startIcon={props.startIcon}
            style={buttonStyle}
            onClick={handleClick}
        >
            {props.label}
        </Button>
    );
}
