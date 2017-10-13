import { Component, OnInit } from '@angular/core';
import { ValidateService } from "../../services/validate.service";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;

  constructor(private validateService: ValidateService,
              private flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password
    };

    // Validate form
    if (!this.validateService.validateRegister(user)){
      this.flashMessagesService.show('Please fill all fields', {cssClass: 'alert-danger', timeout: 2000});
      return false;
    }

    // Validate email
    if (!this.validateService.validateEmail(user.email)){
      this.flashMessagesService.show('Please enter email', {cssClass: 'alert-danger', timeout: 2000});
      return false
    }
  }

}
