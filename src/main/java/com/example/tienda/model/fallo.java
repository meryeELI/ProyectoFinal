package com.example.tienda.model;


import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "fallo")
public class fallo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "parte_id")
    @JsonBackReference(value = "rep-parte")
    private parte parte;

    @ManyToOne(optional = false)
    @JoinColumn(name = "maquina_id")
    @JsonBackReference(value = "rep-maquina")
    private Maquina maquina;

    private LocalDateTime fechaReporte = LocalDateTime.now();

    private String Descripcion;
    private String estado;

    public parte getParte() {
        return parte;
    }

    public void setParte(parte parte) {
        this.parte = parte;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Maquina getMaquina() {
        return maquina;
    }

    public void setMaquina(Maquina maquina) {
        this.maquina = maquina;
    }

    public LocalDateTime getFechaReporte() {
        return fechaReporte;
    }

    public void setFechaReporte(LocalDateTime fechaReporte) {
        this.fechaReporte = fechaReporte;
    }

    public String getDescripcion() {
        return Descripcion;
    }

    public void setDescripcion(String descripcion) {
        Descripcion = descripcion;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }
}
