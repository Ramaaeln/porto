import { Route, Routes } from "react-router";
import Navigation from "../components/Fragments/Navigation";
import HomePages from "../pages/home";
import AboutPages from "../pages/about";

export default function Routers(){
    return(
        <Routes>
            <Route element={<Navigation/>}>
                <Route path="/" element={<HomePages/>} />
                <Route path="about" element={<AboutPages/>} />
            </Route>
        </Routes>
    )
}