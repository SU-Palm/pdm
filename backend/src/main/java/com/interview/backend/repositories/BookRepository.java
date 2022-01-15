package com.interview.backend.repositories;

import com.interview.backend.models.Book;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends CrudRepository<Book, Integer> {
    <S extends Book> S save(S entity);

    @Query("SELECT book FROM Book book WHERE book.storeID = :storeID")
    public Iterable<?> findByStoreID(@Param("storeID") Integer storeID);

    @Query("SELECT book FROM Book book WHERE book.storeID = :storeID AND book.name LIKE CONCAT('%', :caseString, '%') OR book.publisher LIKE CONCAT('%', :caseString, '%') OR book.author LIKE CONCAT('%', :caseString, '%')")
    public Iterable<?>  findByAnything(@Param("caseString") String caseString, @Param("storeID") Integer storeID);
}