import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from './book';



@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'Author', 'Title','Actions'];
  books : Book[];
  errorMsg ;
  book = new Book();
  constructor(private __bookSer : BookService) { }

  ngOnInit() {
    this.getAllBooks();
  }

  public getAllBooks(){
    this.__bookSer.getAllBooks()
    .subscribe(
      res => {
          this.books=res;
          console.log("Response success")
          console.log(this.books)
      },
      err => {
        console.log("Eroor");
        this.errorMsg=err;
        console.log(err);
      }
    )
  }

  public addBook(){
    console.log("the book added ")
    this.__bookSer.addBook(this.book)
    .subscribe(
      res => {
        console.log("success !!"+res)
        console.log(res);
        this.getAllBooks();
        this.resetForm();
      },
      err => {
        console.log("Eroor !!")
        console.log(err);
      }
    )
    //console.log(this.book)
   
  }


  public deleteBook(id){
    this.__bookSer.deleteBook(id).subscribe(
      res =>{ 
        console.log(res)
        this.getAllBooks();
        this.resetForm();
      },
      err => console.log(err)
    )
  }

  public getBookById(id){
    this.__bookSer.getBook(id)
    .subscribe(
      res=> {
        this.book=res;
        console.log(res)
      },
      err => {
        console.log(err)
      }
    )
  }

  public updateBook(id){
    
    this.__bookSer.updateBook(id,this.book)
    .subscribe(
      res =>{ 
        console.log(res)
        this.getAllBooks();
        this.resetForm();
      },
      err => console.log(err)
    
    )
  }

  public  resetForm(){
    this.book.author=null;
    this.book.id=null;
    this.book.title=null;
  } 

}
