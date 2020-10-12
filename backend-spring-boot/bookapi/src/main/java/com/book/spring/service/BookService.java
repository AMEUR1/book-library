package com.book.spring.service;

import java.util.List;

import com.book.spring.model.Book;

public interface BookService {


	//Save the record
	long save(Book book);
	
	// get a single record
	Book get(long id);
	
	//get all record
	
	List<Book> getAll();
	
	//Update the record
	void update(long id,Book book);
	
	//Delete the record
	void delete(long id);
	
	
}
