#### Esta es la solucion de mi actividad ✍️
---

#### **Explicación del patrón Factory**
El patrón Factory Method permite crear objetos sin acoplar el código cliente a clases concretas. En este ejemplo, evita que `ofApp` conozca detalles sobre cómo se configura cada tipo de partícula, y solo pide que se le cree una de cierto tipo.

#### **Ventajas del uso de `ParticleFactory`**
- **SRP (Single Responsibility Principle):** `ParticleFactory` se encarga de crear y configurar partículas. `ofApp` solo las usa.
- **Organización y legibilidad:** Menos código repetitivo en `ofApp`.
- **Escalabilidad:** Si agregamos más tipos de partículas, no hay que modificar `ofApp`, solo `ParticleFactory`.

#### **Añadir un nuevo tipo: `black_hole`**
Supongamos que queremos una partícula "black_hole" que sea grande, negra y lenta.

**Pasos para implementarla:**

1. Ir al archivo `ParticleFactory.cpp` o donde esté el método `createParticle`.
2. Agregar una nueva condición:

```cpp
else if (type == "black_hole") {
    Particle* p = new Particle();
    p->setSize(50);                      // Tamaño grande
    p->setColor(ofColor::black);        // Color negro
    p->setVelocity(ofVec2f(0.1, 0.1));  // Muy lenta
    return p;
}
```

3. ¡Listo! En `ofApp::setup()` simplemente llamamos:

```cpp
particles.push_back(ParticleFactory::createParticle("black_hole"));
```

**¿Se necesita modificar `ofApp::setup()`?**
No, salvo que queramos crear manualmente una partícula de este nuevo tipo. El código ya está listo para recibir más tipos si `createParticle(...)` está bien diseñado.

#### **Reflexión: métodos estáticos vs. de instancia**

|Comparación	|Método estático	|Método de instancia|
|---------------|-------------------|-------------------|
|Llamada rápida	|No requiere crear un objeto Factory	|Requiere instanciar un objeto|
|Simple y directa	|Ideal para uso global o utilitario	|Permite mantener estado interno si se necesita|
|Poco flexible	|No permite polimorfismo o herencia	|Puede usarse en jerarquías de Factory|
|Difícil de testear	|Dificulta el mocking en pruebas	|Más fácil de testear al inyectarse|