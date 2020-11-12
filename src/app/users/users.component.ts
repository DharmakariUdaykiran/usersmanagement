import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  constructor() { }
 items1=[];
//items2=['ljkgh'];
//ite=[this.items1,this.items2]
//items2=['item2'];
addItem(newItem : any ){ //newItem1 : string[]){
  this.items1.push(newItem);
  //this.items2.push(newItem);
}
  ngOnInit(): void {
  }
}
