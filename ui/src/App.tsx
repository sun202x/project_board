import React from 'react';
import BoardWrite from './page/BoardWrite';
import BoardList from './page/BoardList';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div className="Board">
                <Switch>
                    <BoardWrite />
                    <BoardList />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
