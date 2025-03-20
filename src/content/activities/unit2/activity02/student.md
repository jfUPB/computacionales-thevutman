
#### Esta es la solucion de mi actividad ✍️

1. Direcciones de memoria de las variables `i` y `sum`
Al ejecutar el programa en el simulador Hack, las variables `i` y `sum` se almacenan en la RAM en las primeras posiciones disponibles después de las direcciones reservadas. Generalmente, en la arquitectura Hack:

La variable `i` se almacena en la dirección `RAM[16]`
La variable `sum` se almacena en la dirección `RAM[17]`
Estas direcciones pueden cambiar dependiendo de cómo se cargue el programa en el simulador.

2. Diferencia entre dirección de memoria y su contenido
La dirección de memoria es la ubicación específica en la `RAM` donde se almacena una variable.
El contenido de una dirección de memoria es el valor que se guarda en esa ubicación.
Por ejemplo: Si `i` está en `RAM[16]` y su valor es 5, significa que: `RAM[16] = 5`
La dirección es 16, pero el contenido es 5.

3. Implementación de la condición `i <= 100`
En ensamblador Hack, no hay operadores directos como `<=`, por lo que se usa una combinación de restas y saltos condicionales:

```assembly
@i
D=M    // D = i
@100
D=D-A  // D = i - 100
@END
D;JGT  // Si (i - 100) > 0, salta a END
```
Explicación paso a paso:

Se carga `i` en `D` `(D = i)`.
Se carga 100 y se hace la resta `D = i - A`.
Si el resultado es positivo `(i > 100)`, el salto `D;JGT` lleva a la etiqueta `(END)`, terminando el bucle.
Si `i <= 100`, el programa continúa ejecutando el bucle.
