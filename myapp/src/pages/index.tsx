import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteLayout from '../../app/layout';
import Home from '../pages/home';
export default function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<RouteLayout/>}>
                <Route index element={<Home />}/>
            </Route>
        </Routes>
        </BrowserRouter>
    );
}