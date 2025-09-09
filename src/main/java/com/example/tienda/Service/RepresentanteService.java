package com.example.tienda.Service;


import com.example.tienda.DTO.RepresentanteCreatesDTO;
import com.example.tienda.Repository.ProveedorRepository;
import com.example.tienda.model.Proveedor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RepresentanteService {
    private final ProveedorRepository repository;


    public RepresentanteService(ProveedorRepository repository) {
        this.repository = repository;
    }

    public List<Proveedor> listarTodas() {
        return repository.findAll();
    }

    public Proveedor guardar(Proveedor proveedor) {
        return repository.save(proveedor);
    }

    public Proveedor obtenerPorId(Long id) {
        return repository.findById(id).orElse(null);
    }

    public void eliminar(Long id) {
        repository.deleteById(id);
    }

    public Proveedor actualizar(Long id, RepresentanteCreatesDTO datos) {
        Proveedor rep = obtenerPorId(id);
        rep.setNombre(datos.getNombre());
        rep.setCorreo(datos.getEmail());
        return repository.save(rep);
    }


}
