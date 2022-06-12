import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'cyber-security-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'client';

  /**
   *
   */
  constructor(private readonly service: DataService) {
    
  }
  ngOnInit(): void {
    this.service.getMessage().subscribe();
  }
  sendReq() {
    

     this.service.getPerson().subscribe(res => {
      console.log(res);
    })
  }
}
