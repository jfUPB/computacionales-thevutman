
#### Esta es la solucion de mi actividad ✍️
---

#### **Contexto OpenGL**
- **Qué es:** Un espacio de trabajo interno que contiene el estado actual de OpenGL (shaders, buffers, texturas, etc.), la conexión con la ventana y la versión de OpenGL.
- **Importancia:** Sin un contexto OpenGL activo, las llamadas a funciones de OpenGL no tienen efecto. Es el "estudio" donde el "artista" (GPU) realiza su trabajo.
- **Quién lo crea:** No OpenGL directamente, sino una biblioteca externa (en este caso GLFW), que crea la ventana y asocia el contexto.

#### **GLFW**
- **Qué es:** Biblioteca que permite crear ventanas y contextos OpenGL de manera multiplataforma.
- **Por qué es importante:** Abstrae las diferencias entre sistemas operativos para facilitar la creación de ventanas y la gestión de eventos (teclado, mouse, resize).

#### **Framebuffer**
- **Qué es:** Memoria (RAM de la GPU) donde OpenGL dibuja cada frame antes de mostrarlo en pantalla.
- **Importancia:** Aquí se pintan los píxeles antes de enviarlos al monitor.
- **Nota:** En pantallas Hi-DPI el tamaño del framebuffer puede ser mayor que el tamaño lógico de la ventana.

#### **Viewport**
- **Qué es:** Región del framebuffer donde OpenGL dibuja la escena.
- **Por qué es importante:** Debe coincidir o ajustarse al tamaño del framebuffer para evitar distorsiones en la imagen (estirado, recorte).

#### **Ciclo Principal (Game Loop)**
- Funciona mientras la ventana no esté cerrada.
- Procesa eventos (teclado, mouse, redimensionamiento).
- Procesa entrada (ejemplo: cerrar ventana con ESC).
- Limpia el framebuffer con un color de fondo.
- Usa shaders para definir cómo se dibuja la escena.
- Activa el VAO (Vertex Array Object) para dibujar el triángulo.
- Intercambia buffers para mostrar lo dibujado en pantalla.

#### **Experimentos "¿Qué pasaría si?"**
1. Modificar el viewport:
- `glViewport(0, 0, bufferWidth, bufferHeight);` → dibuja en toda el área visible.
- `glViewport(0, bufferHeight/2, bufferWidth/2, bufferHeight/2);` → dibuja solo en la mitad superior izquierda del framebuffer.
- Cambiar el viewport a valores más pequeños (dividir por 4) o más grandes (multiplicar por 2 o 4) provoca que la imagen se dibuje en áreas más pequeñas o más grandes, mostrando solo parte o un zoom de la escena.

#### **Cambiar el tamaño de la ventana:**
- Al cambiar el tamaño de la ventana, el framebuffer puede cambiar, especialmente en pantallas con escalado.
- Si no ajustamos el viewport con la nueva dimensión del framebuffer, la imagen puede verse distorsionada o cortada.

#### **Quitar la sincronización vertical (`glfwSwapInterval(1)`):**
- Puede producir tearing (desgarro de imagen) al no sincronizar el refresco de pantalla con la actualización de buffers.