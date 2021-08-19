import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.scss']
})
export class AllusersComponent implements OnInit {

  users : any;

  constructor(private service : UserServiceService) { }

  ngOnInit(): void {
    let response = this.service.getAllUser();
    response.subscribe(data => {
       this.users = data;
    })
  }

}
