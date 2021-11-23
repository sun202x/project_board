import React from 'react';
import BoardWrite from './page/BoardWrite';
import BoardList from './page/BoardList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
    // params 정보?
    return (
        <BrowserRouter>
            <div className="Board">
                <Switch>
                    <Route exact={true} path="/list" component={BoardList} />
                    <Route path="/write/:boardNum" component={BoardWrite} />
                    <Route component={BoardList} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
