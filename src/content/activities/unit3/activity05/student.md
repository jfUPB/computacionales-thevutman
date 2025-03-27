
#### Esta es la solucion de mi actividad ✍️
---

#### **Experimento 3:**
Este experimento prueba la modificación de variables globales, tanto inicializadas como no inicializadas.

**¿Qué ocurre?**
1. El programa compila y se ejecuta sin errores.
2. Las variables globales pueden modificarse sin problemas.

**¿Por qué sucede esto?**

- Las variables globales se almacenan en el segmento de datos del programa.

    - `global_inicializada` (declarada con un valor) se encuentra en la sección de datos inicializados.
    - `global_no_inicializada` (declarada sin valor) se encuentra en la sección BSS (Block Started by Symbol), donde las variables no inicializadas se llenan con 0 automáticamente.
- Las variables globales pueden modificarse libremente porque su memoria no es de solo lectura.
A diferencia de los experimentos anteriores, aquí no estamos intentando escribir en memoria protegida.

**Conclusión:**
Las variables globales se pueden modificar sin restricciones, ya que están en la sección de datos modificables del programa.

#### **Experimento 4:**
Este experimento intenta modificar una variable local estática desde fuera de su función.

**¿Qué ocurre?**

El programa no compila y genera un error.

**¿Por qué sucede esto?**

- La variable `var_estatica` está declarada dentro de `funcionConStatic()`, lo que significa que está limitado a esa función.
- No se puede acceder a `var_estatica` desde `main()` porque las variables locales estáticas no son globales.
- Las variables `static` mantienen su valor entre llamadas, pero siguen siendo locales a su función.

**Conclusión:**
Las variables locales estáticas no pueden modificarse fuera de su función, pero conservan su valor entre llamadas.