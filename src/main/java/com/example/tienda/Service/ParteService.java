package com.example.tienda.Service;

import com.example.tienda.model.parte;
import com.example.tienda.Repository.parteRepository;
import com.example.tienda.Repository.MaquinaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ParteService {
    private final parteRepository parteRepo;
    private final MaquinaRepository maquinaRepo;

    public ParteService(parteRepository parteRepo, MaquinaRepository maquinaRepo) {
        this.parteRepo = parteRepo;
        this.maquinaRepo = maquinaRepo;
    }

    public parte crear(parte p, Long maquinaId) {
        var maquina = maquinaRepo.findById(maquinaId)
                .orElseThrow(() -> new RuntimeException("Máquina no encontrada"));
        p.setMaquina(maquina);
        return parteRepo.save(p);
    }

    public List<parte> listar() { return parteRepo.findAll(); }
}
