import { AuthService } from './../_services/auth.service';
import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //@Input() valuesFromHomeParent: any;
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private authService: AuthService, private alertifyService: AlertifyService) { }

  ngOnInit() {
  }

  register(){
    this.authService.register(this.model).subscribe(() => {
      this.alertifyService.success('registration successful');
    }, error => {
      this.alertifyService.error(error);
    });
  }

  cancel(){
    this.cancelRegister.emit(false);
    this.alertifyService.message('cancelled');
  }

}
