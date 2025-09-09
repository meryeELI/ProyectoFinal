package com.example.tienda.Service;


import com.example.tienda.DTO.RepresentanteCreatesDTO;
import com.example.tienda.Repository.RepredentsnteRepository;
import com.example.tienda.model.Representante;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RepresentanteService {
    private final RepredentsnteRepository repository;


    public RepresentanteService(RepredentsnteRepository repository) {
        this.repository = repository;
    }

    public List<Representante> listarTodas() {
        return repository.findAll();
    }

    public Representante guardar(Representante representante) {
        return repository.save(representante);
    }

    public Representante obtenerPorId(Long id) {
        return repository.findById(id).orElse(null);
    }

    public void eliminar(Long id) {
        repository.deleteById(id);
    }

    public Representante actualizar(Long id, RepresentanteCreatesDTO datos) {
        Representante rep = obtenerPorId(id);
        rep.setNombre(datos.getNombre());
        rep.setCorreo(datos.getEmail());
        return repository.save(rep);
    }


}
