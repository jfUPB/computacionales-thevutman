
#### Esta es la solucion de mi actividad ✍️
---

``` asm
// Inicio del programa
    @SCREEN
    D=A
    @i
    M=D         // Inicializar i en SCREEN
(INICIO)
    @KBD        // Dirección del teclado
    D=M         // Leer tecla presionada
    @PRESIONADO
    M=D         // Guardar tecla en PRESIONADO

    @112        // Código ASCII de 'p'
    D=A
    @PRESIONADO
    D=D-M
    @PINTAR
    D;JEQ       // Si es 'p', ir a PINTAR

    @98         // Código ASCII de 'b'
    D=A
    @PRESIONADO
    D=D-M
    @BORRAR
    D;JEQ       // Si es 'b', ir a BORRAR

    @INICIO
    0;JMP       // Si no es ni 'p' ni 'b', repetir el ciclo

// Función pantalla - Pinta la pantalla
(PINTAR)
    @i
    D=M
    @24575
    D=D-A
    @RETORNO_PANTALLA
    D;JGE       // Si i >= SCREEN, regresar

    @i
    A=M
    M=-1        // Pintar la posición actual

    @i
    M=M+1       // Incrementar i
    @RETORNO_PANTALLA
    0;JMP       // Repetir

// Función pantalla - Borra la pantalla
(BORRAR)
    @i
    D=M
    @16384
    D=D-A
    @RETORNO_PANTALLA
    D;JLT       // Si i < 0

    @i
    A=M
    M=0         // Borrar la posición actual

    @i
    M=M-1       // decrementa i
    @RETORNO_PANTALLA
    0;JMP       // Repetir

(RETORNO_PANTALLA)
    @INICIO
    0;JMP       // Volver al inicio
```