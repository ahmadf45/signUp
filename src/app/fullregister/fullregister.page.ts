import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fullregister',
  templateUrl: './fullregister.page.html',
  styleUrls: ['./fullregister.page.scss'],
})
export class FullregisterPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
  kpasswordType: string = 'password';
  kpasswordIcon: string = 'eye-off';
 
  hideShowPassword() {
      this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
      this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }
  hideShowKPassword() {
    this.kpasswordType = this.kpasswordType === 'text' ? 'password' : 'text';
    this.kpasswordIcon = this.kpasswordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }
  simpan(){
    this.router.navigateByUrl('/home')
  }

}
