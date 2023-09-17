import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent implements OnInit {

  @Input() posts: any;

  constructor() { }

  ngOnInit() {
  }

  changeDate(date: Date){
    return moment(date).format('DD MMMM YYYY');
  }

}
