import { Component, NgZone } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent {
getId: string | null;
  updateForm: any;
  formBuilder: any;

constructor(private formBuider:FormBuilder,private router:Router,
  private ngZone:NgZone,
  private activatedRoute:ActivatedRoute,
  private crudApi:CrudService){
    this.getId =this.activatedRoute.snapshot.paramMap.get('id');
    this.crudApi.getBook(this.getId).subscribe(res=>{
      this.updateForm.setValue({
        name:res['name'],
      author:res['author'],
      price:res['price']
      })
    });
    this.updateForm=this.formBuilder.group({
      name: [''],
      author: [''],
      price: ['']
    })

    }
    ngOnInit(): void{ }
onUpdate(){
this.crudApi.updateBook(this.getId,this.updateForm.value).subscribe(res=>{
console.log("Data Updated Success Full");
this.ngZone.run(()=>{this.router.navigateByUrl('/book-list')})
},(err)=>
console.log(err)
    )
    }

  }
