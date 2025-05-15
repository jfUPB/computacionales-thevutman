#### Esta es la solucion de mi actividad ✍️
---

#### **Propósito del Patrón Observer**
El patrón Observer permite establecer una relación de dependencia uno-a-muchos entre objetos. Cuando el objeto central (el Sujeto) cambia su estado, notifica automáticamente a todos los objetos que están interesados en él (los Observadores). Esto permite que los objetos estén desacoplados, es decir, que el Sujeto no necesita saber exactamente qué hacen sus observadores ni cómo están implementados.

Resuelve el problema de mantener a múltiples objetos sincronizados con el estado de otro objeto sin generar una dependencia rígida entre ellos.

#### **Identificación de Roles en el Caso de Estudio**
**Interfaz Observer:**
- **Clase:** `Observer`
- **Método definido:** `onNotify(string event)`

**Subject:**
- **Clase:** Subject
- **Métodos:**
    - `addObserver(Observer*)`
    - `removeObserver(Observer*)`
    - `notify(string event)`

**ConcreteSubject:**
- **Clase:** `ofApp`
- **Razón:** Es la clase que implementa la lógica del programa y que emite notificaciones a las partículas.

**ConcreteObserver:**
- **Clase:** `Particle`
- **Razón:** Implementa la interfaz `Observer` y reacciona a los eventos enviados por `ofApp`.

#### **Diagrama del Patrón Observer en el Caso de Estudio**
``` txt
          +------------------+        +-----------------+
          |     Subject      |        |    Observer     |
          |------------------|        |-----------------|
          | +addObserver()   |<-------| +onNotify()     |
          | +removeObserver()|        +-----------------+
          | +notify()        |
          +--------^---------+
                   |
        +----------+-----------+
        |                      |
  +-----------+        +---------------+
  |   ofApp   |        |   Particle     |
  | (Concrete |        | (Concrete      |
  |  Subject) |        |  Observer)     |
  +-----------+        +---------------+
```

#### **Flujo desde que se presiona la tecla ‘r’**
1. El usuario presiona la tecla `r`.
2. En `ofApp.cpp`, dentro de `keyPressed(int key)`, se detecta esta tecla y se llama a `notify("repel")`.
3. `ofApp` hereda de `Subject`, así que usa su método `notify(string event)`.
4. `notify` recorre la lista de observadores (instancias de `Particle`) y llama a su método `onNotify("repel")`.
5. Cada `Particle` reacciona en su propio método `onNotify`, activando la lógica de repulsión con respecto al mouse.
6. En el siguiente ciclo de actualización (`update`), las partículas modifican su comportamiento según el estado que ahora tienen.

#### **Registro y Eliminación de Observadores**
- **Registro:** Las partículas se registran como observadores en algún punto del `setup()` de `ofApp`, probablemente así:

``` cpp
for (auto& p : particles) {
    addObserver(&p);
}
```
- **Eliminación (potencial):** Aunque no se utiliza explícitamente en este ejemplo, se haría con `removeObserver(&p)` cuando una partícula ya no deba recibir notificaciones. Esto sería necesario si las partículas se destruyen durante la ejecución.
- **Destructor de `ofApp`:** Es importante que el destructor llame a `removeObserver` para evitar punteros colgantes que puedan causar errores en tiempo de ejecución si se notifican objetos ya destruidos.

#### **Ventajas del Patrón Observer en esta Aplicación**
- **Desacoplamiento:** `ofApp` no necesita saber qué hacen las partículas internamente, solo envía un evento.
- **Extensibilidad:** Se pueden agregar nuevos tipos de observadores (por ejemplo, otras entidades visuales o físicas) sin modificar `ofApp`.
- **Claridad y Organización:** Se separa claramente la lógica del evento (en ofApp) de la reacción al evento (en `Particle`).
- **Flexibilidad:** Si en el futuro se quiere cambiar el comportamiento de alguna partícula específica, solo se modifica su implementación de `onNotify`, sin tocar la lógica del `Subject`.