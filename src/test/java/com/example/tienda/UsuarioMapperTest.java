package com.example.tienda;

import com.example.tienda.DTO.UsuarioDTO;
import com.example.tienda.Mapper.UsuarioMapper;
import com.example.tienda.model.usuario;
import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;

class UsuarioMapperTest {

    @Test
    void shouldMapUsuarioToDTO() {
        usuario entity = new usuario();
        entity.setNombre("Mery");
        entity.setEmail("mery@email.com");

        UsuarioDTO dto = UsuarioMapper.toDTO(entity);

        assertThat(dto.getNombre()).isEqualTo("Mery");
        assertThat(dto.getEmail()).isEqualTo("mery@email.com");
    }

    @Test
    void shouldMapDTOToUsuario() {
        UsuarioDTO dto = new UsuarioDTO();
        dto.setNombre("Juan");
        dto.setEmail("juan@email.com");

        usuario entity = UsuarioMapper.toEntity(dto);

        assertThat(entity.getNombre()).isEqualTo("Juan");
        assertThat(entity.getEmail()).isEqualTo("juan@email.com");
    }
}
