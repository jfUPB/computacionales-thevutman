#### Esta es la solucion de mi actividad ✍️
---


#### **Patrón Observer en mi proyecto**
**¿En qué parte específica de tu código implementaste el rol de Sujeto (Subject)?**

El sujeto se implementó en la clase `Subject`, de la cual hereda la clase principal `ofApp`. El siguiente fragmento muestra su definición y cómo se añaden observadores:

```cpp
// ofApp.h
class Subject {
public:
    void addObserver(Observer* observer);
    void removeObserver(Observer* observer);
protected:
    void notify(const std::string& emotion);
private:
    std::vector<Observer*> observers;
};

// ofApp.cpp
void Subject::addObserver(Observer* observer) {
    observers.push_back(observer);
}

void Subject::notify(const std::string& emotion) {
    for (Observer* o : observers) {
        o->onNotify(emotion);
    }
}
```
**¿Qué clase(s) implementaron el rol de Observador (Observer)?**

La clase `Particle` implementa la interfaz `Observer`, y por eso puede recibir notificaciones:

``` cpp
class Particle : public Observer {
public:
    void onNotify(const std::string& emotion) override;
    ...
};
```
**¿Qué eventos concretos notificaba tu Sujeto?**

El sujeto notificaba emociones: `"joy"`, `"sad"`, `"angry"` y `"calm"`. Estas emociones representan estados emocionales que cada partícula (observer) interpreta para cambiar su comportamiento visual.

**¿Por qué elegiste usar Observer para esta comunicación en lugar de llamadas directas?**

Elegí Observer porque permite desacoplar el `Subject` (`ofApp`) de los `Observers` (`Particles`). Esto facilita escalar el sistema a muchos observadores sin depender de referencias directas, y permite agregar o quitar partículas fácilmente sin cambiar la lógica del controlador.

**¿Dónde se utiliza el patrón en el código?**

Se llama a `notify()` desde el evento de teclado en `ofApp::keyPressed`:

``` cpp
void ofApp::keyPressed(int key) {
    if (key == 'j') notify("joy");
    if (key == 's') notify("sad");
    if (key == 'a') notify("angry");
    if (key == 'c') notify("calm");
}
```
Y los observadores reaccionan en `Particle::onNotify`:

``` cpp
void Particle::onNotify(const std::string& emotion) {
    if (emotion == "joy") setState(new JoyState());
    else if (emotion == "sad") setState(new SadState());
    else if (emotion == "angry") setState(new AngryState());
    else if (emotion == "calm") setState(new CalmState());
}
```
#### **Patrón Factory Method en mi proyecto**
**¿Dónde está definido tu método factory?**

En la clase `ParticleFactory`:

``` cpp
class ParticleFactory {
public:
    static Particle* createParticle(const std::string& type);
};

// ofApp.cpp
Particle* ParticleFactory::createParticle(const std::string& type) {
    return new Particle();
}
```

**¿Qué tipos específicos de objetos creaba tu factory?**

La factory creaba objetos de tipo `Particle`. Aunque por ahora es un solo tipo ("default"), este patrón permite fácilmente extenderlo a tipos como `ParticleFeliz`, `ParticleTriste`, etc.

**¿Por qué fue beneficioso usar una factory aquí?**

Usar la factory ayudó a centralizar la lógica de creación de partículas, lo que facilita extender el proyecto con nuevas variantes de `Particle` sin cambiar la lógica en `ofApp`.

**¿Cómo usaste la factory en tu código cliente?**

``` cpp
void ofApp::setup() {
    for (int i = 0; i < 100; ++i) {
        Particle* p = ParticleFactory::createParticle("default");
        particles.push_back(p);
        addObserver(p);  // Agregamos el nuevo observer
    }
}
```

#### **Patrón State en mi proyecto**
**¿Qué clase actuó como Contexto?**

La clase `Particle`. Guarda una referencia a su estado actual:

``` cpp
class Particle {
private:
    State* state;
    ...
};
```

**¿Cuáles fueron los ConcreteStates que implementaste?**

Los estados concretos fueron:
- `JoyState`
- `SadState`
- `AngryState`
- `CalmState`

**Fragmentos de dos estados:**

``` cpp
// JoyState
void JoyState::onEnter(Particle* p) {
    p->color = ofColor::yellow;
    p->velocity *= 2;
}

// SadState
void SadState::onEnter(Particle* p) {
    p->color = ofColor::blue;
    p->velocity *= 0.2;
}
```
**¿Qué desencadenaba las transiciones entre estados?**

La recepción de una emoción en `onNotify`:

``` cpp
void Particle::onNotify(const std::string& emotion) {
    if (emotion == "joy") setState(new JoyState());
    ...
}
```
**¿Por qué decidiste usar el patrón State?**

Porque el comportamiento de una `Particle` cambia radicalmente dependiendo de su estado emocional. Usar `State` permite encapsular esos comportamientos y facilita extender el sistema con nuevos estados sin modificar `Particle`.

¿Alternativa? Usar `switch` o `if-else` dentro de `update`, pero esto hubiera hecho la clase `Particle` mucho más difícil de mantener.

#### **Definiciones Post-Experiencia**
**¿Qué es una clase?**

Una clase es una plantilla que define las características y comportamientos que tendrán los objetos. Es como el plano de un edificio.

**¿Qué es un objeto?**

Un objeto es una instancia concreta de una clase. Es como un edificio real construido a partir de un plano. Tiene estado (atributos) y comportamiento (métodos).

#### **Beneficios Estructurales**
El uso de los patrones Observer, Factory y State:
- Observer me permitió desacoplar la lógica de interacción (teclado) del comportamiento de los objetos (`Particles`), facilitando escalabilidad.
- Factory simplificó la creación y mantenimiento de los objetos, preparándome para posibles extensiones.
- State encapsuló comportamientos complejos y variables, haciendo que el código sea más claro, modular y fácil de modificar.