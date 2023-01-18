import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import{CrudService} from'./../../service/crud.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent  implements OnInit{
  bookForm:FormGroup;


  
constructor(
  private formBuilder:FormBuilder,
   private router:Router,
   private ngZone:NgZone,
   private crudService:CrudService
   ) {
    this.bookForm=this.formBuilder.group({
     id:[''],
     name:[''],
     author:[''],
     price:['']
     
    })
   }
   ngOnInit(): void {
   } 
    onSubmit():any{
      this.crudService.AddBook(this.bookForm.value).
      subscribe(()=>{
console.log('Data Added Successfull!')
this.ngZone.run(()=> this.router.navigateByUrl('/books-list'))
},(err: any) =>{
  console.log(err);
() =>{
  console.log('completed');
}
      });

    }
}
