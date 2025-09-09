package com.example.tienda.Repository;


import org.springframework.data.jpa.repository.JpaRepository;
import com.example.tienda.model.Queja;

public interface QuejaRepository extends JpaRepository<Queja, Long> {
}

