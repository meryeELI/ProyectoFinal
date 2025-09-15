// Configuración base de la API
const API_BASE_URL = 'http://localhost:8080/api'

// Configuración por defecto para las peticiones
const defaultOptions = {
  headers: {
    'Content-Type': 'application/json',
  },
}

// Función helper para manejar respuestas
const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.text()
    throw new Error(error || `HTTP error! status: ${response.status}`)
  }
  
  const contentType = response.headers.get('content-type')
  if (contentType && contentType.includes('application/json')) {
    return response.json()
  }
  return response.text()
}

// Función helper para hacer peticiones
const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`
  const config = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  }

  try {
    const response = await fetch(url, config)
    return await handleResponse(response)
  } catch (error) {
    console.error(`API Error (${endpoint}):`, error)
    throw error
  }
}

// API de Materiales
export const materialesAPI = {
  // Obtener todos los materiales
  getAll: () => apiRequest('/materiales'),
  
  // Obtener un material por ID
  getById: (id) => apiRequest(`/materiales/${id}`),
  
  // Crear un nuevo material
  create: (materialData) => apiRequest('/materiales', {
    method: 'POST',
    body: JSON.stringify(materialData),
  }),
  
  // Actualizar un material
  update: (id, materialData) => apiRequest(`/materiales/${id}`, {
    method: 'PUT',
    body: JSON.stringify(materialData),
  }),
  
  // Eliminar un material
  delete: (id) => apiRequest(`/materiales/${id}`, {
    method: 'DELETE',
  }),
  
  // Obtener materiales con bajo stock
  getBajoStock: () => apiRequest('/materiales/bajo-stock'),
}

// API de Máquinas
export const maquinasAPI = {
  // Obtener todas las máquinas
  getAll: () => apiRequest('/maquinas'),
  
  // Crear una nueva máquina
  create: (maquinaData, proveedorId) => apiRequest(`/maquinas?proveedorId=${proveedorId}`, {
    method: 'POST',
    body: JSON.stringify(maquinaData),
  }),
  
  // Actualizar una máquina
  update: (id, maquinaData) => apiRequest(`/maquinas/${id}`, {
    method: 'PUT',
    body: JSON.stringify(maquinaData),
  }),
  
  // Eliminar una máquina
  delete: (id) => apiRequest(`/maquinas/${id}`, {
    method: 'DELETE',
  }),
}

// API de Fallos
export const fallosAPI = {
  // Obtener todos los fallos
  getAll: () => apiRequest('/fallos'),
  
  // Obtener un fallo por ID
  getById: (id) => apiRequest(`/fallos/${id}`),
  
  // Crear un nuevo fallo
  create: (falloData) => apiRequest('/fallos', {
    method: 'POST',
    body: JSON.stringify(falloData),
  }),
  
  // Actualizar un fallo
  update: (id, falloData) => apiRequest(`/fallos/${id}`, {
    method: 'PUT',
    body: JSON.stringify(falloData),
  }),
  
  // Eliminar un fallo
  delete: (id) => apiRequest(`/fallos/${id}`, {
    method: 'DELETE',
  }),
}

// API de Movimientos
export const movimientosAPI = {
  // Obtener todos los movimientos
  getAll: () => apiRequest('/movimientos'),
  
  // Crear un nuevo movimiento
  create: (movimientoData) => apiRequest('/movimientos', {
    method: 'POST',
    body: JSON.stringify(movimientoData),
  }),
  
  // Obtener movimientos por material
  getByMaterial: (materialId) => apiRequest(`/movimientos/material/${materialId}`),
}

// API de Proveedores
export const proveedoresAPI = {
  // Obtener todos los proveedores
  getAll: () => apiRequest('/proveedores'),
  
  // Obtener un proveedor por ID
  getById: (id) => apiRequest(`/proveedores/${id}`),
  
  // Crear un nuevo proveedor
  create: (proveedorData) => apiRequest('/proveedores', {
    method: 'POST',
    body: JSON.stringify(proveedorData),
  }),
  
  // Actualizar un proveedor
  update: (id, proveedorData) => apiRequest(`/proveedores/${id}`, {
    method: 'PUT',
    body: JSON.stringify(proveedorData),
  }),
  
  // Eliminar un proveedor
  delete: (id) => apiRequest(`/proveedores/${id}`, {
    method: 'DELETE',
  }),
}

// API de Partes
export const partesAPI = {
  // Obtener todas las partes
  getAll: () => apiRequest('/partes'),
  
  // Crear una nueva parte
  create: (parteData) => apiRequest('/partes', {
    method: 'POST',
    body: JSON.stringify(parteData),
  }),
  
  // Actualizar una parte
  update: (id, parteData) => apiRequest(`/partes/${id}`, {
    method: 'PUT',
    body: JSON.stringify(parteData),
  }),
  
  // Eliminar una parte
  delete: (id) => apiRequest(`/partes/${id}`, {
    method: 'DELETE',
  }),
}

// API de Representantes
export const representantesAPI = {
  // Obtener todos los representantes
  getAll: () => apiRequest('/representantes'),
  
  // Crear un nuevo representante
  create: (representanteData) => apiRequest('/representantes', {
    method: 'POST',
    body: JSON.stringify(representanteData),
  }),
  
  // Actualizar un representante
  update: (id, representanteData) => apiRequest(`/representantes/${id}`, {
    method: 'PUT',
    body: JSON.stringify(representanteData),
  }),
  
  // Eliminar un representante
  delete: (id) => apiRequest(`/representantes/${id}`, {
    method: 'DELETE',
  }),
}

// Función para verificar la conexión con el backend
export const checkConnection = async () => {
  try {
    const response = await fetch(`${API_BASE_URL.replace('/api', '')}/actuator/health`)
    return response.ok
  } catch (error) {
    console.error('Error checking backend connection:', error)
    return false
  }
}

export default {
  materialesAPI,
  maquinasAPI,
  fallosAPI,
  movimientosAPI,
  proveedoresAPI,
  partesAPI,
  representantesAPI,
  checkConnection,
}

