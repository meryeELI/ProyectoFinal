package com.example.tienda.Mapper;

import com.example.tienda.DTO.MaquinaDTO;
import com.example.tienda.model.Maquina;

public class MauinaMapper {
    public static MaquinaDTO toDTO(Maquina entity) {
        MaquinaDTO dto = new MaquinaDTO();
        dto.setId(entity.getId());
        dto.setNombre(entity.getNombre());
        dto.setModelo(entity.getModelo());
        dto.setProveedorNombre(entity.getProveedor().getNombre());
        return dto;
    }
}
