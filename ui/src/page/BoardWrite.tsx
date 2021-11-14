import * as React from 'react';
// icon
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import Input from '../component/Input';
import ButtonBase from '../component/button';
import { Box, Container } from '@material-ui/core';

// =============================================== Board =============================================== //
interface IBoardWriteProps {}

interface IContents {
    titleField: any;
    contentField: any;
    baseField?: any;
}
interface IButton {
    id: string;
    label: string;
    variant?: 'text' | 'outlined' | 'contained';
    color?: any;
    startIcon?: React.ReactNode;
    margin?: string;
}
interface IBoardWriteState {
    items: any[];
    values: any;
    contents: IContents;
    footer: {
        saveButton: IButton;
        reWriteButton: IButton;
    };
    // aaa: (string | number)[];
}

const boxSize = {
    m: 1,
};

export default class BoardWrite extends React.Component<IBoardWriteProps, IBoardWriteState> {
    state = {
        // aaa: ["1", "1", "2", 1111],
        items: [],
        values: {
            boardNum: '0',
            title: '',
            content: '',
        },
        contents: {
            titleField: {
                id: 'boardTitle',
                label: '제목',
                dataName: 'title',
                fullWidth: true,
                margin: 'normal',
            },
            contentField: {
                id: 'boardContent',
                label: '내용',
                dataName: 'content',
                rows: 10,
                multiline: true,
                fullWidth: true,
                margin: 'normal',
            },
        },
        footer: {
            saveButton: {
                id: 'save',
                label: '저장',
                variant: 'contained',
                color: 'primary',
                startIcon: <SaveIcon />,
            },
            reWriteButton: {
                id: 'reWrite',
                label: '다시작성',
                variant: 'contained',
                startIcon: <EditIcon />,
            },
        },
    } as IBoardWriteState;

    // this binding을 위해 classField 형태로 작성한다.
    handleChange = (e: any) => {
        const { name, value } = e.target;

        this.setState({
            values: {
                ...this.state.values,
                [name]: value,
            },
        });
    };

    updateBoardNum = () => {
        this.state.values.boardNum++;
    };

    handleSave = (e: any) => {
        debugger;
        const { values } = this.state;
        const ls = localStorage;

        ls.setItem(values.boardNum, JSON.stringify(values));

        this.setState(
            {
                values: {
                    boardNum: values.boardNum,
                    title: '',
                    content: '',
                },
            },
            () => {
                this.updateBoardNum();
            },
        );
    };

    handleReWrite = (e: any) => {
        this.setState({
            values: {
                title: '',
                content: '',
            },
        });
    };

    render() {
        const { title, content } = this.state.values;
        const { titleField, contentField } = this.state.contents;
        const { saveButton, reWriteButton } = this.state.footer;

        return (
            <Container>
                <Box sx={boxSize}>
                    <div>
                        <Input
                            id={titleField.id}
                            value={title}
                            label={titleField.label}
                            dataName={titleField.dataName}
                            fullWidth={titleField.fullWidth}
                            margin={titleField.margin}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <Input
                            id={contentField.id}
                            value={content}
                            label={contentField.label}
                            rows={contentField.rows}
                            multiline={contentField.multiline}
                            dataName={contentField.dataName}
                            fullWidth={contentField.fullWidth}
                            margin={contentField.margin}
                            onChange={this.handleChange}
                        />
                    </div>
                </Box>
                <Box sx={boxSize}>
                    <ButtonBase
                        id={saveButton.id}
                        label={saveButton.label}
                        variant={saveButton.variant}
                        color={saveButton.color}
                        startIcon={saveButton.startIcon}
                        onClick={this.handleSave}
                    />
                    <ButtonBase
                        id={reWriteButton.id}
                        label={reWriteButton.label}
                        variant={reWriteButton.variant}
                        startIcon={reWriteButton.startIcon}
                        onClick={this.handleReWrite}
                    />
                </Box>
            </Container>
        );
    }
}
