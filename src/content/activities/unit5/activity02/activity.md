#### Análisis de un caso de estudio

🎯 **Enunciado**: en esta actividad vas a recordar y sobre todo a ``redescubrir`` 
algunos conceptos fundamentales de la programación orientada a objetos, pero 
esta vez lo harás desde la experimentación y la curiosidad. Quiero insistir 
en esto. En cursos previos ya abordaste teóricamente estos conceptos e 
incluso los aplicaste en ejercicios prácticos. Sin embargo, en esta actividad 
vas a experimentar con el caso de estudio y con el depurador de código para 
que puedas comprender mejor cómo se comportan los objetos en un programa y 
cómo se implementan algunos conceptos como la herencia, el polimorfismo y 
el encapsulamiento.

**Concepto de objetos**: en la programación orientada a objetos, un objeto 
es una instancia de una clase. Una clase define un tipo de objeto, pero no 
es un objeto en sí mismo. Pero ¿Cómo se ve un objeto en la memoria? ¿Qué pasa 
cuando se crea un objeto con esas posiciones de memoria?

Considera el caso de estudio. Usa el depurador para encontrar la instancia 
de la clase ofApp. Recuerda que debes usar el depurador porque el objeto 
solo estará en la memoria mientras la aplicación esté corriendo.

Antes de comenzar el experimento observa la clase ofApp:


``` cpp
class ofApp : public ofBaseApp {
public:
    void setup();
    void update();
    void draw();
    void mousePressed(int x, int y, int button);
    void keyPressed(int key);

    std::vector<Particle*> particles;
    ~ofApp();

private:
    void createRisingParticle();

};
```

🧐🧪✍️ Antes de ejecutar el experimento, ¿Qué esperas ver 
en memoria (hipótesis)? Ejecuta el código y muestra una captura de 
pantalla del objeto en la memoria. ¿Qué puedes observar? ¿Qué 
información te proporciona el depurador? ¿Qué puedes concluir?

🧐🧪✍️ Usa de nuevo el depurador para capturar un objeto de tipo 
``CircularExplosion``. Es posible que tengas que tengas que hacer 
modificaciones mínimas en el código para que puedas capturar este 
objeto más fácilmente. Observa con el depurador la ventana de Auto o Locals 
y la ventana de Memory 1. Trata de buscar en memoria todas las partes 
que componen al objeto tipo ``CircularExplosion`` ¿Qué puedes observar 
en la memoria? ¿Qué información te proporciona el depurador? ¿Qué
puedes concluir? NO OLVIDES tener a la mano todas la jerarquía de clases 
que componen a ``CircularExplosion``. De esta manera podrás identificar 
cada parte del objeto en memoria.



📤 **Entrega**: reporta en la bitácora tu hallazgos en todos los puntos que te 
marqué para analizar 🧐, experimentar 🧪 y reportar ✍️.
