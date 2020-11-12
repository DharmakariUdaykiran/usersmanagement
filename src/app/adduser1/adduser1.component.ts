import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {FormBuilder,Validators,FormArray,FormArrayName} from '@angular/forms';
@Component({
  selector: 'app-adduser1',
  templateUrl: './adduser1.component.html',
  styleUrls: ['./adduser1.component.css']
})
export class Adduser1Component implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>()
addform1:any;
  constructor(private fb : FormBuilder) {
    this.addform1=fb.group({
      personal_role:['',Validators.required],
system_role:['',Validators.required],
status:['',Validators.required]
    });
  }
    /*items:this.fb.array([
      this.fb.group({
        personal_role:[''],
        system_role:[''],
        status:['']
      })
    ]);
   getitems(){
    return this.addform1.get('items') as FormArray;
       }
       addNewItem() {
         const newItem = this.fb.group({
          personal_role:[''],
            system_role:[''],
            status:['']
         })
         
         }*/
   
   postdata(){
   console.log(this.addform1.value);
   }

  show(){
    alert("Are you sure, Do you want to go back?");
  }
 
  ngOnInit(): void {
  }
  addNewItem(value:string){
    this.newItemEvent.emit(value);
  }
}
