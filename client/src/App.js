import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import Auth from "./hoc/auth";
import NavBar from "./components/views/NavBar/NavBar";
import VideoUploader from "./components/views/VideoUploadPage/VideoUploadPage";

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Auth(LandingPage, null)} />
                <Route path="/login" component={Auth(LoginPage, false)} />
                <Route path="/register" component={Auth(RegisterPage, false)} />
                <Route
                    path="/video/upload"
                    component={Auth(VideoUploader, true)}
                />
            </Switch>
        </Router>
    );
}

export default App;
