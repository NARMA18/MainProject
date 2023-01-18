import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable, throwError } from 'rxjs';
import { Book } from './book';
import {catchError,map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  //Nodejs API 

REST_API:string = "http://localhost:8080/api";
//SET Http Headers.
httpHeaders= new HttpHeaders().set('Content-Type','application/json')

  constructor(private httpClient:HttpClient) { }
//add records
AddBook(data:Book):Observable<any>{
let API_URL =`${this.REST_API}/add-book`;
return this.httpClient.post(API_URL,data).pipe(catchError(this.handleError))
}  
//get All books Details
getBooks(){
  return this.httpClient.get(`${this.REST_API}`);

}
//get Single Book
getBook(id:any) : Observable<any>{
let API_URL = `${this.REST_API}/read-book/${id}`;
return this.httpClient.get(API_URL,{headers:this.httpHeaders}).pipe( map((res:any) => {
    return res || {}

 }),
catchError(this.handleError)
)
}
//Update Book Data

updateBook(id:any, data:any):Observable <any> {
let API_URL = `${this.REST_API}/update-book/${id}`;
return this.httpClient.put(API_URL, data, {headers:this.httpHeaders}).pipe(
catchError(this.handleError)
)
}
//Delete Book Data
deleteBook(id:any): Observable<any> {
  let API_URL =`${this.REST_API}/delete-book/${id}`;
  return this.httpClient.delete(API_URL, {headers: this.httpHeaders}).pipe(
    catchError(this.handleError)
  )
}
//Error 
handleError(error:HttpErrorResponse){
  let errorMessage  ='';
  if(error.error instanceof ErrorEvent) {
    //Handle client side error
    errorMessage = error.error.message;
  }else{
    //Handle server side error
    errorMessage = `Error Code: ${error.status}\nMessagee: ${error.message}`

  }
  console.log(errorMessage);
  return throwError(errorMessage);

 
}

}


  
  
  
  



















