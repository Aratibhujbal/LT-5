import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Dashboard from "../pages/Dashboard";
import LogIn from "../pages/Login";
import Register from "../pages/Register";
import Hod from "../pages/Hod"
import Staff from "../pages/Staff"
import ProtectedRoutes from "./Layout/Protectedroutes";

export const router=createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path="login" element={<LogIn/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="dashboard/hod" element={
                <ProtectedRoutes allowedRoles={"hod"}>
                    <Hod/>
                </ProtectedRoutes>
            }/>
            <Route path="dashboard/staff" element={
                 <ProtectedRoutes allowedRoles={"staff"}>
                 <Staff/>
             </ProtectedRoutes>
            }/>
        </Route>
    )
    )