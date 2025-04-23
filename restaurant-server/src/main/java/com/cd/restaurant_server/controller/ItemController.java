package com.cd.restaurant_server.controller;

import com.cd.restaurant_server.model.Item;
import com.cd.restaurant_server.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/Items")
@CrossOrigin(origins= "*")
public class ItemController {
    private ItemService itemService;

    @Autowired
    ItemController(ItemService itemService) {
        this.itemService = itemService;
    }
    @GetMapping
    ResponseEntity<List<Item>> getAllItems() {
        return new ResponseEntity<>(itemService.getAllItems(), HttpStatus.OK);
    }

    @PostMapping
    ResponseEntity<HttpStatus> createItem(Item item) {
        itemService.addItem(item);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }


}
