import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table.jsx'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { AlertTriangle, Plus, Edit, Trash2, Package } from 'lucide-react'

const MaterialesSection = () => {
  const [materiales, setMateriales] = useState([])
  const [materialesBajoStock, setMaterialesBajoStock] = useState([])
  const [proveedores, setProveedores] = useState([])
  const [loading, setLoading] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingMaterial, setEditingMaterial] = useState(null)
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    unidadMedida: '',
    stockActual: '',
    stockMinimo: '',
    precioUnitario: '',
    proveedorId: ''
  })

  // Simular datos de ejemplo
  useEffect(() => {
    // Simular carga de datos
    setMateriales([
      {
        id: 1,
        nombre: 'Tornillos M8',
        descripcion: 'Tornillos de acero inoxidable M8x20mm',
        unidadMedida: 'unidad',
        stockActual: 150,
        stockMinimo: 50,
        precioUnitario: 0.25,
        proveedor: { id: 1, nombre: 'Ferretería Central' }
      },
      {
        id: 2,
        nombre: 'Aceite Hidráulico',
        descripcion: 'Aceite hidráulico ISO 46',
        unidadMedida: 'litro',
        stockActual: 25,
        stockMinimo: 50,
        precioUnitario: 12.50,
        proveedor: { id: 2, nombre: 'Lubricantes SA' }
      },
      {
        id: 3,
        nombre: 'Filtro de Aire',
        descripcion: 'Filtro de aire para compresor',
        unidadMedida: 'unidad',
        stockActual: 8,
        stockMinimo: 10,
        precioUnitario: 45.00,
        proveedor: { id: 3, nombre: 'Repuestos Industriales' }
      }
    ])

    setMaterialesBajoStock([
      {
        id: 2,
        nombre: 'Aceite Hidráulico',
        stockActual: 25,
        stockMinimo: 50,
        diferencia: -25
      },
      {
        id: 3,
        nombre: 'Filtro de Aire',
        stockActual: 8,
        stockMinimo: 10,
        diferencia: -2
      }
    ])

    setProveedores([
      { id: 1, nombre: 'Ferretería Central' },
      { id: 2, nombre: 'Lubricantes SA' },
      { id: 3, nombre: 'Repuestos Industriales' }
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
      descripcion: '',
      unidadMedida: '',
      stockActual: '',
      stockMinimo: '',
      precioUnitario: '',
      proveedorId: ''
    })
    setEditingMaterial(null)
  }

  const handleEdit = (material) => {
    setEditingMaterial(material)
    setFormData({
      nombre: material.nombre,
      descripcion: material.descripcion,
      unidadMedida: material.unidadMedida,
      stockActual: material.stockActual.toString(),
      stockMinimo: material.stockMinimo.toString(),
      precioUnitario: material.precioUnitario.toString(),
      proveedorId: material.proveedor.id.toString()
    })
    setIsDialogOpen(true)
  }

  const handleDelete = (id) => {
    if (confirm('¿Está seguro de que desea eliminar este material?')) {
      // Aquí se haría la llamada a la API para eliminar
      console.log('Eliminando material con ID:', id)
    }
  }

  const getStockStatus = (stockActual, stockMinimo) => {
    if (stockActual <= stockMinimo) {
      return <Badge variant="destructive">Bajo Stock</Badge>
    } else if (stockActual <= stockMinimo * 1.2) {
      return <Badge variant="secondary">Stock Bajo</Badge>
    }
    return <Badge variant="default">Stock OK</Badge>
  }

  return (
    <div className="space-y-6">
      {/* Alertas de Stock Bajo */}
      {materialesBajoStock.length > 0 && (
        <Card className="border-destructive">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-destructive">
              <AlertTriangle className="h-5 w-5" />
              <span>Materiales con Stock Bajo</span>
            </CardTitle>
            <CardDescription>
              Los siguientes materiales requieren reabastecimiento urgente
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              {materialesBajoStock.map(material => (
                <div key={material.id} className="flex items-center justify-between p-2 bg-destructive/10 rounded">
                  <span className="font-medium">{material.nombre}</span>
                  <span className="text-sm text-muted-foreground">
                    Stock: {material.stockActual} / Min: {material.stockMinimo}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Encabezado y Botón Agregar */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Gestión de Materiales</h2>
          <p className="text-muted-foreground">Administra el inventario de materiales</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={resetForm}>
              <Plus className="h-4 w-4 mr-2" />
              Agregar Material
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>
                {editingMaterial ? 'Editar Material' : 'Agregar Nuevo Material'}
              </DialogTitle>
              <DialogDescription>
                {editingMaterial ? 'Modifica los datos del material' : 'Completa la información del nuevo material'}
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
                  placeholder="Nombre del material"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="descripcion">Descripción</Label>
                <Textarea
                  id="descripcion"
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={handleInputChange}
                  placeholder="Descripción del material"
                  rows={3}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="unidadMedida">Unidad de Medida</Label>
                  <Select value={formData.unidadMedida} onValueChange={(value) => handleSelectChange(value, 'unidadMedida')}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="unidad">Unidad</SelectItem>
                      <SelectItem value="kilogramo">Kilogramo</SelectItem>
                      <SelectItem value="litro">Litro</SelectItem>
                      <SelectItem value="metro">Metro</SelectItem>
                      <SelectItem value="caja">Caja</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="proveedorId">Proveedor</Label>
                  <Select value={formData.proveedorId} onValueChange={(value) => handleSelectChange(value, 'proveedorId')}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar" />
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
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="stockActual">Stock Actual</Label>
                  <Input
                    id="stockActual"
                    name="stockActual"
                    type="number"
                    value={formData.stockActual}
                    onChange={handleInputChange}
                    placeholder="0"
                    min="0"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="stockMinimo">Stock Mínimo</Label>
                  <Input
                    id="stockMinimo"
                    name="stockMinimo"
                    type="number"
                    value={formData.stockMinimo}
                    onChange={handleInputChange}
                    placeholder="0"
                    min="0"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="precioUnitario">Precio Unitario</Label>
                  <Input
                    id="precioUnitario"
                    name="precioUnitario"
                    type="number"
                    step="0.01"
                    value={formData.precioUnitario}
                    onChange={handleInputChange}
                    placeholder="0.00"
                    min="0"
                    required
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancelar
                </Button>
                <Button type="submit">
                  {editingMaterial ? 'Actualizar' : 'Crear'}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Tabla de Materiales */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Materiales</CardTitle>
          <CardDescription>
            {materiales.length} materiales registrados
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nombre</TableHead>
                <TableHead>Descripción</TableHead>
                <TableHead>Unidad</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Precio</TableHead>
                <TableHead>Proveedor</TableHead>
                <TableHead>Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {materiales.map((material) => (
                <TableRow key={material.id}>
                  <TableCell className="font-medium">{material.nombre}</TableCell>
                  <TableCell className="max-w-xs truncate">{material.descripcion}</TableCell>
                  <TableCell>{material.unidadMedida}</TableCell>
                  <TableCell>
                    {material.stockActual} / {material.stockMinimo}
                  </TableCell>
                  <TableCell>
                    {getStockStatus(material.stockActual, material.stockMinimo)}
                  </TableCell>
                  <TableCell>${material.precioUnitario.toFixed(2)}</TableCell>
                  <TableCell>{material.proveedor.nombre}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(material)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(material.id)}
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

export default MaterialesSection

