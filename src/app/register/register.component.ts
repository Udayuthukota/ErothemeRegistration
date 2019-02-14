import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {FormGroup }   from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  FirstName = new FormControl('', [Validators.required]);
  constructor() { }
  LastName=new FormControl('');
  email = new FormControl('', [Validators.required, Validators.email]);
  password=new FormControl('', [Validators.required]);
  confirm=new FormControl('',[Validators.required]);
  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  // checkMinLennght(group:FormGroup)
  // {
  //   let pass=group.controls.FirstName

  // }
  getErrorFnameMessage(){
    return this.FirstName.hasError('required') ? 'You must enter a value':'';
  }
  //  this.FirstName.hasError('minLength(3)') ? 'Minimum lenght is 3':
  // this.form.valueChanges.subscribe(field => {
  //   if (field.password !== field.confirm) {
  //     this.confirm.setErrors({ mismatch: true });
  //   } else {
  //     this.confirm.setErrors(null);
  //   }
  //  });
  getpassErrorMessage(){
    return this.password.hasError('required') ? 'You must enter a value': '';
  }

  getconfirmErrorMessage(){
    if(this.password.value!=this.confirm.value) {
    return "Must match the previous entry";
    }
  }
  //  return this.confirm.hasError('required')? "you musu enter a val":' what is this?';
    // if(this.password==this.confirm)
    //   return "its maching";

  
  // if (fromValue && toValue && fromValue === toValue) {
  //   console.log('Control: ', control);
  //   return { 'fieldMatch' : true };
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  ngOnInit() {
  }
  // register()
  // {
    
  // }

}
