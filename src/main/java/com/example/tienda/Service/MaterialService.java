package com.example.tienda.Service;

import com.example.tienda.model.Material;
import com.example.tienda.model.Proveedor;
import com.example.tienda.Repository.MaterialRepository;
import com.example.tienda.Repository.ProveedorRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MaterialService {
    private final MaterialRepository materialRepo;
    private final ProveedorRepository proveedorRepo;

    public MaterialService(MaterialRepository materialRepo, ProveedorRepository proveedorRepo) {
        this.materialRepo = materialRepo;
        this.proveedorRepo = proveedorRepo;
    }

    public Material crear(Material material, Long proveedorId) {
        Proveedor proveedor = proveedorRepo.findById(proveedorId)
                .orElseThrow(() -> new RuntimeException("Proveedor no encontrado"));
        material.setProveedor(proveedor);
        return materialRepo.save(material);
    }

    public List<Material> listar() {
        return materialRepo.findAll();
    }

    public Material obtenerPorId(Long id) {
        return materialRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Material no encontrado"));
    }

    public void eliminar(Long id) {
        materialRepo.deleteById(id);
    }
    public List<Material> listarBajoStock() {
        return materialRepo.findAll()
                .stream()
                .filter(m -> m.getStockActual() < m.getStockMinimo())
                .toList();
    }

}
