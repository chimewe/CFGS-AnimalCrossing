import { Component, ViewChild, ElementRef  } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAuth } from 'app/services/auth.service';
import { SharedService } from 'app/services/shared.service';

import { Message } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  messages: Message[];
  logueado: boolean = false;

  @ViewChild("cajamail") cajamail! : ElementRef;
  @ViewChild("cajapassword") cajapassword! : ElementRef;

  receiveMessage($event: boolean) {
    this.logueado = $event;
  }

  constructor(private _auth : ServiceAuth, private _router: Router, private sharedService: SharedService) {
  }

  ngOnInit() {
    this.messages = [{ severity: 'success', summary: 'Success', detail: 'Message Content' }];
    this.logueado = this.sharedService.getVariable();
  }

  logIn():void{
    var mail = this.cajamail.nativeElement.value;
    var contra = this.cajapassword.nativeElement.value;
    this._auth.login(mail, contra).then(res=> {
      console.log(res);
      if(res != null) {
        this.sharedService.getVariable();
        this._router.navigate(['/index']);
      }
    });
  }
}
