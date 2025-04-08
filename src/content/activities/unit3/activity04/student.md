
#### Esta es la solucion de mi actividad ✍️
---

#### **Experimento 1:**
Este experimento intenta modificar el contenido de la función main() en la memoria utilizando punteros.

**Análisis del código**

1. `&main` obtiene la dirección en memoria de la función `main()`.
2. `reinterpret_cast<void*>` convierte la dirección en un puntero sin tipo.
3. Se imprime la dirección en memoria donde está el código de `main()`.
4. `*reinterpret_cast<int*>(ptr) = 0;` intenta escribir en esa dirección.

**¿Qué ocurre?**

El programa falla con un error de segmentación (segmentation fault).
Esto ocurre porque el segmento de código es de solo lectura, por razones de seguridad y estabilidad. Intentar modificarlo genera una violación de acceso.

**¿Por qué sucede esto?**

- En muchos sistemas, la memoria donde se almacena el código ejecutable tiene permisos de solo lectura y ejecución, pero no de escritura.
- Intentar modificar instrucciones en tiempo de ejecución es peligroso.
- El sistema operativo protege este segmento para evitar cambios accidentales o maliciosos.
**Conclusión:** No podemos modificar la memoria donde se almacena el código ejecutable.

#### **Experimento 2:**
Este experimento intenta modificar una constante global que se almacena en la memoria de solo lectura.

**Análisis del código**

1. `mensaje_ro` es una constante global, que apunta a una cadena de texto en memoria de solo lectura.
2. El puntero `ptr` recibe la dirección de `mensaje_ro`.
3. Se intenta modificar la memoria en esa dirección.
**¿Qué ocurre?**

El programa falla con un error de segmentación.
Las cadenas de texto constantes suelen almacenarse en una sección de solo lectura dentro del segmento de datos. Intentar escribir en esta memoria genera una violación de acceso.

**¿Por qué sucede esto?**
1. En C++, las cadenas de texto definidas como `const char*` suelen almacenarse en una sección de memoria de solo lectura.
2. Aunque `mensaje_ro` es un puntero, la cadena `"Hola, memoria de solo lectura"` está en una memoria protegida.
3. Cuando intentamos modificarla, el sistema operativo evita que alteremos esa zona de memoria.

**Conclusión:** Intentar modificar una cadena de texto en la memoria de solo lectura generalmente causa un error de segmentación.