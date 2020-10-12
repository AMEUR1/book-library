package com.book.spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.book.spring.model.Book;
import com.book.spring.service.BookService;
@CrossOrigin("*")
@RestController
public class BookController {

	@Autowired
	private BookService bookService;

	// save a book
	@PostMapping("api/book")
	public ResponseEntity<?> save(@RequestBody Book book) {
		long idBook = bookService.save(book);
		return ResponseEntity.ok().body(book);
	}

	// get Book by Id

	@GetMapping("/api/book/{id}")
	public ResponseEntity<?> getBookById(@PathVariable("id") long Id) {
		Book book = bookService.get(Id);
		return ResponseEntity.ok().body(book);
	}

	// get all the books
	@GetMapping("/api/book")
	public ResponseEntity<List<Book>> getAllBooks() {
		List<Book> allBooks = bookService.getAll();
		return ResponseEntity.ok().body(allBooks);
	}
	
	// book update
	@PutMapping("/api/book/{id}")
	public ResponseEntity<?> updateBookById(@PathVariable("id") long Id,@RequestBody Book book) {
		 bookService.update(Id, book);
		return ResponseEntity.ok().body(Id);
	}
	
	// delete a book 
	@DeleteMapping("/api/book/{id}")
	public ResponseEntity<?> deleteBookById(@PathVariable("id") long Id) {
		 bookService.delete(Id);
		return ResponseEntity.ok().body(Id);
	}

}
