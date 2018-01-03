import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  id:number;
  sub:Subscription;

  constructor(private route:ActivatedRoute) { 
    this.sub = this.route.params.subscribe(params =>{
      this.id = params['id']
    });
  }

  ngOnInit() {
  }

}
