package com.cd.restaurant_server.repository;

import com.cd.restaurant_server.model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.Optional;
@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Long> {
 Optional<Reservation> findByReservationDateTime(LocalDateTime reservationDateTime);
}
