#### Esta es la solucion de mi actividad ✍️
---

#### **1. ¿En la actividad anterior dónde estás aplicando el concepto de encapsulamiento? ¿Por qué? Muestra en qué parte del código.**

**Encapsulamiento** significa proteger los datos internos de una clase, haciendo que solo puedan ser modificados mediante métodos públicos.

**Ejemplo:**

```cpp
class RisingParticle : public Particle {
protected:
    glm::vec2 position;
    glm::vec2 velocity;
    ofColor color;
    float lifetime;
    float age;
    bool exploded;
public:
    void update(float dt) override;
    void draw() override;
    bool isDead() const override;
    bool shouldExplode() const override;
    glm::vec2 getPosition() const override;
    ofColor getColor() const override;
};
```
Aquí los atributos como `position`, `velocity` o `exploded` están protegidos (`protected`), lo que impide que otros objetos accedan directamente a ellos. Solo se accede a través de los métodos `getPosition()`, `isDead()`, etc. Esto es encapsulamiento.

#### **2. ¿En la actividad anterior dónde estás aplicando el concepto de herencia? ¿Por qué? Muestra en qué parte del código.**

**Herencia** es cuando una clase hija reutiliza o extiende el comportamiento de una clase padre.

**Ejemplo:**
```cpp
class RisingParticle : public Particle { ... };
class FallingParticle : public Particle { ... };
class SpinningParticle : public Particle { ... };
```
Aquí `RisingParticle`, `FallingParticle` y `SpinningParticle` heredan de la clase base `Particle`. Comparten una interfaz común y pueden ser tratadas como si fueran del mismo tipo, aunque tengan comportamientos diferentes.

#### **3. ¿En la actividad anterior dónde estás aplicando el concepto de polimorfismo? ¿Por qué? Muestra en qué parte del código lo implementas y dónde haces llamados a métodos polimórficos.**
**Polimorfismo** significa que un mismo método puede tener diferentes comportamientos según el tipo de objeto que lo implemente.

**Implementación:**
```cpp
class Particle {
public:
    virtual void update(float dt) = 0;
    virtual void draw() = 0;
    virtual bool isDead() const = 0;
    virtual bool shouldExplode() const { return false; }
    virtual glm::vec2 getPosition() const = 0;
    virtual ofColor getColor() const = 0;
};
```

```cpp
for (auto* p : particles) {
    p->update(ofGetLastFrameTime());
    p->draw();
    if (p->shouldExplode()) {
        // comportamiento específico según tipo real
    }
}
```
Aquí usamos un vector de punteros a `Particle`. Aunque todos los punteros son del mismo tipo base, en tiempo de ejecución cada uno llama su propia versión de `update()`, `draw()`, `shouldExplode()` según la clase hija real. Eso es polimorfismo en acción.

#### **4. Luego de esta experiencia de aprendizaje, define con tus propias palabras:**

**¿Qué es un objeto? ¿Qué es una clase?**

- **Clase:** Es un molde o plantilla que define las características y comportamientos que tendrán los objetos. Es como un plano.
- **Objeto:** Es una instancia concreta de una clase. Es un elemento que ya vive en memoria y tiene sus propios valores para los atributos definidos en la clase.

Por ejemplo, `RisingParticle` es una clase. Cuando hago `new RisingParticle(...)`, estoy creando un objeto de esa clase.

#### **5. ¿Cómo se ve en memoria un objeto de una clase que hereda de otra clase?**

En memoria, un objeto de una clase derivada contiene primero todos los atributos de la clase base, y luego los suyos propios. Además, si hay métodos virtuales, hay una tabla de funciones virtuales (vtable) para el polimorfismo.

**Ejemplo**:

```css
[ Atributos de Particle ]
[ Atributos de RisingParticle ]
[ puntero a vtable ]
```
Esto permite que podamos tratar una `RisingParticle` como un `Particle` y seguir llamando a los métodos correctos.