package com.interview.backend.controllers;

import com.interview.backend.models.Book;
import com.interview.backend.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.rmi.ServerException;
import java.util.List;

@RestController
@ResponseBody
public class BookController {
	@Autowired
	private BookService bookService;

	@GetMapping("/api/books")
	public List<Book> getAllBooks() {
		return bookService.findAll();
	}

	@GetMapping("/api/books/{id}")
	public Book getBook(@PathVariable("id") int bookId) {
		return bookService.getBookById(bookId);
	}

	@GetMapping("/api/books/delete/{id}")
	public void deleteBook(@PathVariable("id") int bookId) {
		System.out.println("Here");
		bookService.deleteById(bookId);
	}

	@PostMapping(path = "/api/book/create",
			consumes = MediaType.APPLICATION_JSON_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Book> create(@RequestBody Book newBook) throws ServerException {
		if(newBook == null) {
			throw new ServerException("Error in post");
		} else {
			Book book = new Book(newBook.name, newBook.author, newBook.value, newBook.publisher, newBook.storeID);
			bookService.bookRepository.save(book);
			return new ResponseEntity<>(newBook, HttpStatus.CREATED);
		}
	}

	@GetMapping("/api/books/count")
	public Long count() {
		return bookService.count();
	}

	@GetMapping("/api/books/search/{searchTerm}/{storeID}")
	public List<Book> getBooksBasedOnAnything(@PathVariable("searchTerm") String searchTerm, @PathVariable("storeID") Integer storeID) {
		return bookService.getBooksByAnything(searchTerm, storeID);
	}
}