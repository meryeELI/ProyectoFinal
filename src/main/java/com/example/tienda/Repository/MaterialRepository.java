package com.example.tienda.Repository;

import com.example.tienda.model.Maquina;
import com.example.tienda.model.Material;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MaterialRepository  extends JpaRepository<Material, Long> {
}
