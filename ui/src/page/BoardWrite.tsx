import * as React from 'react';
// icon
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import Input from '../component/Input';
import ButtonBase from '../component/button';
import { Box, Container } from '@material-ui/core';
import { v4 as uuid } from 'uuid';

// =============================================== Board =============================================== //
interface IBoardWriteFuncProps {}

interface IBoardWriteFuncState {}

const boxSize = {
    m: 1,
};

export default class BoardWrite extends React.Component<
    IBoardWriteFuncProps,
    IBoardWriteFuncState
> {
    state = {
        items: [],
        values: {
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
    };

    // this binding을 위해 classField 형태로 작성한다.
    handleChange = function (e: any) {
        const { name, value } = e.target;

        this.setState({
            values: {
                ...this.state.values,
                [name]: value,
            },
        });
    }.bind(this);

    handleSave = function (e: any) {
        debugger;
        const { values } = this.state;
        const ls = localStorage;
        const id = uuid();

        ls.setItem(id, JSON.stringify(values));
    }.bind(this);

    handleReWrite = function (e: any) {
        this.setState({
            values: {
                title: '',
                content: '',
            },
        });
    }.bind(this);

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
