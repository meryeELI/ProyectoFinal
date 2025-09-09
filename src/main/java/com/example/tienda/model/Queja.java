package com.example.tienda.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

@Entity
@Table(name = "quejas")
public class Queja {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String descripcion;
    private String estado; // Ejemplo: "Pendiente", "Resuelta"

    @ManyToOne(optional = false)
    @JoinColumn(name = "representante_id")
    @JsonBackReference(value = "rep-quejas")
    private Representante representante;

    @ManyToOne(optional = true)
    @JoinColumn(name = "usuario_id")
    @JsonBackReference(value = "usuario-quejas")
    private usuario usuario;

    public Queja(String descripcion, String estado) {
        this.descripcion = descripcion;
        this.estado = estado;
    }

    public Queja() {

    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getDescripcion() { return descripcion; }
    public void setDescripcion(String descripcion) { this.descripcion = descripcion; }

    public String getEstado() { return estado; }
    public void setEstado(String estado) { this.estado = estado; }

    public Representante getRepresentante() { return representante; }
    public void setRepresentante(Representante representante) { this.representante = representante; }

    public usuario getUsuario() { return usuario; }
    public void setUsuario(usuario usuario) { this.usuario = usuario; }
}

