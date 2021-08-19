import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user : User = new User("","","",0,"");

  message : any;
  constructor(private service: UserServiceService)
  {}

  public registerNow()
  {
    let response = this.service.doRegistration(this.user)
    response.subscribe(data => {
      this.message = data;
    })
  }
  // message : any;
  // registerForm: FormGroup;
  // user: User;

  // constructor(private formBuilder: FormBuilder, private service : UserServiceService) {
  //   this.registerForm = this.formBuilder.group({
  //     username:'',
  //     firstName:'',
  //     lastName:'',
  //     age:0,
  //     password:''
  //   });
  //   this.user={
  //     username:'',
  //     firstName:'',
  //     lastName:'',
  //     age:0,
  //     password:''
  //   }
  //  }

  ngOnInit(): void {
  }

  // onSubmit()
  // {
  //   this.user.username = this.registerForm.get('username').value;
  //   this.user.firstName = this.registerForm.get('firstName').value;
  //   this.user.lastName = this.registerForm.get('lastName').value;
  //   this.user.age = this.registerForm.get('age').value;
  //   this.user.password = this.registerForm.get('password').value;

  //   this.service.doRegistration(this.user).subscribe( data =>
  //     {
  //       this.message = data;
  //     });
  // }

}
