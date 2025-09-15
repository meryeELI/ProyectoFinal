-- Insertar proveedor
INSERT INTO proveedor (id, nombre, dui, correo, telefono, direccion)
VALUES (1, 'Proveedor Test', '12345678-9', 'proveedor@test.com', '7777-8888', 'San Salvador');


-- Proveedor de prueba
INSERT INTO proveedor (id, nombre, dui, correo, telefono, direccion)
VALUES (1, 'Proveedor Test', '12345678-9', 'proveedor@test.com', '7777-8888', 'San Salvador');

-- Material con stock bajo (stockActual < stockMinimo)
INSERT INTO material (id, proveedor_id, nombre, descripcion, unidad_medida, stock_actual, stock_minimo, precio_unitario)
VALUES (1, 1, 'Tela Roja', 'Tela de algodón roja', 'metros', 5, 20, 3.50);

-- Material con stock suficiente (stockActual >= stockMinimo)
INSERT INTO material (id, proveedor_id, nombre, descripcion, unidad_medida, stock_actual, stock_minimo, precio_unitario)
VALUES (2, 1, 'Tela Azul', 'Tela de algodón azul', 'metros', 50, 20, 2.50);

-- Insertar movimiento de material (salida)
INSERT INTO movimientomaterial (id, material_id, tipo_mov, observacion, cantidad, fecha)
VALUES (1, 1, 'SALIDA', 'Producción lote 1', 50, CURRENT_TIMESTAMP);

-- Insertar movimiento de material (entrada)
INSERT INTO movimientomaterial (id, material_id, tipo_mov, observacion, cantidad, fecha)
VALUES (2, 1, 'ENTRADA', 'Compra proveedor', 30, CURRENT_TIMESTAMP);
