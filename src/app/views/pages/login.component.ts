import {Component, Input} from "@angular/core";
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {User} from '../../common/entity/User';
import {BaseReactiveFormComponent} from '../../common/component/BaseReactiveFormComponent';
import {MessageService} from '../../common/service/messageService';


@Component({
    selector: "app-login-cmp",
    templateUrl: "./login.component.html",
})
export class LoginComponent extends BaseReactiveFormComponent<User> {

    options: any = {timeOut: 3000};
    successURL: string;
    constructor(protected a_router: Router,
                protected _fb: FormBuilder,
                protected _messageService: MessageService) {
        super(a_router,  _fb, _messageService, false);
        this.domainObject = new User();
        super.buildForm();
    }
    getFormErrors() {
        return {"username": "", "password": ""};
    }

    getValidationMessages() {
        return {
            "username": {
                "required": "用户名不能为空.",
                // "minlength": "Username must be at least 4 characters long.",
                "maxlength": "用户名不能超过24个字符.",
                // "forbiddenName": "Someone named \"jack\" cannot be a username."
            },
            "password": {
                "required": "密码不能为空."
            }
        };
    }

    _buildForm() {
        this.aForm = this.fb.group({
            "username": [this.domainObject.username, [
                Validators.required,
                // Validators.minLength(4),
                Validators.maxLength(24),
                // forbiddenNameValidator(/jack/i)
            ]
            ],
            "password": [this.domainObject.password, Validators.required],
        });
    }

    onSubmit() {
        super.onSubmit();
        this.login();
    }

    login() {
        if (this.domainObject.username === 'admin' && this.domainObject.password === '111') {
            const user = new User();
            user.type = 0;
            user.id = 1;
            this.successURL = '/dashboard';
            localStorage.setItem("loginUser", JSON.stringify(user));
            //this._messageService.pushMessage({type: "login"});
            this.a_router.navigate([this.successURL]);
        }
         else {
            this.handleError("登录失败,请检查用户名及密码.");
        }
        // this._userService.login(this.domainObject.username, this.domainObject.password).subscribe(
        //     (result) => {
        //         localStorage.setItem("loginUser", JSON.stringify(result.detail));
        //         localStorage.setItem("token", result.token);
        //         this.a_router.navigate([this.successURL]);
        //     },
        //     err => {
        //         this.handleError("登录失败,请检查用户名及密码.");
        //     }
        // );
    }


}
