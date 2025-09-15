package com.example.tienda.controller;

import com.example.tienda.DTO.CrearMaterialDTO;
import com.example.tienda.DTO.MaterialDTO;
import com.example.tienda.Mapper.MaterialMapper;
import com.example.tienda.Service.MaterialService;
import com.example.tienda.model.Material;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/materiales")
public class MaterialController {
    private final MaterialService materialService;

    public MaterialController(MaterialService materialService) {
        this.materialService = materialService;
    }

    @Operation(summary = "Crear un nuevo material", description = "Crea un material asignado a un proveedor existente")
    @ApiResponses({
            @ApiResponse(responseCode = "201", description = "Material creado correctamente"),
            @ApiResponse(responseCode = "400", description = "Datos inválidos"),
            @ApiResponse(responseCode = "404", description = "Proveedor no encontrado"),
            @ApiResponse(responseCode = "500", description = "Error interno del servidor")
    })
    @PostMapping
    public MaterialDTO crearMaterial(@RequestBody CrearMaterialDTO dto) {
        Material material = new Material();
        material.setNombre(dto.getNombre());
        material.setDescripcion(dto.getDescripcion());
        material.setUnidadMedida(dto.getUnidadMedida());
        material.setStockActual(dto.getStockActual());
        material.setStockMinimo(dto.getStockMinimo());
        material.setPrecioUnitario(dto.getPrecioUnitario());

        Material saved = materialService.crear(material, dto.getProveedorId());
        return MaterialMapper.toDTO(saved);
    }

    @Operation(summary = "Listar todos los materiales")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "Lista obtenida correctamente"),
            @ApiResponse(responseCode = "500", description = "Error interno del servidor")
    })
    @GetMapping
    public List<MaterialDTO> listarMateriales() {
        return materialService.listar()
                .stream()
                .map(MaterialMapper::toDTO)
                .toList();
    }

    @Operation(summary = "Obtener un material por ID")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "Material encontrado"),
            @ApiResponse(responseCode = "404", description = "Material no encontrado"),
            @ApiResponse(responseCode = "500", description = "Error interno del servidor")
    })
    @GetMapping("/{id}")
    public MaterialDTO obtenerPorId(@PathVariable Long id) {
        return MaterialMapper.toDTO(materialService.obtenerPorId(id));
    }

    @Operation(summary = "Eliminar un material por ID")
    @ApiResponses({
            @ApiResponse(responseCode = "204", description = "Material eliminado correctamente"),
            @ApiResponse(responseCode = "404", description = "Material no encontrado"),
            @ApiResponse(responseCode = "500", description = "Error interno del servidor")
    })
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id) {
        materialService.eliminar(id);
    }

    @Operation(summary = "Listar materiales con bajo stock",
            description = "Devuelve los materiales cuyo stock actual es menor al stock mínimo configurado")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "Lista de materiales con bajo stock obtenida correctamente"),
            @ApiResponse(responseCode = "500", description = "Error interno del servidor")
    })
    @GetMapping("/bajo-stock")
    public List<MaterialDTO> listarBajoStock() {
        return materialService.listarBajoStock()
                .stream()
                .map(MaterialMapper::toDTO)
                .toList();
    }
}
