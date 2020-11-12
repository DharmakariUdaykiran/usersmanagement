import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {FormBuilder,Validators,FormArray,FormArrayName} from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class AdduserService {
 // addform:any;
  constructor(private fb : FormBuilder) {
   // this.addform=fb.group({
      /*name : ['',Validators.required],
      email : ['',[Validators, Validators.email]],
      employee_id : ['',Validators.required],
      organisation : ['',Validators.required],
      region:[''],
      city:[''],
      country:['']*/
     /* name: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      employee_id:new FormControl('',Validators.required),
      organisation:new FormControl('',Validators.required),
      region:new FormControl(),
      city:new FormControl(),
      country:new FormControl(),
      items:this.fb.array([
        this.fb.group({
        name:[''],
        organisation:[''],
        })   
      ]),
      getitems(){
        return this.addform1.get('items') as FormArray;
           },
           addNewItem() {
             const newItem = this.fb.group({
             name:[''],
               organisation:[''],
             });
             this.items.push(newItem);
             
             }
  
    })*/
    
   }
 
}
