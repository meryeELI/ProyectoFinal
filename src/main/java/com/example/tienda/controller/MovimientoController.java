package com.example.tienda.controller;

import com.example.tienda.DTO.crearMovimientoDTO;
import com.example.tienda.DTO.MovDTO;
import com.example.tienda.Mapper.MovimientoMapper;
import com.example.tienda.Service.MovimientoService;
import com.example.tienda.model.MovimientoMaterial;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/movimientos")
public class MovimientoController {
    private final MovimientoService movimientoService;

    public MovimientoController(MovimientoService movimientoService) {
        this.movimientoService = movimientoService;
    }

    @PostMapping
    @Operation(summary = "Crear un nuevo movimiento", description = "Crea un movimiento tipoMov: Salida - Entrada")
    @ApiResponses({
            @ApiResponse(responseCode = "201", description = "movimiento creado correctamente"),
            @ApiResponse(responseCode = "400", description = "Datos inválidos"),
            @ApiResponse(responseCode = "404", description = "movimiento no encontrado"),
            @ApiResponse(responseCode = "500", description = "Error interno del servidor")
    })
    public MovDTO crearMovimiento(@RequestBody crearMovimientoDTO dto) {
        MovimientoMaterial movimiento = new MovimientoMaterial();
        movimiento.setTipoMov(dto.getTipoMov());
        movimiento.setObservacion(dto.getObservacion());
        movimiento.setCantidad(dto.getCantidad());

        MovimientoMaterial saved = movimientoService.crearMovimiento(movimiento, dto.getMaterialId());
        return MovimientoMapper.toDTO(saved);
    }

    @GetMapping
    public List<MovDTO> listarMovimientos() {
        return movimientoService.listar()
                .stream()
                .map(MovimientoMapper::toDTO)
                .toList();
    }
}
