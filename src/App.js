import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Poke from './pages/Poke';
import PokeBag from './pages/PokeBag';
import { StoreProvider } from './store';

function App() {
    return (
        <StoreProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={ Home }/>
                    <Route path="/pokebag" component={PokeBag} />
                    <Route exact path="/:pageName" component={ Home } />
                    <Route path="/poke/:pokeId" component={ Poke } />
                </Switch>
            </BrowserRouter>
        </StoreProvider>
    );
}

export default App;
