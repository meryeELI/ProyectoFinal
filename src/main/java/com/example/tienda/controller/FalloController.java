package com.example.tienda.controller;

import com.example.tienda.DTO.FalloDTO;
import com.example.tienda.Mapper.FalloMapper;
import com.example.tienda.Service.FalloService;
import com.example.tienda.model.fallo;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/fallos")
@Tag(name = "Fallos", description = "Endpoints para gestionar fallos de máquinas y partes")
public class FalloController {
    private final FalloService service;

    public FalloController(FalloService service) { this.service = service; }

    @PostMapping
    @Operation(summary = "Registrar un fallo", description = "Crea un nuevo fallo para una máquina y una parte determinada")
    public FalloDTO crear(@RequestBody fallo fallo,
                          @RequestParam Long parteId,
                          @RequestParam Long maquinaId) {
        return FalloMapper.toDTO(service.crear(fallo, parteId, maquinaId));
    }

    @GetMapping
    @Operation(summary = "Listar fallos", description = "Obtiene la lista de todos los fallos registrados")
    public List<FalloDTO> listar() {
        return service.listar().stream().map(FalloMapper::toDTO).toList();
    }
}
