import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table.jsx'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Plus, TrendingUp, TrendingDown, ArrowUpDown } from 'lucide-react'

const MovimientosSection = () => {
  const [movimientos, setMovimientos] = useState([])
  const [materiales, setMateriales] = useState([])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [formData, setFormData] = useState({
    materialId: '',
    tipoMovimiento: '',
    cantidad: '',
    descripcion: ''
  })

  // Simular datos de ejemplo
  useEffect(() => {
    setMovimientos([
      {
        id: 1,
        material: { id: 1, nombre: 'Tornillos M8' },
        tipoMovimiento: 'Entrada',
        cantidad: 100,
        fecha: '2024-01-15T10:30:00',
        descripcion: 'Compra a proveedor',
        usuario: 'Admin'
      },
      {
        id: 2,
        material: { id: 2, nombre: 'Aceite Hidráulico' },
        tipoMovimiento: 'Salida',
        cantidad: 5,
        fecha: '2024-01-14T14:20:00',
        descripcion: 'Mantenimiento Torno CNC',
        usuario: 'Técnico'
      },
      {
        id: 3,
        material: { id: 3, nombre: 'Filtro de Aire' },
        tipoMovimiento: 'Entrada',
        cantidad: 10,
        fecha: '2024-01-13T09:15:00',
        descripcion: 'Reposición de stock',
        usuario: 'Admin'
      }
    ])

    setMateriales([
      { id: 1, nombre: 'Tornillos M8' },
      { id: 2, nombre: 'Aceite Hidráulico' },
      { id: 3, nombre: 'Filtro de Aire' }
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
      materialId: '',
      tipoMovimiento: '',
      cantidad: '',
      descripcion: ''
    })
  }

  const getTipoMovimientoBadge = (tipo) => {
    switch (tipo) {
      case 'Entrada':
        return <Badge variant="default" className="bg-green-100 text-green-800 border-green-200">Entrada</Badge>
      case 'Salida':
        return <Badge variant="destructive">Salida</Badge>
      default:
        return <Badge variant="outline">{tipo}</Badge>
    }
  }

  const getTipoMovimientoIcon = (tipo) => {
    switch (tipo) {
      case 'Entrada':
        return <TrendingUp className="h-4 w-4 text-green-600" />
      case 'Salida':
        return <TrendingDown className="h-4 w-4 text-red-600" />
      default:
        return <ArrowUpDown className="h-4 w-4 text-gray-600" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Encabezado y Botón Agregar */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Movimientos de Materiales</h2>
          <p className="text-muted-foreground">Registra entradas y salidas de materiales</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={resetForm}>
              <Plus className="h-4 w-4 mr-2" />
              Registrar Movimiento
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Registrar Nuevo Movimiento</DialogTitle>
              <DialogDescription>
                Registra una entrada o salida de material
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="materialId">Material</Label>
                <Select value={formData.materialId} onValueChange={(value) => handleSelectChange(value, 'materialId')}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar material" />
                  </SelectTrigger>
                  <SelectContent>
                    {materiales.map(material => (
                      <SelectItem key={material.id} value={material.id.toString()}>
                        {material.nombre}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="tipoMovimiento">Tipo de Movimiento</Label>
                  <Select value={formData.tipoMovimiento} onValueChange={(value) => handleSelectChange(value, 'tipoMovimiento')}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Entrada">Entrada</SelectItem>
                      <SelectItem value="Salida">Salida</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="cantidad">Cantidad</Label>
                  <Input
                    id="cantidad"
                    name="cantidad"
                    type="number"
                    value={formData.cantidad}
                    onChange={handleInputChange}
                    placeholder="0"
                    min="1"
                    required
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="descripcion">Descripción</Label>
                <Input
                  id="descripcion"
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={handleInputChange}
                  placeholder="Motivo del movimiento"
                  required
                />
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancelar
                </Button>
                <Button type="submit">
                  Registrar
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
            <CardTitle className="text-sm font-medium">Total Movimientos</CardTitle>
            <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{movimientos.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Entradas</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {movimientos.filter(m => m.tipoMovimiento === 'Entrada').length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Salidas</CardTitle>
            <TrendingDown className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              {movimientos.filter(m => m.tipoMovimiento === 'Salida').length}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabla de Movimientos */}
      <Card>
        <CardHeader>
          <CardTitle>Historial de Movimientos</CardTitle>
          <CardDescription>
            {movimientos.length} movimientos registrados
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tipo</TableHead>
                <TableHead>Material</TableHead>
                <TableHead>Cantidad</TableHead>
                <TableHead>Descripción</TableHead>
                <TableHead>Fecha</TableHead>
                <TableHead>Usuario</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {movimientos.map((movimiento) => (
                <TableRow key={movimiento.id}>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      {getTipoMovimientoIcon(movimiento.tipoMovimiento)}
                      {getTipoMovimientoBadge(movimiento.tipoMovimiento)}
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{movimiento.material.nombre}</TableCell>
                  <TableCell>{movimiento.cantidad}</TableCell>
                  <TableCell>{movimiento.descripcion}</TableCell>
                  <TableCell>
                    {new Date(movimiento.fecha).toLocaleString()}
                  </TableCell>
                  <TableCell>{movimiento.usuario}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

export default MovimientosSection

