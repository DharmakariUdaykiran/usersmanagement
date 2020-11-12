import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import{ Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter;
  addform:FormGroup;
  constructor(private fb : FormBuilder) {
    this.addform=fb.group({
      /*name : ['',Validators.required],
      email : ['',[Validators, Validators.email]],
      employee_id : ['',Validators.required],
      organisation : ['',Validators.required],
      region:[''],
      city:[''],
      country:['']*/
      name: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      employee_id:new FormControl('',Validators.required),
      organisation:new FormControl('',Validators.required),
      region:new FormControl(),
      city:new FormControl(),
      country:new FormControl(),
     /* items:this.fb.array([
        this.fb.group({
        name:[''],
        organisation:['']
        })
      ])*/
        });
      }
      addNewItem(value :string ){
        this.newItemEvent.emit(this.addform.value);
      }
 
  postdata(){
  }

  ngOnInit(): void {
  }
}
