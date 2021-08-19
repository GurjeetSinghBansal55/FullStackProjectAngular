import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-serach',
  templateUrl: './serach.component.html',
  styleUrls: ['./serach.component.scss']
})
export class SerachComponent implements OnInit {

  username : string;

  user : any;
  constructor(private service : UserServiceService) { }

  ngOnInit(): void {
  }

  public getUserByUsername()
  {
    let response = this.service.getUserByUsername(this.username);
    response.subscribe(data => {
      this.user=data
    })
  }

}
