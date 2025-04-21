package com.cd.restaurant_server.controller;

import com.cd.restaurant_server.model.Reservation;
import com.cd.restaurant_server.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/v1/Reservations")
@CrossOrigin(origins= "*")
public class ReservationController {

    private ReservationService reservationService;

    @Autowired
    public ReservationController(ReservationService reservationService){
        this.reservationService = reservationService;
    }

    @GetMapping
    public ResponseEntity<List<Reservation>> getAll(){
        List<Reservation> Reservations = reservationService.getAll();
        return new ResponseEntity<>(Reservations, HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<Reservation> create(@RequestBody Reservation reservation){
        reservation = reservationService.create(reservation);
        return new ResponseEntity<>(reservation, HttpStatus.CREATED);
    }

    @DeleteMapping("{reservationDateTime}")
    public ResponseEntity delete(@PathVariable("reservationDateTime")LocalDateTime reservationDateTime){
        reservationService.delete(reservationDateTime);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("{reservationDateTime}")
    public ResponseEntity<Reservation> getByReservationDateTime(@PathVariable("reservationDateTime")LocalDateTime reservationDateTime){
        Reservation reservation = reservationService.getByReservationDateTime(reservationDateTime);
        return new ResponseEntity<>(reservation, HttpStatus.OK);
    }
}
