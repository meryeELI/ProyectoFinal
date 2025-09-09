package com.example.tienda.Mapper;

import com.example.tienda.DTO.MaterialDTO;
import com.example.tienda.model.Material;

public class MaterialMapper {
    public static MaterialDTO toDTO(Material entity) {
        MaterialDTO dto = new MaterialDTO();
        dto.setId(entity.getId());
        dto.setNombre(entity.getNombre());
        dto.setDescripcion(entity.getDescripcion());
        dto.setUnidadMedida(entity.getUnidadMedida());
        dto.setStockActual(entity.getStockActual());
        dto.setStockMinimo(entity.getStockMinimo());
        dto.setPrecioUnitario(entity.getPrecioUnitario());
        dto.setProveedorNombre(entity.getProveedor().getNombre()); // 👈 nombre del proveedor
        return dto;
    }
}
