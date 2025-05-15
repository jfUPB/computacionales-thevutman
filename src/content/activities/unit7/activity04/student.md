
#### Esta es la solucion de mi actividad ✍️
---

#### **Diferencia entre CPU y GPU**
Una CPU (Unidad Central de Procesamiento) es como un cerebro generalista: puede hacer muchas tareas diferentes, una por una o unas pocas a la vez. Está optimizada para procesos secuenciales y decisiones complejas. Una GPU (Unidad de Procesamiento Gráfico) es como un ejército de obreros simples que pueden hacer muchísimas tareas al mismo tiempo, pero solo si son muy parecidas entre sí. Ideal para renderizar gráficos, donde tienes que calcular colores o posiciones para millones de píxeles o vértices en paralelo.

#### **¿Cómo funcionan las gráficas en un computador?**
El video explica que todo lo que vemos en pantalla son millones de píxeles que deben calcularse muchas veces por segundo. Cada objeto 3D en una escena se construye con triángulos, y la computadora debe convertir esos triángulos (coordenadas, colores, texturas) en píxeles visibles.

#### **¿Cuáles son los tres pasos claves del pipeline de OpenGL?**
1. Vertex Processing Se procesan los vértices de los modelos: se transforman desde su posición original 3D a la pantalla 2D, aplicando matrices de transformación.
2. Rasterization Convierte los triángulos formados por vértices en fragmentos (posibles píxeles). Aquí se “rellena” el interior del triángulo para decidir qué parte toca qué píxeles.
3. Fragment Processing Cada fragmento se analiza para ver qué color debe tener, si está iluminado, con qué textura, y si debe mostrarse o no (por profundidad o transparencia).

#### **¿Qué significa que el pipeline sea programable?**
En OpenGL moderno, tú puedes escribir tus propios shaders, que son mini-programas que definen cómo se procesan los vértices y los fragmentos.

#### **Diferencias:**
- Pipeline fijo (OpenGL legacy): OpenGL ya traía todo programado (cámaras, luces, colores).
- Pipeline programable: Ahora tú decides cómo OpenGL procesa cada paso. Tienes más control, flexibilidad y poder.

#### **Ventajas:**
- Puedes lograr efectos únicos, como agua, fuego, neón, etc.
- Puedes optimizar tu programa según lo que necesites.
- Puedes agregar nuevas técnicas como iluminación dinámica, sombras, etc.

#### **¿Qué es la rasterización?**
Es el proceso donde se toman los triángulos ya transformados y se determina qué píxeles deben encenderse para representar su superficie. Es como colorear las áreas internas de los triángulos usando reglas geométricas.

#### **¿Qué son los fragmentos? ¿Son lo mismo que los píxeles?**
No son lo mismo. Un fragmento es como un candidato a píxel: aún no está aprobado para aparecer. Se le calculan cosas como color, iluminación, profundidad, etc. Una vez pasa todas las pruebas (depth test, stencil, etc.), se convierte en píxel visible.

#### **¿Qué problema resuelve el Z-buffer y qué es el depth test?**
El Z-buffer (buffer de profundidad) guarda la distancia al observador de cada fragmento. El depth test compara esta distancia con la que ya hay en pantalla. Si el nuevo fragmento está más cerca, se dibuja; si está más lejos, se ignora. Esto evita que objetos lejanos tapen a los cercanos.

#### **¿Por qué ocurre el aliasing y qué es el anti-aliasing?**
El aliasing ocurre porque los píxeles son cuadrados, y cuando una línea no es perfectamente horizontal o vertical, se ven “escalonados”. El anti-aliasing suaviza esas líneas agregando colores intermedios para que se vea más natural, como un desenfoque sutil.

#### **Relación entre iluminación y fragment shader**
La iluminación se calcula en el fragment shader, ya que ahí es donde se sabe la posición exacta de la superficie que se va a pintar y cómo la luz la afecta.

#### **¿Qué implica para la GPU que haya múltiples fuentes de luz?**
Cada fuente de luz requiere cálculos adicionales por cada fragmento: ángulos, intensidad, sombras, etc. Mientras más luces uses: • Más operaciones por fragmento • Más uso de recursos de la GPU • Posibles caídas en el rendimiento Por eso se suelen usar sombras pre-renderizadas, luz ambiental o luces agrupadas.

#### **¿Qué se necesita para dibujar un triángulo en OpenGL?**
Para dibujar un triángulo en OpenGL, primero se definen las posiciones de sus vértices en un arreglo. Luego, se crean objetos de OpenGL que almacenan y configuran estos datos: el VBO (Vertex Buffer Object) almacena las posiciones en la memoria de la GPU, y el VAO (Vertex Array Object) guarda la configuración de cómo se deben interpretar esos datos. Después, se hace un binding de estos objetos para que OpenGL sepa que va a trabajar con ellos. También se envían los datos al VBO y se configuran los atributos de los vértices, como la posición, con funciones como glVertexAttribPointer. Finalmente, se dibuja el triángulo con una llamada como glDrawArrays, pero esto solo funcionará si también se ha activado un shader válido.

#### **¿Qué se necesita para usar un shader en OpenGL?**
Para usar un shader en OpenGL, primero hay que escribir su código en GLSL (uno para el vertex shader y otro para el fragment shader). Luego se crea un objeto shader, se le asigna el código fuente, se compila y se revisa si hay errores. Después, se crea un programa de shader, al que se adjuntan los shaders compilados, y se linkea. Si todo sale bien, se eliminan los objetos individuales de los shaders porque ya están contenidos dentro del programa. Finalmente, para usarlo durante el dibujo, hay que activar este programa con glUseProgram, lo cual indica que ese conjunto de shaders será el que la GPU debe usar para procesar los vértices y fragmentos.