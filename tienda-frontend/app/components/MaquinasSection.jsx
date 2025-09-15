import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table.jsx'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Plus, Edit, Trash2, Wrench, Settings } from 'lucide-react'

const MaquinasSection = () => {
  const [maquinas, setMaquinas] = useState([])
  const [proveedores, setProveedores] = useState([])
  const [loading, setLoading] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingMaquina, setEditingMaquina] = useState(null)
  const [formData, setFormData] = useState({
    nombre: '',
    modelo: '',
    proveedorId: ''
  })

  // Simular datos de ejemplo
  useEffect(() => {
    setMaquinas([
      {
        id: 1,
        nombre: 'Torno CNC',
        modelo: 'TX-2000',
        proveedor: { id: 1, nombre: 'Maquinaria Industrial SA' },
        estado: 'Operativa',
        fechaInstalacion: '2023-01-15'
      },
      {
        id: 2,
        nombre: 'Fresadora Universal',
        modelo: 'FU-500',
        proveedor: { id: 2, nombre: 'Herramientas Precisión' },
        estado: 'Mantenimiento',
        fechaInstalacion: '2022-08-20'
      },
      {
        id: 3,
        nombre: 'Compresor de Aire',
        modelo: 'CA-100',
        proveedor: { id: 3, nombre: 'Equipos Neumáticos' },
        estado: 'Operativa',
        fechaInstalacion: '2023-03-10'
      }
    ])

    setProveedores([
      { id: 1, nombre: 'Maquinaria Industrial SA' },
      { id: 2, nombre: 'Herramientas Precisión' },
      { id: 3, nombre: 'Equipos Neumáticos' }
    ])
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSelectChange = (value, field) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí se haría la llamada a la API
    console.log('Datos del formulario:', formData)
    setIsDialogOpen(false)
    resetForm()
  }

  const resetForm = () => {
    setFormData({
      nombre: '',
      modelo: '',
      proveedorId: ''
    })
    setEditingMaquina(null)
  }

  const handleEdit = (maquina) => {
    setEditingMaquina(maquina)
    setFormData({
      nombre: maquina.nombre,
      modelo: maquina.modelo,
      proveedorId: maquina.proveedor.id.toString()
    })
    setIsDialogOpen(true)
  }

  const handleDelete = (id) => {
    if (confirm('¿Está seguro de que desea eliminar esta máquina?')) {
      // Aquí se haría la llamada a la API para eliminar
      console.log('Eliminando máquina con ID:', id)
    }
  }

  const getEstadoBadge = (estado) => {
    switch (estado) {
      case 'Operativa':
        return <Badge variant="default">Operativa</Badge>
      case 'Mantenimiento':
        return <Badge variant="secondary">Mantenimiento</Badge>
      case 'Fuera de Servicio':
        return <Badge variant="destructive">Fuera de Servicio</Badge>
      default:
        return <Badge variant="outline">{estado}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      {/* Encabezado y Botón Agregar */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Gestión de Máquinas</h2>
          <p className="text-muted-foreground">Administra el inventario de máquinas y equipos</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={resetForm}>
              <Plus className="h-4 w-4 mr-2" />
              Agregar Máquina
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>
                {editingMaquina ? 'Editar Máquina' : 'Agregar Nueva Máquina'}
              </DialogTitle>
              <DialogDescription>
                {editingMaquina ? 'Modifica los datos de la máquina' : 'Completa la información de la nueva máquina'}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="nombre">Nombre</Label>
                <Input
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  placeholder="Nombre de la máquina"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="modelo">Modelo</Label>
                <Input
                  id="modelo"
                  name="modelo"
                  value={formData.modelo}
                  onChange={handleInputChange}
                  placeholder="Modelo de la máquina"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="proveedorId">Proveedor</Label>
                <Select value={formData.proveedorId} onValueChange={(value) => handleSelectChange(value, 'proveedorId')}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar proveedor" />
                  </SelectTrigger>
                  <SelectContent>
                    {proveedores.map(proveedor => (
                      <SelectItem key={proveedor.id} value={proveedor.id.toString()}>
                        {proveedor.nombre}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancelar
                </Button>
                <Button type="submit">
                  {editingMaquina ? 'Actualizar' : 'Crear'}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Estadísticas Rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Máquinas</CardTitle>
            <Wrench className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{maquinas.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Operativas</CardTitle>
            <Settings className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {maquinas.filter(m => m.estado === 'Operativa').length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">En Mantenimiento</CardTitle>
            <Settings className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">
              {maquinas.filter(m => m.estado === 'Mantenimiento').length}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabla de Máquinas */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Máquinas</CardTitle>
          <CardDescription>
            {maquinas.length} máquinas registradas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nombre</TableHead>
                <TableHead>Modelo</TableHead>
                <TableHead>Proveedor</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Fecha Instalación</TableHead>
                <TableHead>Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {maquinas.map((maquina) => (
                <TableRow key={maquina.id}>
                  <TableCell className="font-medium">{maquina.nombre}</TableCell>
                  <TableCell>{maquina.modelo}</TableCell>
                  <TableCell>{maquina.proveedor.nombre}</TableCell>
                  <TableCell>
                    {getEstadoBadge(maquina.estado)}
                  </TableCell>
                  <TableCell>{new Date(maquina.fechaInstalacion).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(maquina)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(maquina.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

export default MaquinasSection

