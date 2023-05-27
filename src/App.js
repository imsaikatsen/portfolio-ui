import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import DashBoard from './components/Dashboard';

export default function App() {
    return (
        <Router>
 
            <Switch>
            <   Route exact path="/" component={LoginForm} />
                <Route exact path="/login" component={LoginForm} />
                <Route exact path="/signup" component={SignupForm} />
                <Route exact path="/dashboard" component={DashBoard} />
            </Switch>
        </Router>
    );
}