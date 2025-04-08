#### Esta es la solucion de mi actividad ✍️
---

``` asm
// Inicialización manual del arreglo en memoria
@16
D=A
@2
M=D  // 2 almacena la dirección base del arreglo

// Cargar los datos del array en memoria (del 16 al 25)
@1
M=1
(LOAD_ARRAY)
  @2
  D=M
  @25
  D=D-A
  @23
  D;JGT  // Si ya se llenaron las posiciones, pasar a la suma
  
  @1
  D=M
  @2
  A=M
  M=D  // Guardar el valor en la memoria
  
  @2
  M=M+1  // Avanzar a la siguiente posición en memoria
  @1
  M=M+1  // Incrementar el valor a guardar
  
  @LOAD_ARRAY
  0;JMP  // Repetir el proceso de carga
// Inicialización de sum = 0
@26
M=0        // sum = 0

// Inicialización de j = 0
@27
M=0        // j = 0

// Inicio del bucle
(LOOP)
    @27
    D=M        // D = j
    @10
    D=D-A      // j - 10
    @END
    D;JGE      // Si j >= 10, salir del bucle

    // Cargar arr[j] en D
    @27
    D=M        // D = j
    @16
    A=D+A      // Dirección base + j
    D=M        // D = arr[j]

    // sum = sum + arr[j]
    @26
    M=D+M      // sum += arr[j]

    // j++
    @27
    M=M+1      // j++

    @LOOP
    0;JMP      // Volver al inicio del bucle

(END)
    @END
    0;JMP      // Bucle infinito para detener la ejecución

```