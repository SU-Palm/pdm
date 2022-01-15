package com.interview.backend.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Integer id;

    public String name;
    public Date published;
    public String author;
    public Number value;
    public String publisher;
    public String imageURL;
    public Integer storeID;

    public Book(String name, String author, Number value, String publisher, Integer storeID) {
        this.name = name;
        this.author = author;
        this.published = new Date();
        this.value = value;
        this.publisher = publisher;
        this.imageURL = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60";
        this.storeID = storeID;
    }

    public Integer getStoreID() {
        return this.storeID;
    }

    public Book() {  }

    @Override
    public String toString() {
        return "Book{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", published=" + published +
                ", author='" + author + '\'' +
                ", value=" + value +
                ", publisher='" + publisher + '\'' +
                ", storeID='" + storeID + '\'' +
                '}';
    }
}