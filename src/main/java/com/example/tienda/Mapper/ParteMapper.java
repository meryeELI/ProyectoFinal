package com.example.tienda.Mapper;

import com.example.tienda.DTO.ParteDTO;
import com.example.tienda.model.parte;

public class ParteMapper {
    public static ParteDTO toDTO(parte entity) {
        ParteDTO dto = new ParteDTO();
        dto.setId(entity.getId());
        dto.setNombreParte(entity.getNombreParte());
        dto.setDescripcion(entity.getDescripcion());
        dto.setCosto(entity.getCosto());
        dto.setMaquinaNombre(entity.getMaquina().getNombre());
        return dto;
    }
}
