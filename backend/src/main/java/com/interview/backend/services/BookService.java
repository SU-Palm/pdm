package com.interview.backend.services;

import com.interview.backend.models.Book;
import com.interview.backend.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class BookService {
    @Autowired
    public BookRepository bookRepository;

    public List<Book> findAll() {
        var it = bookRepository.findAll();
        var books = new ArrayList<Book>();
        it.forEach(e -> books.add(e));
        return books;
    }

    public Book getBookById(int id) { return bookRepository.findById(id).get(); }

    public Long count() {
        return bookRepository.count();
    }

    public void deleteById(int bookId) {
        bookRepository.deleteById(bookId);
    }

    public List<Book> getBooksByStoreId(int storeId) {
        var it = bookRepository.findByStoreID(storeId);
        var books = new ArrayList<Book>();
        it.forEach(e ->
                books.add((Book) e)
        );
        return books;
    }

    public List<Book> getBooksByAnything(String caseString, Integer storeID) {
        var it = bookRepository.findByAnything(caseString, storeID);
        var books = new ArrayList<Book>();
        it.forEach(e ->
                books.add((Book) e)
        );
        return books;
    }
}