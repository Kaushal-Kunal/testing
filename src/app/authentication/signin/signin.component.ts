import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  standalone: false
})
export class SigninComponent implements OnInit {
  username:string=''
  password:string=""
  constructor(
    private crudservice:CrudService
  ) {

  }

  ngOnInit() { }

  onSumit() {
    const logindata = new FormData()
    logindata.append('username', this.username)
    logindata.append('password',this.password)
    this.crudservice.onLogin(logindata).subscribe(
      (res)=>{
        console.log(res)
      })
    console.log(this.username)
    console.log(this.password)
    
  }
}
