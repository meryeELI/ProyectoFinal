package com.example.tienda.Service;

import com.example.tienda.model.Maquina;
import com.example.tienda.Repository.MaquinaRepository;
import com.example.tienda.Repository.ProveedorRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MaquinaService {
    private final MaquinaRepository maquinaRepo;
    private final ProveedorRepository proveedorRepo;

    public MaquinaService(MaquinaRepository maquinaRepo, ProveedorRepository proveedorRepo) {
        this.maquinaRepo = maquinaRepo;
        this.proveedorRepo = proveedorRepo;
    }

    public Maquina crear(Maquina maquina, Long proveedorId) {
        var proveedor = proveedorRepo.findById(proveedorId)
                .orElseThrow(() -> new RuntimeException("Proveedor no encontrado"));
        maquina.setProveedor(proveedor);
        return maquinaRepo.save(maquina);
    }

    public List<Maquina> listar() { return maquinaRepo.findAll(); }

    public Maquina obtenerPorId(Long id) {
        return maquinaRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Maquina no encontrada"));
    }

    public void eliminar(Long id) { maquinaRepo.deleteById(id); }
}
