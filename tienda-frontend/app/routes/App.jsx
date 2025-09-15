import { useState } from 'react'
// import { Button } from '@/components/ui/button.jsx'
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Package, Wrench, AlertTriangle, TrendingUp, Users, FileText } from 'lucide-react'
import MaterialesSection from './components/MaterialesSection'
import MaquinasSection from './components/MaquinasSection'
import FallosSection from './components/FallosSection'
import MovimientosSection from './components/MovimientosSection'
import ProveedoresSection from './components/ProveedoresSection'
import ReportesSection from './components/ReportesSection'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('materiales')

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Package className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-primary">Sistema de Gestión de Inventario</h1>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                Configuración
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="materiales" className="flex items-center space-x-2">
              <Package className="h-4 w-4" />
              <span>Materiales</span>
            </TabsTrigger>
            <TabsTrigger value="maquinas" className="flex items-center space-x-2">
              <Wrench className="h-4 w-4" />
              <span>Máquinas</span>
            </TabsTrigger>
            <TabsTrigger value="fallos" className="flex items-center space-x-2">
              <AlertTriangle className="h-4 w-4" />
              <span>Fallos</span>
            </TabsTrigger>
            <TabsTrigger value="movimientos" className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4" />
              <span>Movimientos</span>
            </TabsTrigger>
            <TabsTrigger value="proveedores" className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>Proveedores</span>
            </TabsTrigger>
            <TabsTrigger value="reportes" className="flex items-center space-x-2">
              <FileText className="h-4 w-4" />
              <span>Reportes</span>
            </TabsTrigger>
          </TabsList>

          <div className="mt-6">
            <TabsContent value="materiales">
              <MaterialesSection />
            </TabsContent>
            
            <TabsContent value="maquinas">
              <MaquinasSection />
            </TabsContent>
            
            <TabsContent value="fallos">
              <FallosSection />
            </TabsContent>
            
            <TabsContent value="movimientos">
              <MovimientosSection />
            </TabsContent>
            
            <TabsContent value="proveedores">
              <ProveedoresSection />
            </TabsContent>
            
            <TabsContent value="reportes">
              <ReportesSection />
            </TabsContent>
          </div>
        </Tabs>
      </main>
    </div>
  )
}

export default App

