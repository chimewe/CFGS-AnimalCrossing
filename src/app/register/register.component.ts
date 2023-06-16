import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAuth } from 'app/services/auth.service';
import { SharedService } from 'app/services/shared.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @ViewChild("cajamail") cajamail! : ElementRef;
  @ViewChild("cajapassword") cajapassword! : ElementRef;

  @Output() logueadoEvent= new EventEmitter<boolean>();

  constructor(private _auth : ServiceAuth, private _router: Router, private sharedService: SharedService, private _location: Location) {}

  register():void{
    var mail = this.cajamail.nativeElement.value;
    var contra = this.cajapassword.nativeElement.value;
    this._auth.registro(mail, contra).then(res=>{
      if(res != null) {
        console.log(res);
        this.logueadoEvent.emit(true);
        this._location.back();
      }
    });
  }
}
