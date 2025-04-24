package com.cd.restaurant_server.service;

import com.cd.restaurant_server.model.Item;
import com.cd.restaurant_server.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ItemServiceImpl implements ItemService{

    private ItemRepository itemRepository;
    @Autowired
    ItemServiceImpl(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }
    @Override
    public void addItem(Item item) {
        itemRepository.save(item);
    }

    @Override
    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }

    @Override
    public List<Item> getItemsByCategory(String category) {
        return itemRepository.findByCategory(category);
    }

    @Override
    public void deleteItem(Long id) {
        itemRepository.deleteById(id);
    }
}
