#### Esta es la solucion de mi actividad ✍️
---

#### **ofApp.h**
``` cpp
#pragma once

#include "ofMain.h"
#include <vector>
#include <string>

// ---------------- Observer ----------------
class Observer {
public:
    virtual void onNotify(const std::string& emotion) = 0;
};

// ---------------- Subject ----------------
class Subject {
public:
    void addObserver(Observer* observer);
    void removeObserver(Observer* observer);
protected:
    void notify(const std::string& emotion);
private:
    std::vector<Observer*> observers;
};

// ---------------- Forward declaration ----------------
class Particle;

// ---------------- State ----------------
class State {
public:
    virtual void update(Particle* particle) = 0;
    virtual void onEnter(Particle* particle) {}
    virtual void onExit(Particle* particle) {}
    virtual ~State() = default;
};

// ---------------- Particle ----------------
class Particle : public Observer {
public:
    Particle();
    ~Particle();

    void update();
    void draw();
    void onNotify(const std::string& emotion) override;
    void setState(State* newState);

    ofVec2f position;
    ofVec2f velocity;
    float size;
    ofColor color;

private:
    State* state;
};

// ---------------- States ----------------
class JoyState : public State {
public:
    void update(Particle* particle) override;
    void onEnter(Particle* particle) override;
};

class SadState : public State {
public:
    void update(Particle* particle) override;
    void onEnter(Particle* particle) override;
};

class AngryState : public State {
public:
    void update(Particle* particle) override;
    void onEnter(Particle* particle) override;
};

class CalmState : public State {
public:
    void update(Particle* particle) override;
    void onEnter(Particle* particle) override;
};

// ---------------- ParticleFactory ----------------
class ParticleFactory {
public:
    static Particle* createParticle(const std::string& type);
};

// ---------------- ofApp ----------------
class ofApp : public ofBaseApp, public Subject {
public:
    void setup();
    void update();
    void draw();
    void keyPressed(int key);

private:
    std::vector<Particle*> particles;
};

```

#### **ofApp.cpp**
``` cpp
// ofApp.cpp
#include "ofApp.h"

// Subject Methods
void Subject::addObserver(Observer* observer) {
    observers.push_back(observer);
}

void Subject::notify(const std::string& emotion) {
    for (Observer* o : observers) {
        o->onNotify(emotion);
    }
}

// Particle Methods
Particle::Particle() {
    position = ofVec2f(ofRandomWidth(), ofRandomHeight());
    velocity = ofVec2f(ofRandom(-1, 1), ofRandom(-1, 1));
    size = ofRandom(3, 6);
    color = ofColor::white;
    state = new CalmState();
}

Particle::~Particle() {
    delete state;
}

void Particle::setState(State* newState) {
    if (state) {
        state->onExit(this);
        delete state;
    }
    state = newState;
    if (state) {
        state->onEnter(this);
    }
}

void Particle::update() {
    if (state) state->update(this);
    position += velocity;

    if (position.x < 0 || position.x > ofGetWidth()) velocity.x *= -1;
    if (position.y < 0 || position.y > ofGetHeight()) velocity.y *= -1;
}

void Particle::draw() {
    ofSetColor(color);
    ofDrawCircle(position, size);
}

void Particle::onNotify(const std::string& emotion) {
    if (emotion == "joy") {
        setState(new JoyState());
    }
    else if (emotion == "sad") {
        setState(new SadState());
    }
    else if (emotion == "angry") {
        setState(new AngryState());
    }
    else if (emotion == "calm") {
        setState(new CalmState());
    }
}

// JoyState
void JoyState::onEnter(Particle* p) {
    p->color = ofColor::yellow;
    p->velocity *= 2;
}
void JoyState::update(Particle* p) {
    // Already increased velocity
}

// SadState
void SadState::onEnter(Particle* p) {
    p->color = ofColor::blue;
    p->velocity *= 0.2;
}
void SadState::update(Particle* p) {
    // Slow drifting
}

// AngryState
void AngryState::onEnter(Particle* p) {
    p->color = ofColor::red;
    p->velocity.x *= -1;
    p->velocity.y *= -1;
}
void AngryState::update(Particle* p) {
    // Keep bouncing fast
    p->velocity *= 1.05;
}

// CalmState
void CalmState::onEnter(Particle* p) {
    p->color = ofColor(200);
    p->velocity = ofVec2f(ofRandom(-0.5f, 0.5f), ofRandom(-0.5f, 0.5f));
}
void CalmState::update(Particle* p) {
    // Gentle motion
}

// Factory
Particle* ParticleFactory::createParticle(const std::string& type) {
    return new Particle();
}

// ofApp Methods
void ofApp::setup() {
    ofBackground(20);
    for (int i = 0; i < 100; ++i) {
        Particle* p = ParticleFactory::createParticle("default");
        particles.push_back(p);
        addObserver(p);
    }
}

void ofApp::update() {
    for (auto& p : particles) {
        p->update();
    }
}

void ofApp::draw() {
    for (auto& p : particles) {
        p->draw();
    }

    ofDrawBitmapStringHighlight("Press keys: J (Joy), S (Sad), A (Angry), C (Calm)", 10, 20);
}

void ofApp::keyPressed(int key) {
    if (key == 'j') notify("joy");
    if (key == 's') notify("sad");
    if (key == 'a') notify("angry");
    if (key == 'c') notify("calm");
}

```

#### **Descripción del proyecto**
Este proyecto es una aplicación de arte generativo desarrollada con openFrameworks. Simula un sistema de partículas emocionales, donde cada partícula reacciona visualmente y en movimiento a diferentes emociones humanas: alegría, tristeza, ira y calma.

**¿Cómo interactúa el usuario?**

El usuario puede presionar distintas teclas para provocar una reacción emocional colectiva en todas las partículas:
- `J`: alegría (`joy`)
- `S`: tristeza (`sad`)
- `A`: ira (`angry`)
- `C`: calma (`calm`)

Al hacerlo, todas las partículas cambian su color, velocidad y comportamiento, generando una visualización dinámica y expresiva del estado emocional colectivo.

#### **Diseño con patrones de diseño**
- **Observer**

**¿Quién es tu Sujeto?**

La clase `ofApp`, que hereda de `Subject`.

**¿Quiénes son tus Observadores?**

Cada `Particle` implementa la interfaz `Observer` y se registra en `ofApp`.

**¿Qué eventos se notifican?**

Eventos de emociones: `"joy"`, `"sad"`, `"angry"` y `"calm"`.

**¿Cómo probaste que la notificación y reacción funcionan?**

Presionando teclas y observando visualmente que todas las partículas cambian su estado (color y movimiento) acorde a la emoción.

**Fragmento clave:**
``` cpp
// En ofApp::keyPressed()
if (key == 'j') notify("joy");

// En Subject
void Subject::notify(const std::string& emotion) {
    for (Observer* o : observers) {
        o->onNotify(emotion);
    }
}

// En Particle
void Particle::onNotify(const std::string& emotion) {
    if (emotion == "joy") setState(new JoyState());
}
```

- **Factory Method**
**¿Cuál es tu clase Factory y tu método factory?**

`ParticleFactory` y su método estático `createParticle`.

**¿Qué tipos de “productos” crea?**

Actualmente crea objetos del tipo `Particle`. Está preparado para permitir extensiones (por ejemplo: partículas especiales).

**¿Por qué decidiste usar una factory aquí?**

Para centralizar la creación de partículas y facilitar futuras extensiones del sistema (por ejemplo, partículas con comportamiento diferente).

**¿Cómo probaste que crea los objetos correctos?**

Verificando que el programa inicializa 100 partículas y estas se comportan como se espera.

**Fragmento clave:**

```cpp
// En ParticleFactory
Particle* ParticleFactory::createParticle(const std::string& type) {
    return new Particle();
}

// En ofApp::setup()
for (int i = 0; i < 100; ++i) {
    Particle* p = ParticleFactory::createParticle("default");
    particles.push_back(p);
    addObserver(p);
}
```
- **State**

**¿Qué clase es tu Contexto?**

`Particle`, que contiene un puntero al estado actual (`State* state`).

**¿Cuáles son tus Estados?**
- `JoyState`
- `SadState`
- `AngryState`
- `CalmState`

**¿Qué comportamientos diferentes encapsulan?**

Cada estado modifica:
- El color
- La velocidad (aumentarla, reducirla, invertirla, hacerla suave)
- El estilo de movimiento

**¿Cómo se gestionan las transiciones?**

Con el método `setState()` de `Particle`, que invoca `onExit` del estado actual y `onEnter` del nuevo.

**¿Cómo probaste que los cambios de estado y comportamiento funcionan?**

Probando cada tecla y observando visualmente el cambio en el comportamiento de las partículas.

**Fragmento clave:**

``` cpp
void Particle::setState(State* newState) {
    if (state) {
        state->onExit(this);
        delete state;
    }
    state = newState;
    if (state) {
        state->onEnter(this);
    }
}

// Ejemplo en JoyState
void JoyState::onEnter(Particle* p) {
    p->color = ofColor::yellow;
    p->velocity *= 2;
}
```

#### **Integración: Colaboración entre los tres patrones**

**Escenario:**
1. El usuario presiona la tecla `'a'` (ira).
2. `ofApp::keyPressed()` llama a `notify("angry")`.
3. El `Subject` (ofApp) notifica a todos los `Observers` (Particles).
4. Cada `Particle` recibe `"angry"` en `onNotify()` y llama a `setState(new AngryState())`.
5. Se ejecuta `onEnter()` del nuevo estado, cambiando el color a rojo y aumentando su velocidad progresivamente.
6. En el siguiente `update()`, el estado actual aplica su lógica (en este caso, multiplicar la velocidad).

**Resultado:** Se produce una explosión visual de partículas veloces, caóticas y rojas, simulando enojo.

#### **Desafíos y soluciones**
**Desafío 1: Integración de Observer y State sin errores de memoria**

- **Problema:** Manejo de punteros crudos (`State*`) podía provocar fugas de memoria si no se liberaban correctamente.
- **Solución:** Implementar correctamente `delete` en `setState()` y `~Particle()`.

**Desafío 2: Crear comportamientos diferenciados**
- **Problema:** Las diferencias de comportamiento entre estados no eran evidentes al principio.
- **Solución:** Ajustar parámetros de `velocity`, color y dirección de forma más extrema para cada emoción.

**Desafío 3: Validar visualmente los cambios**
- **Problema:** No siempre era fácil notar si los estados estaban funcionando.
- **Solución:** Usar `ofDrawBitmapStringHighlight()` para mostrar instrucciones y observar cambios claros de color y movimiento.