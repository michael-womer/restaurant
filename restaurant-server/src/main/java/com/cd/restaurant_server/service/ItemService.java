package com.cd.restaurant_server.service;

import com.cd.restaurant_server.model.Item;

import java.util.List;

public interface ItemService {
    void addItem(Item item);
    List<Item> getAllItems();
    List<Item> getItemsByCategory(String category);
    void deleteItem(Long id);
}
