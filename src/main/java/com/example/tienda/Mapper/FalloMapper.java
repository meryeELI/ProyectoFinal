package com.example.tienda.Mapper;

import com.example.tienda.DTO.FalloDTO;
import com.example.tienda.model.fallo;

public class FalloMapper {
    public static FalloDTO toDTO(fallo entity) {
        FalloDTO dto = new FalloDTO();
        dto.setId(entity.getId());
        dto.setDescripcion(entity.getDescripcion());
        dto.setEstado(entity.getEstado());
        dto.setFechaReporte(entity.getFechaReporte());
        dto.setMaquinaNombre(entity.getMaquina().getNombre());
        dto.setParteNombre(entity.getParte().getNombreParte());
        return dto;
    }
}
