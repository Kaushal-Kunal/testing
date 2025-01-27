import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-fblogin',
  templateUrl: './fblogin.component.html',
  styleUrls: ['./fblogin.component.scss'],
  standalone:false
})
export class FbloginComponent  implements OnInit {
username:string=""
password:string=""
empdata:any
  constructor(
    private crudservice:CrudService
  ) { }
   
  ngOnInit() {}

  onSubmit(){
    const logindata=new FormData()
    logindata.append('username',this.username)
    logindata.append('password',this.password)
    this.crudservice.onLogin(logindata).subscribe((res)=>{
      console.log(res);
      
    })
    console.log('username');
    console.log('password');
    
    
  }
  getdata(){
    this.crudservice.getuser().subscribe((res:any)=>{
      console.log(res);
      this.empdata = res.data
    })
  }
}
