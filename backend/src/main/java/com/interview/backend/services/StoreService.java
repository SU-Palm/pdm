package com.interview.backend.services;

import com.interview.backend.models.Store;
import com.interview.backend.repositories.StoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StoreService {
    @Autowired
    public StoreRepository storeRepository;

    public List<Store> findAll() {
        var it = storeRepository.findAll();
        var stores = new ArrayList<Store>();
        it.forEach(e -> stores.add(e));
        return stores;
    }

    public Store getStoreById(int id) { return storeRepository.findById(id).get(); }

    public Long count() {
        return storeRepository.count();
    }

    public void deleteById(int storeId) {
        storeRepository.deleteById(storeId);
    }
}
