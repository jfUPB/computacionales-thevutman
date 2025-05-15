
#### Esta es la solucion de mi actividad ✍️
---

#### **Preguntas de reflexión respondidas**
1. **¿Cómo se crea la lista enlazada?**

La lista se declara como un atributo de la clase `ofApp` en `ofApp.h`:

``` cpp
std::list<glm::vec2> snake;
```
Esto crea una lista vacía de posiciones (vectores 2D) usando `std::list` de C++.

2. **¿Cómo se añaden los primeros nodos a la lista?**
En el método `setup()`:

``` cpp
for (int i = 0; i < 20; i++) {
    snake.emplace_back(ofGetWidth() / 2, ofGetHeight() / 2);
}
```

Aquí se agregan 20 nodos al inicio del programa. Cada nodo se añade al final de la lista con `emplace_back`.

3. **¿Cómo se añaden nodos adicionales a la lista?**
En el método `keyPressed(int key)`:

``` cpp
else if (key == 'a') {
    snake.emplace_back(ofRandomWidth(), ofRandomHeight());
}
```

Cuando se presiona la tecla a, se agrega un nodo con una posición aleatoria dentro de la ventana.

4. **¿Cómo se eliminan nodos de la lista?**
También en `keyPressed()`:

``` cpp
else if (key == 'r') {
    if (!snake.empty()) {
        snake.pop_back();
    }
}
```

Cuando se presiona r, se elimina el último nodo de la lista, pero solo si la lista no está vacía.

5. **¿Cómo se limpia la lista?**
En `keyPressed()`:

``` cpp
if (key == 'c') {
    snake.clear();
}
```

Con la tecla c, se eliminan todos los nodos.

6. **¿Cómo se verifica si la lista está vacía?**
En la eliminación:

```cpp
if (!snake.empty())
```

La función `empty()` de `std::list` retorna true si no hay elementos.