package com.example.tienda.model;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "representante")
public class Representante {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    private String dui;
    private String correo;

    @OneToMany(mappedBy = "representante", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonBackReference(value = "rep-quejas")
    private List<Queja> quejas;

    // Getters y setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }

    public String getCorreo() { return correo; }
    public void setCorreo(String correo) { this.correo = correo; }

    public List<Queja> getQuejas() { return quejas; }
    public void setQuejas(List<Queja> quejas) { this.quejas = quejas; }

    public String getDui
            () {return dui;
    }


    public void setDui(String dui) {this.dui = dui;
    }
}
