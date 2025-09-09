package com.example.tienda.Repository;

import com.example.tienda.model.fallo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FalloRepository  extends JpaRepository<fallo, Long> {
}
