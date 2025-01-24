#### Esta es la solucion de mi actividad ✍️

#### Código Original

``` asm
@1
D=A
@2
D=D+A
@16
M=D
@6
0;JMP
```

#### Código Nuevo

``` asm
@60
D=A
@9
D=D+A
@6
M=D
@0
0;JMP
```

#### Cambios Realizados

1. **Valores modificados:** 
   - En el código original, los números `1` y `2` fueron reemplazados por `60` y `9` respectivamente, para cumplir con la nueva suma requerida.

2. **Posición de memoria:** 
   - El resultado de la suma se almacena ahora en la posición de memoria `6`, en lugar de la posición `16` utilizada en el código original.

3. **Reinicio del programa:** 
   - Se añadió un salto incondicional (`@0; 0;JMP`) al final del programa para que, una vez almacenado el resultado, el programa vuelva a ejecutarse desde la posición inicial.


