package com.example.tienda.controller;
import com.example.tienda.DTO.QuejaDTO;
import com.example.tienda.Service.QuejaService;
import com.example.tienda.Service.RepresentanteService;
import com.example.tienda.Service.UsuarioService;
import com.example.tienda.model.Queja;
import com.example.tienda.model.Proveedor;
import com.example.tienda.model.usuario;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/quejas")
public class QuejaController {

    private final QuejaService quejaService;
    private final RepresentanteService representanteService;
    private final UsuarioService usuarioService;

    public QuejaController(QuejaService quejaRepo, RepresentanteService representanteService, UsuarioService usuarioService) {
        this.quejaService = quejaRepo;
        this.representanteService = representanteService;
        this.usuarioService = usuarioService;
    }

    @Operation(summary = "Crear una nueva queja asignada a un representante")
    @PostMapping
    public Queja crearQueja(@RequestBody QuejaDTO quejaDTO) {
        Queja queja = new Queja();
        queja.setDescripcion(quejaDTO.getDescripcion());
        queja.setEstado(quejaDTO.getEstado());

        // Buscar representante y asignar
        Proveedor rep = representanteService.obtenerPorId(quejaDTO.getRepresentanteId());
        queja.setRepresentante(rep);

        usuario user = usuarioService.obtenerPorId(quejaDTO.getUsuarioId());
        queja.setUsuario(user);

        return quejaService.guardar(queja);
    }

    @Operation(summary = "Listar todas las quejas")
    @GetMapping
    public List<Queja> listarQuejas() {
        return quejaService.listarTodas();
    }
    @Operation(summary = "Actualizar una queja por ID")
    @PutMapping("/{id}")
    public Queja actualizarQueja(@PathVariable Long id, @RequestBody QuejaDTO dto) {
        return quejaService.actualizar(id, dto);
    }

    @Operation(summary = "Eliminar una queja por ID")
    @DeleteMapping("/{id}")
    public void eliminarQueja(@PathVariable Long id) {
        quejaService.eliminar(id);
    }

}
