import {  Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "login",
    templateUrl: "pages/login/login.html",
    styleUrls: ["pages/login/login-common.css", "pages/login/login.css"],
})

export class LoginComponent{

    constructor(private router: Router) {

    }

    login() {
        this.router.navigate(["/dashboard"]);
    }
}