
#### Esta es la solucion de mi actividad ✍️


1. Lenguaje de Máquina y Ensamblador

El lenguaje de máquina es un conjunto de instrucciones en binario que la CPU puede ejecutar directamente. El ensamblador es un lenguaje de bajo nivel que usa mnemónicos para representar estas instrucciones en un formato más legible.

**Ejemplo:**

En la actividad 09, se analizó el código en lenguaje de máquina y se tradujo a un lenguaje de alto nivel como C#.

2. Uso del Simulador para Interpretar Código en Binario
El simulador permite cargar un archivo en código de máquina `(.hack)`, visualizarlo en ensamblador y ejecutar las instrucciones.

**Ejemplo:**

Al cargar el archivo `test.hack`, observamos cómo el programa respondía a la entrada del teclado `(KBD)` y modificaba la pantalla `(SCREEN)`.

3. Manejo del Teclado y la Pantalla en el Hack Assembly
`KBD`: Representa la dirección de memoria donde se almacena la última tecla presionada.

`SCREEN`: Es un arreglo que representa la pantalla, donde cada posición de memoria controla 16 píxeles.

**Ejemplo:**

En la actividad 10, se implementó la función pantalla que pintaba la pantalla al presionar `'p'` y la borraba al presionar `'b'`.

4. Implementación de Funciones en Ensamblador
Las funciones en ensamblador no tienen parámetros como en los lenguajes de alto nivel. Se usan registros y etiquetas para manejar el flujo del programa.

**Ejemplo:**

Se implementó la función `(pantalla)`, que modificaba la memoria de `SCREEN` para pintar o borrar la pantalla según la tecla presionada.

5. Control de Flujo en Ensamblador (Jumps y Condiciones)

`@LABEL` y `0;JMP`: Salto incondicional a una etiqueta.
`D;JEQ`, `D;JGT`, `D;JLT`: Saltos condicionales basados en comparaciones.

**Ejemplo:**

En la actividad 10, se usaron comparaciones con `D;JEQ` para verificar si la tecla presionada era `'p'` o `'b'`, y en función de ello se llamaba a `PINTAR` o `BORRAR`.

#### Conclusión
Esta unidad permitió comprender el funcionamiento del lenguaje de máquina y el ensamblador, así como la relación entre el hardware (teclado y pantalla) y el software. Se practicó la traducción de código binario a lenguajes de alto nivel, el uso de simuladores y la implementación de funciones en ensamblador.
