#### Esta es la solucion de mi actividad ✍️
---

#### **opengl32.lib:**
Esta es una librería que viene con Windows y que se usa para iniciar OpenGL. Sin ella, no podrías crear ni siquiera la ventana donde se va a dibujar. Pero ojo, solo contiene funciones básicas de OpenGL muy antiguas (hasta la versión 1.1). Por eso no puedes hacer gráficos modernos solo con esta librería.

#### **GLFW:**
Esta biblioteca se encarga de crear la ventana donde se mostrará tu gráfico, manejar el teclado, el mouse y crear el contexto de OpenGL para que puedas dibujar.
Para usar GLFW necesitas dos archivos:
- glfw3.lib que se usa al compilar para que el programa sepa qué funciones están disponibles.
- glfw3.dll que es el código real que se ejecuta cuando corres tu programa. Si no tienes este archivo .dll en la carpeta donde corre tu programa, no funcionará aunque compile bien.

#### **GLAD:**
OpenGL tiene muchas funciones modernas (versiones 3.3, 4.6, etc.) que no están en opengl32.lib porque dependen del driver de tu tarjeta gráfica. GLAD es un cargador de funciones que, en tiempo de ejecución, consulta al driver para obtener la dirección de estas funciones modernas y hacerlas disponibles para tu programa. Para usar GLAD debes agregar su código fuente (glad.c) y sus archivos de encabezado al proyecto.

#### **GLM (opcional):**
Esta es una biblioteca que solo contiene código para hacer matemáticas con vectores y matrices, muy útil para gráficos 3D (por ejemplo, para mover objetos, rotarlos o hacer proyecciones). No requiere archivos especiales, solo se incluye como código fuente en tu proyecto.

#### **Drivers de la GPU:**
Son los programas que controlan tu tarjeta gráfica y que implementan las funciones modernas de OpenGL. GLAD se comunica con estos drivers para poder usar esas funciones en tu código.

#### **Cómo se relacionan:**
- Windows te da opengl32.lib para iniciar OpenGL, pero solo con funciones antiguas.
- GLFW crea la ventana y el contexto para que puedas dibujar con OpenGL y maneja el teclado y mouse.
- GLAD carga en tiempo de ejecución las funciones modernas de OpenGL que están en los drivers de tu tarjeta gráfica.
- GLM te ayuda con las matemáticas para crear animaciones y transformaciones.