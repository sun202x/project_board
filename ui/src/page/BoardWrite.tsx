import * as React from 'react';

// ui
import Input from '../component/Input';
import ButtonBase from '../component/button';
import { Box, Container, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';

// icon
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import ListIcon from '@material-ui/icons/List';

// =============================================== Board =============================================== //
interface IBoardWriteProps {
    match: any;
}

interface IContents {
    titleField: any;
    contentField: any;
    writerField: any;
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
    values: {
        boardNum?: number;
        title: string;
        content: string;
        writer: string;
    };
    contents: IContents;
    footer: {
        saveButton: IButton;
        reWriteButton: IButton;
        backToTheListButton: IButton;
    };
    // aaa: (string | number)[];
}

const boxSize = {
    m: 1,
};

const btnBoxStyle = {
    m: 1,
    display: 'flex',
};

export default class BoardWrite extends React.Component<IBoardWriteProps, IBoardWriteState> {
    constructor(props) {
        super(props);
        const boardNum = localStorage.length;

        this.state = {
            // aaa: ["1", "1", "2", 1111],
            items: [],
            values: {
                boardNum,
                title: '',
                content: '',
                writer: '',
            },
            contents: {
                titleField: {
                    id: 'boardTitle',
                    label: '제목',
                    dataName: 'title',
                    fullWidth: true,
                    margin: 'normal',
                },
                writerField: {
                    id: 'boardWriter',
                    label: '작성자',
                    dataName: 'writer',
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
                backToTheListButton: {
                    id: 'back',
                    label: '목록으로',
                    variant: 'contained',
                    startIcon: <ListIcon />,
                },
            },
        };
    }

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
        this.setState({
            values: {
                ...this.state.values,
                boardNum: this.state.values.boardNum + 1,
            },
        });
    };

    handleSave = (e: any) => {
        const { values } = this.state;
        const ls = localStorage;

        // 제목, 내용, 작성자중 하나라도 없으면 저장하지 않는다
        if (!values.title || !values.content || !values.writer) return;

        ls.setItem(String(values.boardNum), JSON.stringify(values));

        this.setState(
            {
                values: {
                    boardNum: values.boardNum,
                    title: '',
                    content: '',
                    writer: '',
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
                writer: '',
            },
        });
    };

    render() {
        const { title, content, writer } = this.state.values;
        const { titleField, contentField, writerField } = this.state.contents;
        const { saveButton, reWriteButton, backToTheListButton } = this.state.footer;

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
                            id={writerField.id}
                            value={writer}
                            label={writerField.label}
                            dataName={writerField.dataName}
                            fullWidth={writerField.fullWidth}
                            margin={writerField.margin}
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
                <Box sx={btnBoxStyle}>
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
                    <Link to="/list">
                        <ButtonBase
                            id={backToTheListButton.id}
                            label={backToTheListButton.label}
                            variant={backToTheListButton.variant}
                            startIcon={backToTheListButton.startIcon}
                        />
                    </Link>
                </Box>
            </Container>
        );
    }

    componentDidMount() {
        const params = this.props.match.params;
        const initData = JSON.parse(localStorage.getItem(params.boardNum));

        if (initData) {
            const { title, content, writer } = initData;

            this.setState({
                values: {
                    title,
                    content,
                    writer,
                },
            });
        }
    }
}
