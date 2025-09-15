import { useState, useEffect } from 'react'
// import { Button } from '@/components/ui/button.jsx'
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
// import { Input } from '@/components/ui/input.jsx'
// import { Label } from '@/components/ui/label.jsx'
// import { Textarea } from '@/components/ui/textarea.jsx'
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table.jsx'
// import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog.jsx'
// import { Badge } from '@/components/ui/badge.jsx'
import { AlertTriangle, Plus, Edit, Trash2, Clock, CheckCircle, XCircle } from 'lucide-react'

const FallosSection = () => {
  const [fallos, setFallos] = useState([])
  const [maquinas, setMaquinas] = useState([])
  const [loading, setLoading] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingFallo, setEditingFallo] = useState(null)
  const [formData, setFormData] = useState({
    descripcion: '',
    fechaOcurrencia: '',
    gravedad: '',
    estado: 'Pendiente',
    maquinaId: '',
    solucion: ''
  })

  // Simular datos de ejemplo
  useEffect(() => {
    setFallos([
      {
        id: 1,
        descripcion: 'Sobrecalentamiento del motor principal',
        fechaOcurrencia: '2024-01-15T10:30:00',
        gravedad: 'Alta',
        estado: 'En Proceso',
        maquina: { id: 1, nombre: 'Torno CNC' },
        solucion: 'Revisión del sistema de refrigeración',
        fechaResolucion: null
      },
      {
        id: 2,
        descripcion: 'Fuga de aceite hidráulico',
        fechaOcurrencia: '2024-01-10T14:20:00',
        gravedad: 'Media',
        estado: 'Resuelto',
        maquina: { id: 2, nombre: 'Fresadora Universal' },
        solucion: 'Reemplazo de sellos hidráulicos',
        fechaResolucion: '2024-01-12T16:00:00'
      },
      {
        id: 3,
        descripcion: 'Ruido anormal en el compresor',
        fechaOcurrencia: '2024-01-20T09:15:00',
        gravedad: 'Baja',
        estado: 'Pendiente',
        maquina: { id: 3, nombre: 'Compresor de Aire' },
        solucion: '',
        fechaResolucion: null
      }
    ])

    setMaquinas([
      { id: 1, nombre: 'Torno CNC' },
      { id: 2, nombre: 'Fresadora Universal' },
      { id: 3, nombre: 'Compresor de Aire' }
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
      descripcion: '',
      fechaOcurrencia: '',
      gravedad: '',
      estado: 'Pendiente',
      maquinaId: '',
      solucion: ''
    })
    setEditingFallo(null)
  }

  const handleEdit = (fallo) => {
    setEditingFallo(fallo)
    setFormData({
      descripcion: fallo.descripcion,
      fechaOcurrencia: fallo.fechaOcurrencia.slice(0, 16), // Para datetime-local
      gravedad: fallo.gravedad,
      estado: fallo.estado,
      maquinaId: fallo.maquina.id.toString(),
      solucion: fallo.solucion || ''
    })
    setIsDialogOpen(true)
  }

  const handleDelete = (id) => {
    if (confirm('¿Está seguro de que desea eliminar este fallo?')) {
      // Aquí se haría la llamada a la API para eliminar
      console.log('Eliminando fallo con ID:', id)
    }
  }

  const getGravedadBadge = (gravedad) => {
    switch (gravedad) {
      case 'Alta':
        return <Badge variant="destructive">Alta</Badge>
      case 'Media':
        return <Badge variant="secondary">Media</Badge>
      case 'Baja':
        return <Badge variant="outline">Baja</Badge>
      default:
        return <Badge variant="outline">{gravedad}</Badge>
    }
  }

  const getEstadoBadge = (estado) => {
    switch (estado) {
      case 'Pendiente':
        return <Badge variant="secondary">Pendiente</Badge>
      case 'En Proceso':
        return <Badge variant="default">En Proceso</Badge>
      case 'Resuelto':
        return <Badge variant="outline" className="text-green-600 border-green-600">Resuelto</Badge>
      default:
        return <Badge variant="outline">{estado}</Badge>
    }
  }

  const getEstadoIcon = (estado) => {
    switch (estado) {
      case 'Pendiente':
        return <Clock className="h-4 w-4 text-gray-500" />
      case 'En Proceso':
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />
      case 'Resuelto':
        return <CheckCircle className="h-4 w-4 text-green-500" />
      default:
        return <XCircle className="h-4 w-4 text-red-500" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Encabezado y Botón Agregar */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Gestión de Fallos</h2>
          <p className="text-muted-foreground">Registra y gestiona los fallos de las máquinas</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={resetForm}>
              <Plus className="h-4 w-4 mr-2" />
              Reportar Fallo
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>
                {editingFallo ? 'Editar Fallo' : 'Reportar Nuevo Fallo'}
              </DialogTitle>
              <DialogDescription>
                {editingFallo ? 'Modifica los datos del fallo' : 'Completa la información del nuevo fallo'}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="descripcion">Descripción del Fallo</Label>
                <Textarea
                  id="descripcion"
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={handleInputChange}
                  placeholder="Describe el fallo ocurrido"
                  rows={3}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="fechaOcurrencia">Fecha y Hora</Label>
                  <Input
                    id="fechaOcurrencia"
                    name="fechaOcurrencia"
                    type="datetime-local"
                    value={formData.fechaOcurrencia}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="gravedad">Gravedad</Label>
                  <Select value={formData.gravedad} onValueChange={(value) => handleSelectChange(value, 'gravedad')}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Baja">Baja</SelectItem>
                      <SelectItem value="Media">Media</SelectItem>
                      <SelectItem value="Alta">Alta</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="maquinaId">Máquina Afectada</Label>
                  <Select value={formData.maquinaId} onValueChange={(value) => handleSelectChange(value, 'maquinaId')}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent>
                      {maquinas.map(maquina => (
                        <SelectItem key={maquina.id} value={maquina.id.toString()}>
                          {maquina.nombre}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="estado">Estado</Label>
                  <Select value={formData.estado} onValueChange={(value) => handleSelectChange(value, 'estado')}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Pendiente">Pendiente</SelectItem>
                      <SelectItem value="En Proceso">En Proceso</SelectItem>
                      <SelectItem value="Resuelto">Resuelto</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="solucion">Solución (Opcional)</Label>
                <Textarea
                  id="solucion"
                  name="solucion"
                  value={formData.solucion}
                  onChange={handleInputChange}
                  placeholder="Describe la solución aplicada"
                  rows={2}
                />
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancelar
                </Button>
                <Button type="submit">
                  {editingFallo ? 'Actualizar' : 'Reportar'}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Estadísticas Rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Fallos</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{fallos.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pendientes</CardTitle>
            <Clock className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-600">
              {fallos.filter(f => f.estado === 'Pendiente').length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">En Proceso</CardTitle>
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">
              {fallos.filter(f => f.estado === 'En Proceso').length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resueltos</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {fallos.filter(f => f.estado === 'Resuelto').length}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabla de Fallos */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Fallos</CardTitle>
          <CardDescription>
            {fallos.length} fallos registrados
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Estado</TableHead>
                <TableHead>Descripción</TableHead>
                <TableHead>Máquina</TableHead>
                <TableHead>Gravedad</TableHead>
                <TableHead>Fecha Ocurrencia</TableHead>
                <TableHead>Solución</TableHead>
                <TableHead>Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {fallos.map((fallo) => (
                <TableRow key={fallo.id}>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      {getEstadoIcon(fallo.estado)}
                      {getEstadoBadge(fallo.estado)}
                    </div>
                  </TableCell>
                  <TableCell className="max-w-xs">
                    <div className="truncate">{fallo.descripcion}</div>
                  </TableCell>
                  <TableCell>{fallo.maquina.nombre}</TableCell>
                  <TableCell>
                    {getGravedadBadge(fallo.gravedad)}
                  </TableCell>
                  <TableCell>
                    {new Date(fallo.fechaOcurrencia).toLocaleString()}
                  </TableCell>
                  <TableCell className="max-w-xs">
                    <div className="truncate">
                      {fallo.solucion || 'Sin solución registrada'}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(fallo)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(fallo.id)}
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

export default FallosSection

