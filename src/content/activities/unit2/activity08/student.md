#### Esta es la solucion de mi actividad ✍️
---

#### Dibujo de la línea en pantalla

- Cada vez que presionas una tecla, se detecta en la dirección de memoria `@24576` (teclado).
- Mientras la tecla está presionada, el programa actualiza la dirección `@16384` (pantalla), haciendo que la línea crezca.
- La variable en `M[16]` probablemente almacena la posición o el tamaño de la línea.

#### Borrado progresivo de la línea

- Cuando sueltas la tecla, la línea deja de crecer y el programa comienza a reducir el valor en `M[16]`.
- Como `M[16]` representa el contenido de la pantalla, la línea se va borrando gradualmente hasta que todo queda en blanco.
#### Interrupción del borrado

- Si presionas una nueva tecla antes de que termine de borrarse, el programa detecta la entrada y vuelve a aumentar `M[16]`.
- Esto hace que la línea crezca nuevamente en lugar de desaparecer.
**¿Cómo lo hace?**

El programa guarda el estado del teclado en `M[16]`.
Si una tecla está presionada (`D ≠ 0` en `@24576`), se incrementa el valor de `M[16]`, extendiendo la línea.
Si no hay tecla presionada, `M[16]` se reduce progresivamente, eliminando la línea.