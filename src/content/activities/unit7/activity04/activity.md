#### Análisis del ejemplo del triángulo simple parte 2

:::note[🎯 Enunciado]
En la actividad anterior dejamos de lado algunos conceptos fundamentales de OpenGL. En esta actividad vamos a analizar el código del ejemplo del triángulo simple y a entender cómo funciona el pipeline de OpenGL. Vamos a ver cómo se comunican los shaders con el código C++ y cómo se envían los datos a la GPU.
:::

**¿Cuál es la diferencia entre una CPU y una GPU** para responder esta pregunta te pediré que veas el siguiente 
video de NVIDIA. No te asustes, es muy entretenido. [Mythbusters Demo GPU versus CPU](https://youtu.be/-P28LKWTzrI?si=fJJAHQJp44OLiKJk).

:::note[🧐✍️ Reporta en tu bitácora]
Luego de estudiar las unidades 1 y 2 de este curso y ver el video, en tus propias palabras ¿Cuál es la diferencia 
entre una CPU y una GPU? 
:::

**¿Cómo funcionan las gráficas en un computador?** de nuevo te voy a proponer que veas un video hermoso. La animación 
es increíble y la explicación es muy clara. [How Graphics Work](https://youtu.be/C8YtdC8mxTU?si=t41oXWfbK2Q3TSzf).

:::note[🧐✍️ Reporta en tu bitácora]
Es momento de practicar la técnica de aprender a aprender que te he venido mostrando de manera insistente a lo largo 
del curso. Te voy a proponer una serie de preguntas para que reflexiones y escribas en tu bitácora. Trata de responder 
de memoria a cada pregunta. No busques la respuesta en el video. Trata de recordar lo que viste. De todas maneras 
si no lo logras hacer, regresa al video y busca la respuesta.

1.  ¿Cuáles son los tres pasos claves del pipeline de OpenGL? Explica en tus propias palabras cuál es el objetivo 
de cada paso.
2. La gran novedad que introduce OpenGL moderno es el pipeline programable. ¿Qué significa esto? ¿Qué
diferencia hay entre el pipeline fijo y el programable? ¿Qué ventajas le ves a esto? y si el pipeline es programable, ¿Qué tengo 
que programar?
3. Si fueras a describir el proceso de **rasterización** como un dibujo ¿Qué dirías?
4. ¿Qué son los fragmentos? ¿Es lo mismo un fragmento que un pixel? ¿Por qué?
5. Explica qué problema resuelve el **Z-buffer** y ¿Qué es el depth test?
6. ¿Por qué se presenta el problema de la **aliasing**? ¿Qué es el anti-aliasing?
7. ¿Qué relación hay entre la iluminación y el fragment shader? Siempre es necesario tener en cuenta la iluminación 
en un fragment shader? o puedo hacer un fragment shader sin iluminación? Explica que implicaciones tiene esto.
8. ¿Qué implica para la GPU que una aplicación tenga múltiples fuentes de iluminación?
:::

Ahora que ya conoces cómo funciona el pipeline de OpenGL, vamos a analizar las partes del código del ejemplo del triángulo simple 
que dejamos pendientes en la actividad anterior. 

```cpp	
// 7) Compila y linkea shaders
shaderProg = buildShaderProgram();

// 8) Genera el contenido a mostrar
setupTriangle();
```

Antes de abordar a fondo estas líneas de código, es importante que analicemos el concepto de OBJETOS en OpenGL.
En OpenGL, los objetos son entidades que representan recursos gráficos. Estos recursos pueden incluir texturas, buffers de vértices, shaders y otros elementos necesarios para renderizar gráficos en la GPU. Cada objeto tiene un identificador único (ID) que se utiliza para referenciarlo en las llamadas a funciones de OpenGL.
Los objetos en OpenGL son gestionados por la GPU y permiten optimizar el rendimiento al reducir la cantidad de datos que deben ser transferidos entre la CPU y la GPU. Al crear un objeto, se asigna un ID único que se utiliza para referenciarlo en las llamadas a funciones de OpenGL. Esto permite a la GPU acceder rápidamente a los recursos necesarios para renderizar gráficos.

En este punto ya hemos analizado un gran objeto de OpenGL denominado el **contexto de OpenGL**. Este objeto es el que permite a OpenGL comunicarse con la GPU y gestionar los recursos gráficos. Dentro de este contexto, OpenGL crea y gestiona otros objetos como los buffers de vértices, los shaders y las texturas. Cada uno de estos objetos tiene su propio ID único que se utiliza para referenciarlo en las llamadas a funciones de OpenGL.

La estructura general de creación y uso de un objeto OpenGL es la siguiente:

```cpp
// Crea la variable que contendrá el ID del objeto
unsigned int objectId = 0;
// Genera el objeto y asigna un ID único
glGenObject(1, &objectId);
// Asocia el objeto a un destino específico dentro del contexto de OpenGL.
glBindObject(GL_WINDOW_TARGET, objectId);
// Establece opciones para el objeto
glSetObjectOption(GL_WINDOW_TARGET, GL_OPTION_WINDOW_WIDTH,  800);
glSetObjectOption(GL_WINDOW_TARGET, GL_OPTION_WINDOW_HEIGHT, 600);
// Hace una desactivación del objeto o un UNBINDING
glBindObject(GL_WINDOW_TARGET, 0);
``` 

Si luego se quiere usar el objeto, se hace un **binding** del objeto y todos los comandos que se envían a OpenGL 
se aplican a ese objeto. Por ejemplo, si se quiere usar un shader, se hace un binding del shader y todos los comandos que se envían a OpenGL se aplican a ese shader. Esto permite a OpenGL gestionar múltiples objetos de manera eficiente y optimizar el rendimiento al reducir la cantidad de datos que deben ser transferidos entre la CPU y la GPU.

Vamos a repasar algunas de las etapas del pipeline de OpenGL y cómo se relacionan con el código que hemos visto hasta ahora. Para 
ello vamos a tomar como referencia esta imagen tomada del curso [learnopengl.com](https://learnopengl.com/Getting-started/Hello-Triangle):

![render pipeline](../../../../assets/pipeline.png)

Observa en la gráfica que lo primero que se recibe son los datos de los vértices. Estos datos son
enviados a la GPU y se almacenan en un buffer de vértices (VBO). Este buffer es un objeto OpenGL que contiene los datos de los vértices y se utiliza para enviar estos datos a la GPU. En el código del ejemplo del triángulo simple, esto se hace en la función `setupTriangle()`.

```cpp
void setupTriangle() {
	float vertices[] = {
		-0.5f, -0.5f, 0.0f,
		 0.5f, -0.5f, 0.0f,
		 0.0f,  0.5f, 0.0f
	};

	glGenVertexArrays(1, &VAO);
	glGenBuffers(1, &VBO);

	glBindVertexArray(VAO);
	glBindBuffer(GL_ARRAY_BUFFER, VBO);
	glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);
	glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void*)0);
	glEnableVertexAttribArray(0);
	glBindVertexArray(0);
}
```

Nota que lo primero que hacemos es definir los vértices del triángulo. Luego, creamos un objeto VAO (Vertex Array Object) y un VBO (Vertex Buffer Object). El objeto VAO es un objeto OpenGL que contiene la configuración de los atributos de los vértices y el objeto VBO es un objeto OpenGL que contiene los datos de los vértices. Fíjate que luego de crear los objetos para obtener el ID, hacemos un binding del VAO y del VBO. Esto significa que todos los comandos que se envían a OpenGL se aplican a estos objetos. Luego, enviamos los datos de los vértices al buffer de vértices (VBO) y configuramos los atributos de los vértices. Finalmente, hacemos un UNBINDING del VAO.

```cpp
glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);
```

Esta línea de código envía los datos de los vértices al buffer de vértices (VBO). El primer parámetro es el tipo de buffer, el segundo es el tamaño de los datos, el tercero son los datos (un puntero al primer elemento del arreglo) y el cuarto es la forma en que se van a usar los datos. En este caso, estamos usando `GL_STATIC_DRAW` porque los datos no van a cambiar.

```cpp
	glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void*)0);
```

Esta línea de código configura los atributos de los vértices. El primer parámetro es el índice del atributo (en este caso 0), el segundo es el número de componentes por vértice (en este caso 3, porque cada vértice tiene 3 coordenadas), el tercero es el tipo de dato (en este caso `GL_FLOAT`), el cuarto es si los datos están normalizados o no (en este caso `GL_FALSE`), el quinto es el tamaño del paso entre los atributos (en este caso 3 * sizeof(float)) y el sexto es un puntero al primer elemento del arreglo.

```cpp
glEnableVertexAttribArray(0);
```

Esta línea de código habilita el atributo de vértice. El parámetro es el índice del atributo (en este caso 0). Esto significa que todos los comandos que se envían a OpenGL se aplican a este atributo. Nota pues que primero definimos la estructura de los datos 
del vértice y luego habilitamos el atributo para que openGL lo use al momento de dibujar.

```cpp
glBindVertexArray(0);
```

Finalmente, hacemos un UNBINDING del VAO. Esto significa que todos los comandos que se envían a OpenGL no se aplican a este objeto. Esto es importante porque si no hacemos un UNBINDING, todos los comandos que se envían a OpenGL se aplican a este objeto y esto puede causar problemas.

Te estarás preguntado ¿Qué es eso de los atributos? **¿Qué es eso de los vertex attributes?**
Los atributos de vértice son propiedades que describen cada vértice en un buffer de vértices. Estos atributos pueden incluir información como la posición, el color, las coordenadas de textura y las normales. Cada atributo tiene un índice único que se utiliza para referenciarlo en el shader. En el ejemplo del triángulo simple, solo estamos usando la posición del vértice como atributo. Sin embargo, en aplicaciones más complejas, puedes tener múltiples atributos por vértice.

Debes estar haciéndote una pregunta desde hace rato 



