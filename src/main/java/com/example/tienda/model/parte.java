package com.example.tienda.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "parte")
public class parte {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "maquina_id")
    @JsonBackReference(value = "rep-maquina")
    private Maquina maquina;

    private String nombreParte;
    private  String descripcion;
    private float costo;

    @OneToMany(mappedBy = "parte", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonBackReference(value = "rep-fallo")
    private List<fallo> fallo;

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

    public String getNombreParte() {
        return nombreParte;
    }

    public void setNombreParte(String nombreParte) {
        this.nombreParte = nombreParte;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public float getCosto() {
        return costo;
    }

    public void setCosto(float costo) {
        this.costo = costo;
    }

    public List<fallo> getFalloparte() {
        return fallo;
    }

    public void setFalloparte(List<fallo> falloparte) {
        this.fallo = falloparte;
    }
}
