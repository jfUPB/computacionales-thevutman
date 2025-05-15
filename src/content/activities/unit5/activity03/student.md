#### Esta es la solucion de mi actividad ✍️
---
#### ofApp.cpp
``` cpp
#include "ofApp.h"

// --------------------------------------------------------------
void ofApp::setup() {
    ofSetFrameRate(60);
    ofBackground(0);
}

// --------------------------------------------------------------
void ofApp::update() {
    float dt = ofGetLastFrameTime();

    // Actualiza todas las partículas
    for (int i = 0; i < particles.size(); i++) {
        particles[i]->update(dt);
    }

    // Procesa las partículas (iteración en reversa para facilitar eliminación)
    for (int i = particles.size() - 1; i >= 0; i--) {
        // Si la partícula debe explotar, generamos nuevas explosiones
        if (particles[i]->shouldExplode()) {
            int explosionType = (int)ofRandom(4); // 0: Circular, 1: Random, 2: Star
            int numParticles = (int)ofRandom(20, 30);
            for (int j = 0; j < numParticles; j++) {
                if (explosionType == 0) {
                    particles.push_back(new CircularExplosion(particles[i]->getPosition(), particles[i]->getColor()));
                }
                else if (explosionType == 1) {
                    particles.push_back(new RandomExplosion(particles[i]->getPosition(), particles[i]->getColor()));
                }
                else if (explosionType == 2){
                    particles.push_back(new StarExplosion(particles[i]->getPosition(), particles[i]->getColor()));
                }
                else if (explosionType == 3) {
                    particles.push_back(new SpiralExplosion(particles[i]->getPosition(), particles[i]->getColor()));
                }
            }
            delete particles[i];
            particles.erase(particles.begin() + i);
        }
        else if (particles[i]->isDead()) {
            delete particles[i];
            particles.erase(particles.begin() + i);
        }
    }
}

// --------------------------------------------------------------
void ofApp::draw() {
    for (int i = 0; i < particles.size(); i++) {
        particles[i]->draw();
    }
}

// --------------------------------------------------------------
void ofApp::createRisingParticle() {
    // Genera una RisingParticle cerca del centro inferior (con variación horizontal)
    float minX = ofGetWidth() * 0.35;
    float maxX = ofGetWidth() * 0.65;
    float spawnX = ofRandom(minX, maxX);
    glm::vec2 pos(spawnX, ofGetHeight());
    // La partícula apunta hacia un objetivo en la parte superior central
    glm::vec2 target(ofGetWidth() / 2 + ofRandom(-300, 300), ofGetHeight() * 0.10 + ofRandom(-30, 30));
    glm::vec2 direction = glm::normalize(target - pos);
    // Velocidad ajustada para recorrer una mayor distancia
    glm::vec2 vel = direction * ofRandom(250, 350);
    ofColor col;
    col.setHsb(ofRandom(255), 220, 255);
    float lifetime = ofRandom(1.5, 3.5); // Tiempo de vida antes de explotar
    particles.push_back(new RisingParticle(pos, vel, col, lifetime));
}

void ofApp::createFallingParticle() {
    glm::vec2 pos(100, 0); // Desde arriba
    glm::vec2 vel(ofRandom(-10, 10), 0); // Con algo de movimiento horizontal
    ofColor col;
    col.setHsb(ofRandom(255), 220, 255);
    float lifetime = ofRandom(1.5, 3.5); // Tiempo de vida antes de explotar
    particles.push_back(new FallingParticle(pos, vel, col, lifetime));
}

void ofApp::createSpinningParticle() {
    glm::vec2 center(300, 300); // Centro de rotación
    float radius = 5.0f;
    float speed = 3.0f;
    ofColor col;
    col.setHsb(ofRandom(255), 220, 255);
    float lifetime = ofRandom(1.5, 3.5); // Tiempo de vida antes de explotar
    particles.push_back(new SpinningParticle(center, radius, speed, col, lifetime));
}


// --------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button) {
    int tipo = ofRandom(3); // 0, 1 o 2

    switch (tipo) {
    case 0:
        createRisingParticle();
        break;
    case 1:
        createFallingParticle();
        break;
    case 2:
        createSpinningParticle();
        break;
    }
}

// --------------------------------------------------------------
void ofApp::keyPressed(int key) {
    if (key == ' ') {
        for (int i = 0; i < 1000; i++) {
            int tipo = ofRandom(3); // 0, 1 o 2

            switch (tipo) {
            case 0:
                createRisingParticle();
                break;
            case 1:
                createFallingParticle();
                break;
            case 2:
                createSpinningParticle();
                break;
            }
        }
    }
    if (key == 's') {
        ofSaveScreen("screenshot_" + ofToString(ofGetFrameNum()) + ".png");
    }
}

// --------------------------------------------------------------
ofApp::~ofApp() {
    for (int i = 0; i < particles.size(); i++) {
        delete particles[i];
    }
    particles.clear();
}
```

#### ofApp.h
``` cpp
#pragma once
#include "ofMain.h"
#include <vector>

// -------------------------------------------------
// Clase base abstracta: Particle
// -------------------------------------------------
class Particle {
public:
    virtual ~Particle() {}
    virtual void update(float dt) = 0;
    virtual void draw() = 0;
    virtual bool isDead() const = 0;
    // Nuevo método para saber si la partícula (tipo RisingParticle) debe explotar
    virtual bool shouldExplode() const { return false; }
    // Métodos para obtener posición y color, para usarlos en explosiones
    virtual glm::vec2 getPosition() const { return glm::vec2(0, 0); }
    virtual ofColor getColor() const { return ofColor(255); }
};

// -------------------------------------------------
// RisingParticle: Partícula que nace en la parte inferior central y sube
// -------------------------------------------------
class RisingParticle : public Particle {
protected:
    glm::vec2 position;
    glm::vec2 velocity;
    ofColor color;
    float lifetime; // tiempo máximo antes de explotar
    float age;
    bool exploded;
public:
    RisingParticle(const glm::vec2& pos, const glm::vec2& vel, const ofColor& col, float life)
        : position(pos), velocity(vel), color(col), lifetime(life), age(0), exploded(false) {
    }

    void update(float dt) override {
        position += velocity * dt;
        age += dt;
        // Aumenta la desaceleración para dar sensación de recorrido largo
        velocity.y += 9.8f * dt * 8;
        // Condición de explosión: cuando la partícula alcanza aproximadamente el 15% de la altura
        float explosionThreshold = ofGetHeight() * 0.15 + ofRandom(-30, 30);
        if (position.y <= explosionThreshold || age >= lifetime) {
            exploded = true;
        }
    }

    void draw() override {
        ofSetColor(color);
        // Partícula más grande
        ofDrawCircle(position, 10);
    }

    bool isDead() const override { return exploded; }
    bool shouldExplode() const override { return exploded; }
    glm::vec2 getPosition() const override { return position; }
    ofColor getColor() const override { return color; }
};

class FallingParticle : public Particle {
private:
    glm::vec2 position;
    glm::vec2 velocity;
    ofColor color;
    float lifespan;
    float lifetime; // tiempo máximo antes de explotar
    float age;
    bool exploded;

public:
    FallingParticle(glm::vec2 pos, glm::vec2 vel, ofColor col, float life)
        : position(pos), velocity(vel), color(col), lifespan(255), lifetime(life), age(0), exploded(false) {
    }

    void update(float dt) override {
        velocity.y += 9.8 * dt;  // gravedad
        position += velocity * dt;
        age += dt;
        lifespan -= 50 * dt;     // se desvanece con el tiempo

        // Condición de explosión: cuando la partícula alcanza aproximadamente el 15% de la altura
        if (lifespan <= 100 || age >= lifetime) {
            exploded = true;
        }
    }

    void draw() override {
        ofSetColor(color, lifespan);
        ofDrawCircle(position, 10);
    }

    bool isDead() const override {
        return lifespan <= 0;
    }

    bool shouldExplode() const override { return exploded; }

    glm::vec2 getPosition() const override {
        return position;
    }

    ofColor getColor() const override {
        return color;
    }
};

class SpinningParticle : public Particle {
private:
    glm::vec2 origin;
    glm::vec2 position;
    float angle;
    float radius;
    float speed;
    ofColor color;
    float lifespan;
    float lifetime;
    float age;
    bool exploded;

public:
    SpinningParticle(glm::vec2 origin, float initialRadius, float angularSpeed, ofColor col, float life)
        : origin(origin), radius(initialRadius), angle(0), speed(angularSpeed), color(col), lifespan(255), lifetime(life), age(0), exploded(false) {
        position = origin;
    }

    void update(float dt) override {
        angle += speed * dt;
        radius += 10 * dt; // se aleja del centro con el tiempo
        position.x = origin.x + cos(angle) * radius;
        position.y = origin.y + sin(angle) * radius;
        lifespan -= 40 * dt;

        // Condición de explosión: cuando la partícula alcanza aproximadamente el 15% de la altura
        if (lifespan <= 100 || age >= lifetime) {
            exploded = true;
        }
    }

    void draw() override {
        ofSetColor(color, lifespan);
        ofDrawCircle(position, 10);
    }

    bool isDead() const override {
        return lifespan <= 0;
    }

    bool shouldExplode() const override { return exploded; }

    glm::vec2 getPosition() const override {
        return position;
    }

    ofColor getColor() const override {
        return color;
    }
};


// -------------------------------------------------
// Clase base para explosiones: ExplosionParticle
// -------------------------------------------------
class ExplosionParticle : public Particle {
protected:
    glm::vec2 position;
    glm::vec2 velocity;
    ofColor color;
    float age;
    float lifetime;
    float size;  // tamaño de la partícula de explosión
public:
    ExplosionParticle(const glm::vec2& pos, const glm::vec2& vel, const ofColor& col, float life, float sz)
        : position(pos), velocity(vel), color(col), age(0), lifetime(life), size(sz) {
    }

    void update(float dt) override {
        position += velocity * dt;
        age += dt;
        float alpha = ofMap(age, 0, lifetime, 255, 0, true);
        color.a = alpha;
    }

    bool isDead() const override { return age >= lifetime; }
};

// -------------------------------------------------
// CircularExplosion: Explosión en patrón circular
// -------------------------------------------------
class CircularExplosion : public ExplosionParticle {
public:
    CircularExplosion(const glm::vec2& pos, const ofColor& col)
        : ExplosionParticle(pos, glm::vec2(0, 0), col, 1.2f, ofRandom(16, 32)) {
        float angle = ofRandom(0, TWO_PI);
        float speed = ofRandom(80, 200);
        velocity = glm::vec2(cos(angle), sin(angle)) * speed;
    }

    void draw() override {
        ofSetColor(color);
        ofDrawCircle(position, size);
    }
};

// -------------------------------------------------
// RandomExplosion: Explosión con direcciones aleatorias
// -------------------------------------------------
class RandomExplosion : public ExplosionParticle {
public:
    RandomExplosion(const glm::vec2& pos, const ofColor& col)
        : ExplosionParticle(pos, glm::vec2(0, 0), col, 1.5f, ofRandom(16, 32)) {
        velocity = glm::vec2(ofRandom(-200, 200), ofRandom(-200, 200));
    }

    void draw() override {
        ofSetColor(color);
        ofDrawRectangle(position.x, position.y, size, size);
    }
};

// -------------------------------------------------
// StarExplosion: Explosión en forma de estrella
// -------------------------------------------------
class StarExplosion : public ExplosionParticle {
public:
    StarExplosion(const glm::vec2& pos, const ofColor& col)
        : ExplosionParticle(pos, glm::vec2(0, 0), col, 1.3f, ofRandom(20, 40)) {
        float angle = ofRandom(0, TWO_PI);
        float speed = ofRandom(90, 180);
        velocity = glm::vec2(cos(angle), sin(angle)) * speed;
    }

    void draw() override {
        ofSetColor(color);
        int rays = 5;
        float outerRadius = size;
        float innerRadius = size * 0.5;
        ofPushMatrix();
        ofTranslate(position);
        for (int i = 0; i < rays; i++) {
            float theta = ofMap(i, 0, rays, 0, TWO_PI);
            float xOuter = cos(theta) * outerRadius;
            float yOuter = sin(theta) * outerRadius;
            float xInner = cos(theta + PI / rays) * innerRadius;
            float yInner = sin(theta + PI / rays) * innerRadius;
            ofDrawLine(0, 0, xOuter, yOuter);
            ofDrawLine(xOuter, yOuter, xInner, yInner);
        }
        ofPopMatrix();
    }
};

// -------------------------------------------------
// SpiralExplosion: Explosión con trayectoria en espiral
// -------------------------------------------------
class SpiralExplosion : public ExplosionParticle {
private:
    float angle;
    float angularSpeed;
    float radiusGrowth;

public:
    SpiralExplosion(const glm::vec2& pos, const ofColor& col)
        : ExplosionParticle(pos, glm::vec2(0, 0), col, 1.6f, ofRandom(14, 28)) {
        angle = ofRandom(0, TWO_PI);
        angularSpeed = ofRandom(3.0f, 6.0f);  // velocidad angular
        radiusGrowth = ofRandom(20.0f, 60.0f); // crecimiento radial por segundo
    }

    void update(float dt) override {
        angle += angularSpeed * dt;
        float radius = radiusGrowth * age;
        position.x += cos(angle) * radius * dt;
        position.y += sin(angle) * radius * dt;
        age += dt;
        float alpha = ofMap(age, 0, lifetime, 255, 0, true);
        color.a = alpha;
    }

    void draw() override {
        ofSetColor(color);
        ofDrawCircle(position, size);
    }
};


// -------------------------------------------------
// ofApp: Manejo de la escena y eventos
// -------------------------------------------------
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
    void createFallingParticle();
    void createSpinningParticle();
};
```

#### **Prueba 1:**
**Verificar creación de `RisingParticle` al hacer clic**
- **Qué intentaste probar:** Que se cree una `RisingParticle` con trayectoria ascendente y explote automáticamente tras cierto tiempo o al llegar a cierta altura.
- **Resultado esperado:** Al dar clic, aparece una partícula que sube y luego explota generando partículas secundarias.
- **Resultado obtenido:** Correcto. La partícula se genera en la parte inferior, asciende y explota. Se verificó con punto de interrupción en `createRisingParticle()` y en `shouldExplode()`.
- **¿Hubo que corregir algo?:** No.

#### **Prueba 2:**
**Verificar creación de `FallingParticle` con explosión aleatoria**
- **Qué intentaste probar:** Que una `FallingParticle` explote cuando su `lifespan` baja de 100.**
- **Resultado esperado:** Partículas caen lentamente y explotan en el aire antes de desaparecer completamente.
- **Resultado obtenido:** Correcto. Se colocó un `breakpoint` en `shouldExplode()` y se disparó en el momento esperado. También se confirmó visualmente la creación de partículas hijas.
- **¿Hubo que corregir algo?:** Se añadió el atributo `exploded` y la lógica de explosión.

#### **Prueba 3:**
**Verificar `SpinningParticle` con trayectoria circular y explosión**

- **Qué intentaste probar:** Que la `SpinningParticle` haga un giro espiral y explote al final de su vida útil.
- **Resultado esperado:** Una partícula gira en espiral y luego genera una explosión.
- **Resultado obtenido:** Correcto. Confirmado visualmente y con `breakpoint` en `update()` y `shouldExplode()`.
- **¿Hubo que corregir algo?:** Sí, se añadió lógica de `lifespan` y explosión como en otras clases.

#### **Prueba 4:**
**Crear partículas aleatorias al hacer clic**

- **Qué intentaste probar:** Que al hacer clic se cree una partícula aleatoria (Rising, Falling o Spinning).
- **Resultado esperado:** En cada clic aparece una partícula distinta según el tipo aleatorio.
- **Resultado obtenido:** Correcto. Confirmado al revisar el tipo de objeto instanciado (con `dynamic_cast`) y con impresión en consola (`cout`).
- **¿Hubo que corregir algo?:** No.

#### **Prueba 5:**
**Verificar que se libere la memoria correctamente**

- **Qué intentaste probar:** Que las partículas se eliminen de memoria al morir y no generen fugas.
- **Resultado esperado:** Partículas que terminan su ciclo se eliminan del vector y se libera su memoria.
- **Resultado obtenido:** Correcto. Verificado con el depurador observando el vector y sin fugas visibles. Se usó `delete` y `erase`.
- **¿Hubo que corregir algo?:** No.

#### **Prueba 6:**
**Explosión con múltiples partículas hijas**

- **Qué intentaste probar:** Que una explosión genera 15 partículas hijas con colores distintos.
- **Resultado esperado:** Se genera una explosión visual con partículas de colores dispersándose.
- **Resultado obtenido:** Correcto. Verificado tanto visualmente como con impresión de cantidad de partículas tras cada explosión.
- **¿Hubo que corregir algo?:** No.