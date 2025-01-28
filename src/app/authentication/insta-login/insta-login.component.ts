import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insta-login',
  templateUrl: './insta-login.component.html',
  styleUrls: ['./insta-login.component.scss'],
  standalone:false
})
export class InstaLoginComponent  implements OnInit {

  username:string=''
  password:string=''
  empdata:any
  constructor(
   private router:Router, private crudservice:CrudService
  ) { }

  ngOnInit() {}

  onSubmit(){
    if(this.username=="" || this.password==""){
      alert('please fill username and password')
    }else{
      const instalogin = new FormData()
    instalogin.append('username',this.username)
    instalogin.append('password',this.password)
    this.crudservice.onLogin(instalogin).subscribe(
      (res:any)=>{
        console.log(res);
        console.log(res.StatusCode);

        // validation

        if(res.StatusCode == 200){
        alert('Login Successful')
        }
        else{
          alert('Login failed')
        }
    },(err:any)=>{
      alert('Login failed')

    })
    console.log(this.username);
    console.log(this.password);
    }
    
  }
  getdata(){
    this.crudservice.getuser().subscribe((res:any)=>{
      console.log(res);
      this.empdata = res.data
    })
  }

}
