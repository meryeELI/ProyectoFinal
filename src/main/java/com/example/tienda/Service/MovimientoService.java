package com.example.tienda.Service;

import com.example.tienda.model.Material;
import com.example.tienda.model.MovimientoMaterial;
import com.example.tienda.Repository.MaterialRepository;
import com.example.tienda.Repository.MovRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovimientoService {
    private final MovRepository movimientoRepo;
    private final MaterialRepository materialRepo;

    public MovimientoService(MovRepository movimientoRepo, MaterialRepository materialRepo) {
        this.movimientoRepo = movimientoRepo;
        this.materialRepo = materialRepo;
    }

    public MovimientoMaterial crearMovimiento(MovimientoMaterial movimiento, Long materialId) {
        Material material = materialRepo.findById(materialId)
                .orElseThrow(() -> new RuntimeException("Material no encontrado"));
        movimiento.setMaterial(material);

        // Ajustar stock automáticamente
        if ("Entrada".equalsIgnoreCase(movimiento.getTipoMov())) {
            material.setStockActual(material.getStockActual() + movimiento.getCantidad());
        } else if ("Salida".equalsIgnoreCase(movimiento.getTipoMov())) {
            material.setStockActual(material.getStockActual() - movimiento.getCantidad());
        }

        materialRepo.save(material);
        return movimientoRepo.save(movimiento);
    }

    public List<MovimientoMaterial> listar() {
        return movimientoRepo.findAll();
    }
}
