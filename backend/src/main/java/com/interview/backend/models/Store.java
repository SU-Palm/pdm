package com.interview.backend.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Store {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Integer id;
    public String name;
    public String owner;
    public String location;
    public Integer book_count;
    public String imageURL;

    public Store() { }

    public Store(String name, String owner, String location) {
        this.name = name;
        this.owner = owner;
        this.location = location;
        this.book_count = 0;
        this.imageURL = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60";
    }

    @Override
    public String toString() {
        return "Store{ " + "Name="+ name + "Owner=" + owner + "Location=" + location + "}";
    }

}
