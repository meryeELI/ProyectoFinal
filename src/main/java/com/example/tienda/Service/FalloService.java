package com.example.tienda.Service;

import com.example.tienda.model.fallo;
import com.example.tienda.Repository.FalloRepository;
import com.example.tienda.Repository.MaquinaRepository;
import com.example.tienda.Repository.parteRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FalloService {
    private final FalloRepository falloRepo;
    private final parteRepository parteRepo;
    private final MaquinaRepository maquinaRepo;

    public FalloService(FalloRepository falloRepo, parteRepository parteRepo, MaquinaRepository maquinaRepo) {
        this.falloRepo = falloRepo;
        this.parteRepo = parteRepo;
        this.maquinaRepo = maquinaRepo;
    }

    public fallo crear(fallo fallo, Long parteId, Long maquinaId) {
        var parte = parteRepo.findById(parteId)
                .orElseThrow(() -> new RuntimeException("Parte no encontrada"));
        var maquina = maquinaRepo.findById(maquinaId)
                .orElseThrow(() -> new RuntimeException("Máquina no encontrada"));
        fallo.setParte(parte);
        fallo.setMaquina(maquina);
        return falloRepo.save(fallo);
    }

    public List<fallo> listar() { return falloRepo.findAll(); }
}
