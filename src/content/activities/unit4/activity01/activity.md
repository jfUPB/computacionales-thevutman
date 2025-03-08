#### Visualizando listas enlazadas con openFrameworks

En esta actividad te voy a mostrar el resultado de lo que lograrás en la unidad.  
Ten presente que en el ejemplo que te enseñaré voy a usar una estructura de datos 
que aún no has visto y que se llama lista enlazada. No te preocupes, en la siguiente 
actividad te mostraré cómo implementarla. Por ahora, la idea es que te familiarices
con openFrameworks.

**Enunciado**: te mostraré los pasos para instalar y configurar openFrameworks en tu computadora.  
luego analizaremos un ejemplo de programación creativa que utiliza openFrameworks y una lista enlazada, 
pero usando la implementación de la biblioteca estándar de C++. Finalmente, te pediré que realices una 
modificación al código que te mostraré aplicando algunos conceptos aprendidos en las unidades anteriores.


**Instalación**: para instalar openFrameworks en tu computadora, sigue los siguientes pasos:

- Lo primero que debes verificar es que tengas instalado Visual Studio. Ten presente que en las 
computadoras de la Universidad tenemos licencia para la versión profesional. Si quieres 
[instalar Visual Studio](https://visualstudio.microsoft.com/) en tu computadora, vas a tener que instalar 
la versión Community. ESTE PROCESO LO DEBES HACER POR FUERA DE LA SESIÓN DE TRABAJO porque puede tardar 
mucho tiempo. Mi recomendación es que uses las computadoras de la Universidad. 
- En las computadoras de la Universidad ya tienes instalado el compilador de C++; sin embargo, es posible 
que no lo tengas en tu computadora. De nuevo, te recomiendo que uses las computadoras de la Universidad para 
que aproveches el tiempo de la sesión de trabajo. No obstante, si quieres instalar el compilador en tu
computadora, puedes hacerlo siguiendo [este tutorial](https://youtu.be/yIb4icSHfBY?si=R5cR_6E3mf2hc1ok).
- Descarga openFrameworks desde [este enlace](https://openframeworks.cc/download/). En este punto 
seleccionaras Windows y Visual Studio. En una vez descargado el archivo, descomprímelo en el directorio 
de Documentos de tu computadora. No lo pongas en el escritorio.
- Abre el archivo emptyExample.sln que se encuentra en la carpeta `apps/myApps/emptyExample` de la carpeta
donde descomprimiste openFrameworks.
- Haz clic en el botón de `Local Windows Debugger` para compilar y ejecutar el proyecto. Si todo está bien,
deberías ver una ventana en blanco.

**Resultado esperado**: vas a crear un proyecto en openFrameworks y añadirás el código que te mostraré.

- Ve al directorio projectGenerator que se encuentra en la carpeta de openFrameworks. Ejecuta el archivo 
projectGenerator.exe.
- Nombra el proyecto scUnit4Activity01. Verifica que la ruta de tu proyecto sea `apps/myApps` y que la plataforma 
sea Visual Studio. Haz clic en el botón de `Generate`.
- Si todo sale bien deberías ver un mensaje que dice que el proyecto se generó correctamente. Haz clic en el
botón de `Open in IDE`.
- Al abrir el proyecto por primera vez verás una ventaja emergente que te indicará que es necesario actualizar 
el proyecto. Haz clic en el botón de `OK`. Esta acción actualizará la configuración del proyecto para que se 
pueda compilar con la versión de Windows SDK y el compilador de Visual Studio que tienes instalado.
- Haz clic en el botón de `Local Windows Debugger` para compilar y ejecutar el proyecto. Si todo está bien,
deberías ver una ventana en blanco.
- Cierra la ventana emergente que se abrió al principio y abre el archivo `ofApp.cpp` que se encuentra en la
carpeta `src` del proyecto.
- Copia y pega el siguiente código en el archivo `ofApp.cpp`:

``` cpp


