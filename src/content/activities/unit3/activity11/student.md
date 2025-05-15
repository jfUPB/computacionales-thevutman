
#### Esta es la solucion de mi actividad ✍️
---

#### **Conclusiones sobre miembros estáticos y de instancia**
- **Miembros de instancia (`valor`)**

    - Se almacenan en el stack si el objeto es local.
    - Se almacenan en el heap si el objeto es dinámico.
    - Cada objeto tiene su propia copia de valor.

- **Miembros estáticos (`total`)**

    - Se almacenan en el Data Segment (área de memoria global).
    - No pertenecen a una instancia específica, sino a la clase en sí.
    - Se comparte entre todos los objetos de la clase.

#### **Ventajas y Desventajas de Miembros Estáticos**
|Aspecto	|Ventajas	|Desventajas|
|-----------|-----------|-----------|
|Miembros de instancia	|Cada objeto tiene su propio estado	|Mayor uso de memoria si hay muchas instancias|
|Miembros estáticos	|Se comparten entre todas las instancias, permitiendo datos globales de clase	|No pueden almacenar datos específicos de un objeto|

**Cuándo usar static**

- Para contadores de instancias (`total` en este caso).
- Para constantes compartidas (`static const double PI = 3.14159;`).
- Para métodos de utilidad que no dependen de instancias.

#### **Preguntas y Respuestas Finales**
1. **¿Qué puedes concluir de los miembros estáticos y de instancia?**
- Los miembros estáticos pertenecen a la clase, no a los objetos individuales.
- Los miembros de instancia son específicos de cada objeto.

2. **¿Dónde se almacenan c1, c2, c3 y Contador::total?**
- `c1` y `c2`: Stack.
- `c3`: Stack (pero solo como puntero).
- `*c3` (objeto al que apunta `c3`): Heap.
- `Contador::total`: Data Segment (zona de variables estáticas).

3. **¿Cuál es la diferencia entre c3 y *c3 en términos de memoria?**
- `c3` es un puntero en el stack.
- `*c3` es el objeto real en el heap.

