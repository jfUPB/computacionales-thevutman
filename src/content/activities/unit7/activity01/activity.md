#### Orientación y primer vistazo al entorno gráfico

:::note[🎯 Enunciado]
En esta actividad vas a descargar y ejecutar un par de ejemplos de OpenGL.
Vas a observar cómo funcionan y qué diferencias hay entre ellos. La idea de esta actividad es solo que 
pongas a funcionar ambos ejemplos. No es necesario que entiendas el código en este momento,
pero sí que observes cómo se comportan y qué diferencias hay entre ellos. En la fase de investigación 
vas a profundizar en el código y en los conceptos de OpenGL.
:::

**Ejemplo simple de un triángulo en OpenGL:**

1. Abre y explora el programa:

* Descarga el proyecto que está en [este repositorio de GitHub](https://github.com/juanferfranco/triangle)
*   Descomprime y abre el archivo de solución (`.sln`) de Visual Studio proporcionado.
*   Observa la estructura del proyecto en el Explorador de Soluciones e identifica el archivo de C++ `.cpp`.

2. Compila y ejecuta el ejemplo

**Ejemplo de un snake modificado en OpenGL:**

1. Abre y explora el caso de estudio:

* Descarga el proyecto que está en [este repositorio](https://github.com/juanferfranco/snakeArt).
* Descomprime y abre el archivo de solución (`.sln`) de Visual Studio proporcionado.
* Observa la estructura del proyecto en el Explorador de Soluciones e identifica el archivo de C++ `.cpp` y los shaders `.vert` y `.frag`.

2. Compila y ejecuta el ejemplo.

:::note[Este ejemplo ya lo viste]
¿Te diste cuenta que este ejemplo ya la habías visto antes? Lo novedoso es que antes 
este ejemplo lo habías visto hecho con OpenFrameworks y ahora lo estás viendo con OpenGL puro. Te preguntarás 
¿Por qué? La respuesta es que OpenGL es la base de OpenFrameworks. OpenFrameworks es una biblioteca que se construye sobre OpenGL y lo hace más fácil de usar. Entonces ¿Por qué no usamos OpenFrameworks? Porque quiero que entiendas cómo funciona OpenGL y cómo se construyen las cosas desde cero. ¿Por qué? Porque al entender los conceptos de OpenGL vas a poder usar cualquier otra herramienta 
que se construya sobre OpenGL o una API más avanzada como **Vulkan**. No olvides esto **POR FAVOR**. No aprendas simplemente 
herramientas, aprende conceptos. Las herramientas cambian, pero los conceptos son los mismos.
:::

:::note[🧐🧪✍️ Reporta en tu bitácora]
1.  Incluye una captura de pantalla de CADA uno de los ejemplos funcionando en tu máquina.
3.  Basándote solo en la observación visual, ¿Cuáles son las diferencias más obvias en complejidad y comportamiento entre el ejemplo del triángulo y el de la serpiente (snake)?
4.  ¿Qué preguntas te surgen inmediatamente al ver el código de la serpiente (incluso sin entenderlo del todo)?. Anota al menos dos 
que te gustaría investigar más adelante (no te preocupes que la idea de esta unidad es que las resuelvas).
:::

:::caution[📤 Entrega]
Capturas de pantalla de ambos ejemplos, y respuestas a las preguntas iniciales en tu bitácora. 
:::
