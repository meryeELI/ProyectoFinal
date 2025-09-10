package com.example.tienda;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class MaterialControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void testGetMaterialesBajoStock() throws Exception {
        mockMvc.perform(get("/api/materiales/bajo-stock"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].nombre").value(org.hamcrest.Matchers.equalToIgnoringCase("Tela Roja")))

                .andExpect(jsonPath("$[0].stockActual").value(10))
                .andExpect(jsonPath("$[0].stockMinimo").value(15));
    }
}
