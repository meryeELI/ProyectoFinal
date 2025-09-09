package com.example.tienda.Config;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .components(new Components())
                .info(new Info()
                        .title("Microservicio Sistema de Quejas de Sitio")
                        .version("v1.0")
                        .description("API para la gestión de usuarios, representantes y quejas de un sitio web")
                        .contact(new Contact()
                                .name("Equipo de Desarrollo")
                                .email("soporte@tusitio.com"))
                        .license(new License().name("Apache 2.0").url("http://springdoc.org"))
                );
    }
}
