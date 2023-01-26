import './App.css';
import {BrowserRouter, Route, Routes, useNavigate,} from "react-router-dom";
import {useAuthContext} from './hooks/UseAuthContext'
import {Home} from "./pages/home/Home";
import {Login} from "./pages/login/Login";
import {Signup} from "./pages/signup/Signup";
import {Navbar} from "./Components/Navbar";



function App() {
    const {authIsReady, user} = useAuthContext()
    return (
        <div className="App">
            {authIsReady && (
                <BrowserRouter>
                    <Navbar/>
                    <Routes>
                        <Route path="/" element={user ? <Home/> : <Login/>}/>
                        <Route path="/login" element={!user ? <Login/> : <Home/> }/>
                        <Route path="/signup" element={!user ? <Signup/> : <Home/> }/>
                    </Routes>
                </BrowserRouter>
            )}
        </div>
    );
}

export default App;
