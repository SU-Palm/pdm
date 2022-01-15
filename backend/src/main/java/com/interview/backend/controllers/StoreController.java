package com.interview.backend.controllers;

import com.interview.backend.models.Book;
import com.interview.backend.models.Store;
import com.interview.backend.services.BookService;
import com.interview.backend.services.StoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.rmi.ServerException;
import java.util.List;

@RestController
@ResponseBody
public class StoreController {
    @Autowired
    private StoreService storeService;
    @Autowired
    private BookService bookService;

    @GetMapping("/api/stores")
    public List<Store> getAllStores() {
        return storeService.findAll();
    }

    @GetMapping("/api/store/{id}")
    public Store getStore(@PathVariable("id") int storeId) {
        return storeService.getStoreById(storeId);
    }

    @GetMapping("/api/store/books/{id}")
    public List<Book> getBooks(@PathVariable("id") int storeId) {
        return bookService.getBooksByStoreId(storeId);
    }

    @PostMapping(path = "/api/store/create",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Store> create(@RequestBody Store newStore) throws ServerException {
        if(newStore == null) {
            throw new ServerException("Error in post");
        } else {
            System.out.println(newStore);
            Store store = new Store(newStore.name, newStore.owner, newStore.location);
            storeService.storeRepository.save(store);
            return new ResponseEntity<>(newStore, HttpStatus.CREATED);
        }
    }

    @GetMapping("/api/stores/{case}")
    public List<Store> getStoresBasedOnAnything() {
        return storeService.findAll();
    }
}
