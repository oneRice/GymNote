import { DashBoardComponent } from "./pages/dashboard/dashboard.component";
import { LoginComponent } from "./pages/login/login.component";

export const routes = [
    {
        path: "",
        component: LoginComponent
    },
    {
        path: "dashboard",
        component: DashBoardComponent
    },
];

export const navigatableComponents = [
    DashBoardComponent,
    LoginComponent
];