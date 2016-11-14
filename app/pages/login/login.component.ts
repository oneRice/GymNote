import {  Component } from "@angular/core";
import { Router } from "@angular/router";

import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";

@Component({
    selector: "login",
    templateUrl: "pages/login/login.html",
    styleUrls: ["pages/login/login-common.css", "pages/login/login.css"],
    providers: [UserService],
})

export class LoginComponent{
    user: User;

    constructor(private router: Router,
        private userService: UserService) {

    }

    login() {
        this.userService.login(this.user)
            .then(user => this.router.navigate(["/dashboard"]))
            .catch(error => console.log(error));
    }
}