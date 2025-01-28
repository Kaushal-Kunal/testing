import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone:false
})
export class DashboardComponent  implements OnInit,AfterViewInit {
 base_url: string = 'https://eduaffair.co.in/'
 empdata:any
  constructor(
    private crudservice:CrudService
  ) {
   console.log('construcrete lodee');
   
   }
  ngAfterViewInit() {
    console.log('ngAfterViewInit lodee');

  }

  ngOnInit() {
    console.log('online chala');
    
    this.getdata()
  }


  getdata() {
    this.crudservice.getuser().subscribe((res: any) => {
      console.log(res);
      this.empdata = res.data
    })
  }
}
