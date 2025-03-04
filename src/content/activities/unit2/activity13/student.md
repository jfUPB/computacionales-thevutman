
#### Esta es la solucion de mi actividad ✍️

1. 
En esta unidad, aprendí sobre el lenguaje de máquina y ensamblador, comprendiendo cómo se ejecutan las instrucciones a nivel de hardware. Un aspecto clave fue la traducción de código de alto nivel a lenguaje ensamblador y, posteriormente, a código binario.

Por ejemplo, en la Actividad 10, modifiqué un programa en ensamblador para que reaccionara a las teclas p y b, implementando una función llamada pantalla. Esto me ayudó a entender cómo estructurar funciones en ensamblador y manejar saltos condicionales.

Además, en la Actividad 12, traduje estructuras fundamentales como condicionales, ciclos y manejo de punteros desde C# a ensamblador. Un ejemplo concreto fue la implementación de un ciclo while en ensamblador, donde tuve que manejar comparaciones y saltos manualmente

2. 
Uno de los conceptos más desafiantes fue la manipulación de punteros en ensamblador. En lenguajes de alto nivel como C#, los punteros y referencias se manejan de forma automática, pero en ensamblador es necesario manipular directamente direcciones de memoria.

Por ejemplo, para modificar un valor mediante un puntero en ensamblador, tuve que recordar que debía cargar la dirección en un registro antes de modificar el contenido:

``` assembly
@p
A=M  // Acceder a la dirección almacenada en p
M=10 // Modificar el valor en esa dirección`
```

3. 
Para abordar estos desafíos, usé varias estrategias:

Comparación con código de alto nivel: Escribir primero el programa en C# y luego traducirlo a ensamblador me ayudó a entender la correspondencia entre ambos lenguajes.

Uso del simulador de Hack: Probé cada programa en el simulador para ver la ejecución paso a paso y corregir errores.

Descomposición del código: Dividí problemas complejos en partes más pequeñas. Por ejemplo, antes de implementar la función pantalla, primero probé una versión simple con una sola condición.

Consultas y documentación: Busqué ejemplos en la documentación de Hack y revisé explicaciones sobre la arquitectura del procesador Hack.

4. 
La estrategia más efectiva fue usar el simulador de Hack, ya que me permitió visualizar la ejecución del código y corregir errores en tiempo real. También fue muy útil escribir primero el código en C# y luego traducirlo a ensamblador, porque facilitó la comprensión de la lógica sin perderse en los detalles técnicos.

Gracias a estas estrategias, logré mejorar mi comprensión del ensamblador y la forma en que interactúa con el hardware. 🚀
