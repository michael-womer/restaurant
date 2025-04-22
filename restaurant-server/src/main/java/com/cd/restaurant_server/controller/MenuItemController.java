package com.eatsandvibes.controller;

import com.eatsandvibes.model.MenuItem;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/menu")
@CrossOrigin(origins = "*") // Allow CORS for local dev frontend
public class MenuItemController {

    // Mock menu list — in production, you'd pull this from a DB
    private final List<MenuItem> mockMenu = new ArrayList<>();

    public MenuItemController() {
        // Add sample items to simulate categories (Brunch, Dinner, etc.)
        mockMenu.add(new MenuItem("Avocado Toast", "Sourdough with avocado & poached egg", "$12", "Brunch", "https://example.com/avocado.jpg"));
        mockMenu.add(new MenuItem("Grilled Salmon", "Salmon with garlic herb butter", "$22", "Dinner", "https://example.com/salmon.jpg"));
        mockMenu.add(new MenuItem("Espresso Martini", "Espresso, vodka & coffee liqueur", "$14", "Drinks", "https://example.com/martini.jpg"));
    }

    @GetMapping
    public List<MenuItem> getAllMenuItems() {
        return mockMenu;
    }

    @GetMapping("/{category}")
    public List<MenuItem> getMenuByCategory(@PathVariable String category) {
        List<MenuItem> filtered = new ArrayList<>();
        for (MenuItem item : mockMenu) {
            if (item.getCategory().equalsIgnoreCase(category)) {
                filtered.add(item);
            }
        }
        return filtered;
    }

    @PostMapping
    public MenuItem addMenuItem(@RequestBody MenuItem newItem) {
        mockMenu.add(newItem);
        return newItem;
    }
}