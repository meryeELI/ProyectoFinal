package com.example.tienda.Mapper;


import com.example.tienda.DTO.RepresentanteDTO;
import com.example.tienda.model.Proveedor;

public class RepresentanteMapper {

    public static RepresentanteDTO toDTO(Proveedor entity) {
        RepresentanteDTO dto = new RepresentanteDTO();
        dto.setId(entity.getId());
        dto.setNombre(entity.getNombre());
        dto.setDui(entity.getDui());
        dto.setCorreo(entity.getCorreo());
        dto.setDireccion(entity.getDireccion());
        dto.setTelefono(entity.getTelefono());
        return dto;
    }
}
