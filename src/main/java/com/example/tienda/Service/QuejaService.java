package com.example.tienda.Service;


import com.example.tienda.DTO.QuejaDTO;
import com.example.tienda.model.Queja;
import com.example.tienda.Repository.QuejaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuejaService {

    private final QuejaRepository repository;
    private final RepresentanteService representanteService;
    private final UsuarioService usuarioService;

    public QuejaService(QuejaRepository repository, RepresentanteService representanteService, UsuarioService usuarioService) {
        this.repository = repository;
        this.representanteService = representanteService;
        this.usuarioService = usuarioService;
    }

    public List<Queja> listarTodas() {
        return repository.findAll();
    }

    public Queja guardar(Queja queja) {
        return repository.save(queja);
    }

    public Queja obtenerPorId(Long id) {
        return repository.findById(id).orElse(null);
    }

    public void eliminar(Long id) {
        repository.deleteById(id);
    }

    public Queja actualizar(Long id, QuejaDTO dto) {
        Queja queja = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Queja no encontrada"));
        queja.setDescripcion(dto.getDescripcion());
        queja.setEstado(dto.getEstado());
        queja.setRepresentante(representanteService.obtenerPorId(dto.getRepresentanteId()));
        queja.setUsuario(usuarioService.obtenerPorId(dto.getUsuarioId()));
        return repository.save(queja);
    }


}
