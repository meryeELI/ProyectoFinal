package com.example.tienda.Mapper;

import com.example.tienda.DTO.UsuarioDTO;
import com.example.tienda.DTO.QuejaDTO;
import com.example.tienda.model.usuario;
import com.example.tienda.model.Queja;

public class UsuarioMapper {

    public static UsuarioDTO toDTO(usuario entity) {
        UsuarioDTO dto = new UsuarioDTO();
        dto.setId(entity.getId());
        dto.setNombre(entity.getNombre());
        dto.setEmail(entity.getEmail());
        return dto;
    }

    public static usuario toEntity(UsuarioDTO dto) {
        usuario entity = new usuario();

        entity.setNombre(dto.getNombre());
        entity.setEmail(dto.getEmail());
        entity.setPassword(dto.password());
        return entity;
    }

    public static QuejaDTO toQuejaDTO(Queja entity) {
        QuejaDTO dto = new QuejaDTO();

        dto.setDescripcion(entity.getDescripcion());
        dto.setUsuarioId(entity.getUsuario().getId());

        if (entity.getRepresentante() != null) {
            dto.setRepresentanteId(entity.getRepresentante().getId());
            dto.setRepresentanteNombre(entity.getRepresentante().getNombre()); // 👈 Aquí
        }

        dto.setEstado(entity.getEstado());

        return dto;
    }


}
