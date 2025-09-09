package com.example.tienda.Mapper;


import com.example.tienda.DTO.RepresentanteDTO;
import com.example.tienda.model.Representante;

public class RepresentanteMapper {

    public static RepresentanteDTO toDTO(Representante entity) {
        RepresentanteDTO dto = new RepresentanteDTO();
        dto.setId(entity.getId());
        dto.setNombre(entity.getNombre());
        dto.setDui(entity.getDui());
        return dto;
    }
}
