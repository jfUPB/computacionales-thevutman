#### Esta es la solucion de mi actividad ✍️
---

#### **Experimento 5:**
Este experimento compara el comportamiento de variables **locales estáticas** y **no estáticas** dentro de funciones.

**¿Qué ocurre?**

- `var_no_estatica` (variable sin `static`):
    - Siempre inicia en `100` cada vez que la función se llama.
    - Su valor NO se mantiene entre llamadas.
- `var_estatica` (variable con `static`):
    - Su valor se mantiene entre llamadas.
    - Comienza en `100`, pero cada iteración su valor se incrementa (`101, 102, 103...`).

**Conclusión:**
Las variables locales estáticas conservan su valor entre llamadas, mientras que las variables locales no estáticas se reinician cada vez que la función es llamada.

#### **Experimento 6:**
Este experimento trabaja con la memoria dinámica en el Heap.

**¿Qué ocurre?**

El programa puede generar un comportamiento indefinido.
Acceder a `arrayHeap[0]` después de hacer `delete[] arrayHeap;` provoca un error porque la memoria ha sido liberada.

**Conclusión:**
- El Heap requiere una gestión manual de la memoria con new y delete[].
- No liberar memoria dinámica provoca fugas de memoria y mal rendimiento.