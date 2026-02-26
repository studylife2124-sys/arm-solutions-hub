

## Plan: Corregir logos en imagen del equipo (Sobre Nosotros)

### Problema
Los logos en los chalecos y cascos blancos de la imagen del equipo no coinciden con el logo oficial de ARM Integral Group (el de engranaje + llave con letras azules metálicas 3D).

### Solucion
1. Usar la imagen del logo oficial subida (`ARM_png-11.png`) como referencia exacta.
2. Editar `src/assets/team-about.png` con `imagegen--edit_image` para:
   - Reemplazar TODOS los logos visibles en los chalecos grises con el logo oficial (engranaje plateado + llave + "ARM" en azul metalico 3D + "INTEGRAL GROUP").
   - Reemplazar TODOS los logos en los cascos blancos con el mismo logo oficial.
   - Los cascos amarillos se mantienen lisos, sin logo.
   - El logo del trabajador central del chaleco se usa como referencia de tamano y posicion para los demas.

### Detalle tecnico
- Se usara `imagegen--edit_image` con instrucciones muy especificas para que el modelo reemplace cada logo individual con el diseno exacto del logo ARM: engranaje metalico plateado con llave, letras "ARM" en azul metalico brillante, y "INTEGRAL GROUP" debajo.
- Se enviara el logo oficial (`ARM_png-11.png`) como imagen de referencia junto con la imagen del equipo para mayor precision.

