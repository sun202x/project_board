import * as React from 'react';
// icon
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import Input from '../component/Input';
import ButtonBase from '../component/button';
import { Box, Container } from '@material-ui/core';


// =============================================== Board =============================================== //
interface IBoardWriteFuncProps {
};

interface IBoardWriteFuncState {
}

const boxSize = {
    m: 1,
};

export default class BoardWrite extends React.Component<IBoardWriteFuncProps, IBoardWriteFuncState> {

    // this binding을 위해 classField 형태로 작성한다.
    handleChange = function (e: any) {
        const { name, value } = e.target;
        console.log(name, value);
    }

    render() {
        return (
            <Container>
                <Box sx={boxSize}>
                    <div>
                        <Input
                            fullWidth={true}
                            margin="normal"
                            id="boardTitle"
                            label="제목"
                            dataName="title"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <Input
                            fullWidth
                            margin="normal"
                            id="boardContent"
                            label="내용"
                            rows={10}
                            multiline={true}
                            dataName="content"
                            onChange={this.handleChange}
                        />
                    </div>
                </Box>
                <Box sx={boxSize}>
                    <ButtonBase
                        label="저장"
                        variant="contained"
                        color="primary"
                        startIcon={<SaveIcon />}
                    />
                    <ButtonBase label="다시작성" variant="contained" startIcon={<EditIcon />} />
                </Box>
            </Container>
        );  
    }
}