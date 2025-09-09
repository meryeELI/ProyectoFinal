package com.example.tienda.controller;

import com.example.tienda.Service.RepresentanteService;
import com.example.tienda.DTO.RepresentanteDTO;
import com.example.tienda.DTO.RepresentanteCreatesDTO;
import com.example.tienda.Mapper.RepresentanteMapper;
import com.example.tienda.model.Proveedor;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/representante")
public class RepresentanteController {

    private final RepresentanteService service;

    public RepresentanteController(RepresentanteService service) {
        this.service = service;
    }

    @Operation(summary = "Crear un nuevo representante")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "representante creado exitosamente"),
            @ApiResponse(responseCode = "400", description = "Datos de entrada inválidos"),
            @ApiResponse(responseCode = "500", description = "Error interno del servidor")
    })
    @PostMapping
    public RepresentanteDTO crearRepresentante(@RequestBody RepresentanteCreatesDTO dto) {
        Proveedor nuevo = new Proveedor();
        nuevo.setNombre(dto.getNombre());
        nuevo.setDui(dto.getDui());

        Proveedor guardado = service.guardar(nuevo);
        return RepresentanteMapper.toDTO(guardado);
    }

    @Operation(summary = "Listar todos los representantes")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Listado de representantes obtenido correctamente"),
            @ApiResponse(responseCode = "500", description = "Error interno del servidor")
    })
    @GetMapping
    public List<RepresentanteDTO> listarRepresentantes() {
        return service.listarTodas()
                .stream()
                .map(RepresentanteMapper::toDTO)
                .toList();
    }

    @Operation(summary = "Actualizar un representante por ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "representante obtenidos correctamente"),
            @ApiResponse(responseCode = "404", description = "representante no encontrado"),
            @ApiResponse(responseCode = "500", description = "Error interno del servidor")
    })
    @PutMapping("/{id}")
    public RepresentanteDTO actualizarRepresentante(@PathVariable Long id,
                                                    @RequestBody RepresentanteCreatesDTO datos) {
        Proveedor actualizado = service.actualizar(id, datos);
        return RepresentanteMapper.toDTO(actualizado);
    }

    @Operation(summary = "Eliminar un representante por ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "representante eliminado correctamente"),
            @ApiResponse(responseCode = "404", description = "representante no encontrado"),
            @ApiResponse(responseCode = "500", description = "Error interno del servidor")
    })
    @DeleteMapping("/{id}")
    public void eliminarRepresentante(@PathVariable Long id) {
        service.eliminar(id);
    }
}
