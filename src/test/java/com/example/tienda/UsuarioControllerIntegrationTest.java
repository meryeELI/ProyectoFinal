package com.example.tienda;

import com.example.tienda.model.usuario;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test") // Usar application-test.properties
class UsuarioControllerIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper mapper; // Para convertir objetos a JSON

    @Test
    void shouldCreateAndListUsuario() throws Exception {
        usuario user = new usuario();
        user.setNombre("Mery Acevedo");
        user.setEmail("mery@email.com");
        user.setPassword("123456");

        // Crear usuario
        mockMvc.perform(post("/api/usuario")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(mapper.writeValueAsString(user)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.nombre").value("Mery Acevedo"))
                .andExpect(jsonPath("$.email").value("mery@email.com"));


        // Listar usuarios
        mockMvc.perform(get("/api/usuario"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].nombre").value("Mery Acevedo"));
    }
}
