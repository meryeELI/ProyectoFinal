import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts'
import { FileText, Download, TrendingUp, AlertTriangle, Package, Wrench } from 'lucide-react'

const ReportesSection = () => {
  const [selectedReport, setSelectedReport] = useState('stock')
  
  // Datos de ejemplo para los gráficos
  const stockData = [
    { nombre: 'Tornillos M8', stock: 150, minimo: 50 },
    { nombre: 'Aceite Hidráulico', stock: 25, minimo: 50 },
    { nombre: 'Filtro de Aire', stock: 8, minimo: 10 },
    { nombre: 'Rodamientos', stock: 75, minimo: 30 },
    { nombre: 'Correas', stock: 45, minimo: 20 }
  ]

  const fallosData = [
    { mes: 'Ene', fallos: 12 },
    { mes: 'Feb', fallos: 8 },
    { mes: 'Mar', fallos: 15 },
    { mes: 'Abr', fallos: 6 },
    { mes: 'May', fallos: 10 },
    { mes: 'Jun', fallos: 4 }
  ]

  const maquinasEstadoData = [
    { nombre: 'Operativas', value: 8, color: '#10b981' },
    { nombre: 'Mantenimiento', value: 2, color: '#f59e0b' },
    { nombre: 'Fuera de Servicio', value: 1, color: '#ef4444' }
  ]

  const movimientosData = [
    { mes: 'Ene', entradas: 120, salidas: 85 },
    { mes: 'Feb', entradas: 98, salidas: 92 },
    { mes: 'Mar', entradas: 145, salidas: 78 },
    { mes: 'Abr', entradas: 110, salidas: 95 },
    { mes: 'May', entradas: 132, salidas: 88 },
    { mes: 'Jun', entradas: 156, salidas: 102 }
  ]

  const handleExportReport = (reportType) => {
    // Aquí se implementaría la exportación del reporte
    console.log(`Exportando reporte: ${reportType}`)
    alert(`Exportando reporte de ${reportType}...`)
  }

  const renderStockChart = () => (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={stockData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="nombre" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="stock" fill="#3b82f6" name="Stock Actual" />
        <Bar dataKey="minimo" fill="#ef4444" name="Stock Mínimo" />
      </BarChart>
    </ResponsiveContainer>
  )

  const renderFallosChart = () => (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={fallosData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="mes" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="fallos" stroke="#ef4444" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  )

  const renderMaquinasChart = () => (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={maquinasEstadoData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ nombre, value }) => `${nombre}: ${value}`}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {maquinasEstadoData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  )

  const renderMovimientosChart = () => (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={movimientosData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="mes" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="entradas" fill="#10b981" name="Entradas" />
        <Bar dataKey="salidas" fill="#ef4444" name="Salidas" />
      </BarChart>
    </ResponsiveContainer>
  )

  const getChartComponent = () => {
    switch (selectedReport) {
      case 'stock':
        return renderStockChart()
      case 'fallos':
        return renderFallosChart()
      case 'maquinas':
        return renderMaquinasChart()
      case 'movimientos':
        return renderMovimientosChart()
      default:
        return renderStockChart()
    }
  }

  const getReportTitle = () => {
    switch (selectedReport) {
      case 'stock':
        return 'Reporte de Stock de Materiales'
      case 'fallos':
        return 'Evolución de Fallos por Mes'
      case 'maquinas':
        return 'Estado de las Máquinas'
      case 'movimientos':
        return 'Movimientos de Materiales'
      default:
        return 'Reporte de Stock de Materiales'
    }
  }

  const getReportDescription = () => {
    switch (selectedReport) {
      case 'stock':
        return 'Comparación entre stock actual y stock mínimo de materiales'
      case 'fallos':
        return 'Tendencia de fallos registrados en los últimos 6 meses'
      case 'maquinas':
        return 'Distribución del estado actual de las máquinas'
      case 'movimientos':
        return 'Comparación de entradas y salidas de materiales por mes'
      default:
        return 'Comparación entre stock actual y stock mínimo de materiales'
    }
  }

  return (
    <div className="space-y-6">
      {/* Encabezado */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Reportes y Estadísticas</h2>
          <p className="text-muted-foreground">Visualiza datos y genera reportes del sistema</p>
        </div>
        <div className="flex items-center space-x-2">
          <Select value={selectedReport} onValueChange={setSelectedReport}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Seleccionar reporte" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="stock">Stock de Materiales</SelectItem>
              <SelectItem value="fallos">Fallos por Mes</SelectItem>
              <SelectItem value="maquinas">Estado de Máquinas</SelectItem>
              <SelectItem value="movimientos">Movimientos</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={() => handleExportReport(selectedReport)}>
            <Download className="h-4 w-4 mr-2" />
            Exportar
          </Button>
        </div>
      </div>

      {/* Tarjetas de Resumen */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Materiales</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+2 desde el mes pasado</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Máquinas Activas</CardTitle>
            <Wrench className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">72% del total</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Fallos Este Mes</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">-60% vs mes anterior</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Eficiencia</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94%</div>
            <p className="text-xs text-muted-foreground">+5% vs mes anterior</p>
          </CardContent>
        </Card>
      </div>

      {/* Gráfico Principal */}
      <Card>
        <CardHeader>
          <CardTitle>{getReportTitle()}</CardTitle>
          <CardDescription>{getReportDescription()}</CardDescription>
        </CardHeader>
        <CardContent>
          {getChartComponent()}
        </CardContent>
      </Card>

      {/* Reportes Rápidos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              <span>Materiales Críticos</span>
            </CardTitle>
            <CardDescription>Materiales con stock por debajo del mínimo</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                <span className="font-medium">Aceite Hidráulico</span>
                <span className="text-sm text-red-600">25/50 (-50%)</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                <span className="font-medium">Filtro de Aire</span>
                <span className="text-sm text-red-600">8/10 (-20%)</span>
              </div>
            </div>
            <Button className="w-full mt-4" variant="outline" onClick={() => handleExportReport('criticos')}>
              <FileText className="h-4 w-4 mr-2" />
              Generar Reporte Completo
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Wrench className="h-5 w-5 text-blue-500" />
              <span>Próximos Mantenimientos</span>
            </CardTitle>
            <CardDescription>Máquinas que requieren mantenimiento pronto</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                <span className="font-medium">Torno CNC</span>
                <span className="text-sm text-yellow-600">En 5 días</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                <span className="font-medium">Compresor de Aire</span>
                <span className="text-sm text-yellow-600">En 12 días</span>
              </div>
            </div>
            <Button className="w-full mt-4" variant="outline" onClick={() => handleExportReport('mantenimientos')}>
              <FileText className="h-4 w-4 mr-2" />
              Generar Calendario
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default ReportesSection

