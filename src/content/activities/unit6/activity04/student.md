#### Esta es la solucion de mi actividad ✍️
---

#### **Propósito del Patrón State**
El patrón State permite cambiar el comportamiento de un objeto cuando cambia su estado interno. En lugar de usar múltiples estructuras `if` o `switch` para definir qué debe hacer el objeto en cada situación, este patrón encapsula los diferentes comportamientos en clases separadas llamadas estados concretos, y el objeto principal (llamado contexto) delega a su estado actual.

Esto es útil cuando un objeto tiene múltiples comportamientos que dependen de su estado y se necesita mantener el código limpio, modular y fácil de extender.

#### **Componentes del Patrón en el Caso de Estudio**
- **Context (Contexto):**
    La clase `Particle` es el contexto. Contiene un puntero o referencia a su estado actual (de tipo `State*`), y delega la ejecución de ciertos métodos a ese estado.
- **State (Interfaz de Estado):**
    La clase `State` es una clase base abstracta que define métodos comunes como `update()`, `onEnter()` y `onExit()` que todos los estados concretos deben implementar o sobrescribir.
- **Concrete States (Estados Concretos):**
    - **NormalState:** comportamiento por defecto de la partícula.
    - **AttractState:** hace que las partículas se acerquen entre sí.
    - **RepelState:** hace que las partículas se repelan entre sí.
    - **StopState:** detiene las partículas completamente.

#### **Delegación del Comportamiento**
Dentro del método `Particle::update()`, no se implementa directamente la lógica del movimiento o interacción, sino que se llama al método `update()` del estado actual:

```cpp
state->update(this);
```

Cada clase concreta de estado tiene su propia implementación del método `update()` que define cómo se comporta la partícula en ese estado específico.

#### **Transiciones de Estado**
- La clase `Particle` puede cambiar su estado usando el método `setState(State* newState)`.
- Antes de cambiar, llama a `onExit()` del estado actual.
- Luego cambia el puntero de estado y llama a `onEnter()` del nuevo estado.
- Esto permite realizar acciones como reiniciar variables, mostrar mensajes, o modificar propiedades al entrar o salir de un estado.

Transiciones como estas son causadas por eventos externos, por ejemplo: presionar la tecla `'a'` cambia todas las partículas al estado `AttractState`. Esta interacción se gestiona desde `ofApp` usando el patrón Observer.

#### **Diagrama de Estados (Descripción)**
**Estados:**
- **`Normal`**
- **`Attract`**
- **`Repel`**
- **`Stop`**

**Transiciones:**
- Presionar `'n'` → va a `Normal`
- Presionar `'a'` → va a `Attract`
- Presionar `'r'` → va a `Repel`
- Presionar `'s'` → va a `Stop`

#### **Ventajas del Patrón State**
1. **Evita grandes bloques de código con if/else o switch:**
    En lugar de comprobar constantemente el estado actual mediante strings o enums, el comportamiento está contenido en objetos separados.
2. **Alta cohesión y bajo acoplamiento:**
    Cada clase concreta maneja un solo comportamiento, lo que mejora la organización del código.
3. **Fácil de extender:**
    Para agregar un nuevo estado, solo se necesita crear una nueva clase que herede de `State` y no modificar el código existente, cumpliendo con el Principio Abierto/Cerrado.
4. **Reutilización:**
    Los estados pueden ser compartidos por múltiples instancias de `Particle`.

#### **Rol de `onEnter()` y `onExit()`**
- `onEnter():` se ejecuta justo cuando se cambia a un nuevo estado. Puede servir para reiniciar valores, asignar velocidad, cambiar color, etc.
- `onExit():` se ejecuta justo antes de salir de un estado. Útil para limpiar recursos o hacer transiciones suaves.

**Ejemplo:**
En `NormalState::onEnter()` se puede establecer la velocidad y dirección por defecto de una partícula.

En `StopState::onExit()` podrías reiniciar su movimiento o cambiar su color para indicar que ha "despertado".