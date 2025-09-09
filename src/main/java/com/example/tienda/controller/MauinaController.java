package com.example.tienda.controller;

import com.example.tienda.DTO.MaquinaDTO;
import com.example.tienda.Mapper.MauinaMapper;
import com.example.tienda.Service.MaquinaService;
import com.example.tienda.model.Maquina;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/maquinas")
@Tag(name = "Maquinas", description = "Endpoints para gestionar máquinas")
public class MauinaController {
    private final MaquinaService service;

    public MauinaController(MaquinaService service) { this.service = service; }

    @PostMapping
    @Operation(summary = "Crear una máquina", description = "Crea una nueva máquina asignándole un proveedor existente")
    public MaquinaDTO crear(@RequestBody Maquina maquina, @RequestParam Long proveedorId) {
        return MauinaMapper.toDTO(service.crear(maquina, proveedorId));
    }

    @GetMapping
    @Operation(summary = "Listar máquinas", description = "Obtiene la lista de todas las máquinas registradas")
    public List<MaquinaDTO> listar() {
        return service.listar().stream().map(MauinaMapper::toDTO).toList();
    }
}
