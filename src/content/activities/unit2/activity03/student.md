
#### Esta es la solucion de mi actividad ✍️

1. Comparación entre while y for en alto nivel
Ambos ciclos son equivalentes porque hacen lo mismo:

`while`

Se inicializa `i` antes del bucle.
Se comprueba la condición `(i <= 100)` en cada iteración.
Se incrementa `i` dentro del bucle.
`for`

La inicialización de `i` ocurre dentro del encabezado del `for`.
La condición `(i <= 100)` se verifica en cada iteración.
El incremento `(i++)` está en el encabezado y se ejecuta automáticamente después de cada iteración.
Ambos programas suman los números del 1 al 100.

2. Conversión del for a ensamblador Hack
El equivalente en ensamblador Hack del for es:

``` assembly
// Adds 1+...+100 using a for loop

@sum
M=0        // sum = 0
@i
M=1        // i = 1

(LOOP)
@i
D=M        // D = i
@100
D=D-A      // D = i - 100
@END
D;JGT      // If (i - 100) > 0, goto END

@i
D=M        // D = i
@sum
M=D+M      // sum = sum + i

@i
M=M+1      // i = i + 1

@LOOP
0;JMP      // Goto LOOP

(END)
@END
0;JMP      // Infinite loop
```
Explicación paso a paso:

Se inicializa `sum = 0` y `i = 1`.
Se comprueba la condición `i <= 100` usando la resta `D = i - 100` y el salto D;JGT.
Se suma `i` a `sum`.
Se incrementa `i` `(M = M+1)`.
Se repite el proceso hasta que `i > 100`, luego el programa salta a `(END)`.
3. Comparación de las versiones en ensamblador (while vs for)
Estructura:

La versión con for se parece mucho a la versión con while, pero la inicialización y el incremento están más organizados.
La cantidad de instrucciones es casi la misma.
Claridad:

En lenguaje ensamblador, no hay una diferencia real entre for y while, ya que ambos usan JMP y comparaciones condicionales (D;JGT).
La estructura del for ayuda a visualizar mejor los tres componentes: inicialización, condición y actualización.