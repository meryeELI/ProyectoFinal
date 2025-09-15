package com.example.tienda.Repository;

import com.example.tienda.model.Maquina;
import com.example.tienda.model.parte;
import org.springframework.data.jpa.repository.JpaRepository;

public interface parteRepository  extends JpaRepository<parte, Long> {
}
