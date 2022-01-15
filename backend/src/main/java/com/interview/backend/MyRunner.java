package com.interview.backend;

import com.interview.backend.models.Book;
import com.interview.backend.models.Store;
import com.interview.backend.repositories.BookRepository;
import com.interview.backend.repositories.StoreRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import javax.transaction.Transactional;

@Component
public class MyRunner implements CommandLineRunner {

    private static final Logger logger = LoggerFactory.getLogger(MyRunner.class);

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private StoreRepository storeRepository;

    @Override
    @Transactional
    public void run(String... args) throws Exception {

        logger.info("initializing books/stores");
        Store s1 = new Store("Barnes and Noble", "Joe Balascio", "Albany, NY");
        storeRepository.save(s1);

        Book u1 = new Book("The Night Diary", "Veera Hiranandani", 10.11,"Penguin Young Readers Group", s1.id);
        bookRepository.save(u1);

        Book u2 = new Book("Night Diary", "Veera Hiranandani", 10.23,"Penguin Young Readers Group", s1.id);
        bookRepository.save(u2);

        Store s2 = new Store("Not Barnes", "John Stewart", "Syracuse, NY");
        storeRepository.save(s2);

        Book u3 = new Book("Diary of a Wimpy Kid", "Not Joe Balascio", 99.22,"Penguin Young Readers Group", s2.id);
        bookRepository.save(u3);

        Book u4 = new Book("Diary of a Wimpy Kid 2", "Not Joe Balascio", 63.22,"Young Readers Group", s2.id);
        bookRepository.save(u4);

        logger.info(bookRepository.findAll().toString());
        logger.info(storeRepository.findAll().toString());
    }
}