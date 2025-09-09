package com.example.tienda.Repository;

import com.example.tienda.model.Maquina;
import com.example.tienda.model.MovimientoMaterial;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovRepository  extends JpaRepository<MovimientoMaterial, Long> {
}
