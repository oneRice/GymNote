import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Rx";

import { User } from "./user";

@Injectable()
export class UserService {
    inuser: User;
    constructor() {
        this.inuser.email = "a";
        this.inuser.password = "a";
    }

    login(user: User): Promise<User>{
        if (user.email === this.inuser.email && user.password === this.inuser.password) {
            return Promise.resolve(user);
        }
        return Promise.reject("user not find");
    }
    
    handleErrors(error: Response){
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}