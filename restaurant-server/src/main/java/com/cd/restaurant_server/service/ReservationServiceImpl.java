package com.cd.restaurant_server.service;

import com.cd.restaurant_server.exceptions.ResourceCreationException;
import com.cd.restaurant_server.exceptions.ResourceNotFoundException;
import com.cd.restaurant_server.model.Reservation;
import com.cd.restaurant_server.repository.ReservationRepository;
import org.springframework.cglib.core.Local;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public class ReservationServiceImpl implements ReservationService {

private ReservationRepository reservationRepository;

    @Override
    public Reservation create(Reservation reservation) throws ResourceCreationException {
        Optional<Reservation> optional = reservationRepository.findByTime(reservation.getReservationDateTime());
        if (optional.isPresent()){
            throw new ResourceCreationException("There is already a reservation for this time: " + reservation.getReservationDateTime());
        }
        reservation.setCreatedAt(LocalDateTime.now());
        reservation = reservationRepository.save(reservation);
        return reservation;
    }

    @Override
    public Reservation getByReservationDateTime(LocalDateTime reservationDateTime) throws ResourceNotFoundException {
        Reservation reservation = reservationRepository.findByTime(reservationDateTime)
                .orElseThrow(()->new ResourceNotFoundException("No reservation at this time: " + reservationDateTime));
        return reservation;
    }

    @Override
    public List<Reservation> getAll() {
        return reservationRepository.findAll();
    }

    @Override
    public void delete(LocalDateTime reservationDateTime) {
        Reservation reservation = getByReservationDateTime(reservationDateTime);
        reservationRepository.delete(reservation);
    }
}
