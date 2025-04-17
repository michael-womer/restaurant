package com.cd.restaurant_server.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "reservations")
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private int partySize;

    private LocalDateTime reservationDateTime;
    private LocalDateTime createdAt;

    // Constructors
    public Reservation() {
        this.createdAt = LocalDateTime.now();
    }

    public Reservation(String name, String email, int partySize, LocalDateTime reservationDateTime) {
        this.name = name;
        this.email = email;
        this.partySize = partySize;
        this.reservationDateTime = reservationDateTime;
        this.createdAt = LocalDateTime.now();
    }

    // Getters and Setters
    public Long getId() { return id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public int getPartySize() { return partySize; }
    public void setPartySize(int partySize) { this.partySize = partySize; }

    public LocalDateTime getReservationDateTime() { return reservationDateTime; }
    public void setReservationDateTime(LocalDateTime reservationDateTime) { this.reservationDateTime = reservationDateTime; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    @Override
    public String toString() {
        return "Reservation{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", partySize=" + partySize +
                ", reservationDateTime=" + reservationDateTime +
                ", createdAt=" + createdAt +
                '}';
    }
}