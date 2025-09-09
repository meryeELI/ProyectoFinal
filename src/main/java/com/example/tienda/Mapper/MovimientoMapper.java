package com.example.tienda.Mapper;


import com.example.tienda.DTO.MovDTO;
import com.example.tienda.model.MovimientoMaterial;

public class MovimientoMapper {

    public static MovDTO toDTO(MovimientoMaterial entity) {
        MovDTO dto = new MovDTO();
        dto.setId(entity.getId());
        dto.setTipoMov(entity.getTipoMov());
        dto.setObservacion(entity.getObservacion());
        dto.setCantidad(entity.getCantidad());
        dto.setFecha(entity.getFecha());
        dto.setMaterialNombre(entity.getMaterial().getNombre()); // 👈 nombre del material
        return dto;
    }
}
