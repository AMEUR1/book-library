import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './book/book';
import { Response } from 'selenium-webdriver/http';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  //spring
  // private getAllbooksUrl="http://localhost:7070/bookapi/api/book";
  // private addBookUrl="http://localhost:7070/bookapi/api/book";
  // private deleteBookUrl="http://localhost:7070/bookapi/api/book/";
  // private updateBookUrl="http://localhost:7070/bookapi/api/book/";
  // private getBookUrl="http://localhost:7070/bookapi/api/book/";

  
  //spring boot
  private getAllbooksUrl="http://localhost:7070/api/book";
  private addBookUrl="http://localhost:7070/api/book";
  private deleteBookUrl="http://localhost:7070/api/book/";
  private updateBookUrl="http://localhost:7070/api/book/";
  private getBookUrl="http://localhost:7070/api/book/";


  constructor(private _http : HttpClient) { }

  public getAllBooks(){
   return  this._http.get<any>(this.getAllbooksUrl);
  }

  //TODO  fix bug of token json
  public addBook(book){
    let body  = JSON.stringify(book) ;
    let headers = new HttpHeaders({'Content-Type' : 'application/json'});
    
    console.log("this is service")
    console.log(body)
    console.log("service done")
    return this._http.post<any>(this.addBookUrl,book);
  }

  public deleteBook(id){
    return this._http.delete(this.deleteBookUrl+id)

  }

  public updateBook(id,book){
    let body  = JSON.stringify(book) 
    console.log(body);
    return this._http.put<any>(this.updateBookUrl+book.id,book);
  }
 
  public getBook(id){
    return this._http.get<any>(this.getBookUrl+id);
  }


}
