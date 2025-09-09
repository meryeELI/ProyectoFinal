package com.example.tienda.controller;

import com.example.tienda.DTO.ParteDTO;
import com.example.tienda.Mapper.ParteMapper;
import com.example.tienda.Service.ParteService;
import com.example.tienda.model.parte;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/partes")
@Tag(name = "Partes", description = "Endpoints para gestionar partes de las máquinas")
public class ParteController {
    private final ParteService service;

    public ParteController(ParteService service) { this.service = service; }

    @PostMapping
    @Operation(summary = "Crear una parte", description = "Crea una nueva parte y la asigna a una máquina existente")
    public ParteDTO crear(@RequestBody parte p, @RequestParam Long maquinaId) {
        return ParteMapper.toDTO(service.crear(p, maquinaId));
    }

    @GetMapping
    @Operation(summary = "Listar partes", description = "Obtiene la lista de todas las partes registradas")
    public List<ParteDTO> listar() {
        return service.listar().stream().map(ParteMapper::toDTO).toList();
    }
}
