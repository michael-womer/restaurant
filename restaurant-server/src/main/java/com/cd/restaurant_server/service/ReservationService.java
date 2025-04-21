package com.cd.restaurant_server.service;

import com.cd.restaurant_server.exceptions.ResourceCreationException;
import com.cd.restaurant_server.exceptions.ResourceNotFoundException;
import com.cd.restaurant_server.model.Reservation;

import java.time.LocalDateTime;
import java.util.List;

public interface ReservationService {

    Reservation create(Reservation reservation)throws ResourceCreationException;

    Reservation getByReservationDateTime(LocalDateTime reservationDateTime) throws ResourceNotFoundException;

    List<Reservation> getAll();

    void delete(LocalDateTime reservationDateTime);
}
