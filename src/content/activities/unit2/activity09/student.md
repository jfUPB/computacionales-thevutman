#### Esta es la solucion de mi actividad ✍️
---
``` csharp
using System;

class Program
{
    const int SCREEN_SIZE = 8192; // La pantalla tiene 8192 posiciones en memoria
    static int[] SCREEN = new int[SCREEN_SIZE]; // Simulación de la pantalla
    static int KBD = 0; // Variable que simula la tecla presionada

    static void Main()
    {
        int i = 0; // Índice para recorrer la pantalla

        while (true)
        {
            if (KBD != 0)
            {
                SCREEN[i] = -1; // Dibuja una línea (todos los bits en 1)
                if (i < SCREEN_SIZE - 1)
                    i++; // Avanza en la pantalla
            }
            else
            {
                SCREEN[i] = 0; // Borra la línea de la pantalla
                if (i > 0)
                    i--; // Retrocede en la pantalla
            }
```

#### **Explicación del código**
#### Simulación de la memoria

- `SCREEN` es un arreglo de enteros de tamaño 8192, que representa la pantalla.
- `KBD` es una variable que simula la entrada del teclado.
Lógica del programa

- Si el teclado `(KBD)` está presionado, se dibuja una línea en `SCREEN[i]`.
- Si no se presiona nada, `SCREEN[i]` se borra y `i` retrocede para borrar progresivamente.


