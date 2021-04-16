import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Poke from './pages/Poke';
import { StoreProvider } from './store';

function App() {
    return (
        <StoreProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/:pageName" component={Home} />
                    <Route path="/poke/:poketId" component={Poke} />
                </Switch>
            </BrowserRouter>
        </StoreProvider>

    );
}

export default App;
