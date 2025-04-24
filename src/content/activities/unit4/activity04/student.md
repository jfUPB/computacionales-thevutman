
#### Esta es la solucion de mi actividad ✍️
---

#### **Explicación**
Imagina que estás en una fila para comprar helado. El primero que llega es el primero en ser atendido. Eso es, en resumen, cómo funciona una cola en programación: el primero en entrar es el primero en salir. A esto le decimos FIFO, que significa First In, First Out (Primero en entrar, primero en salir).

#### **¿Qué es una cola y cómo funciona el principio FIFO?**
Una cola es una estructura de datos que funciona como una fila de personas. Quien entra primero (por el final de la fila), es el primero en salir (por el principio de la fila). Así se asegura un orden justo, como en una fila real.

**Ejemplo:**

Llega Ana → entra a la cola

Llega Bruno → entra detrás de Ana

Llega Camila → se pone detrás de Bruno

**Cuando atienden:**

Sale Ana (la primera), luego Bruno, luego Camila.

#### **¿Cómo se implementa enqueue() y dequeue()?**
`enqueue(elemento)` → significa agregar un elemento al final de la cola.

`dequeue()` → significa sacar el elemento del frente de la cola.

Si lo hacemos en código usando una lista, sería así (en pseudocódigo):

``` python
cola = []

def enqueue(elemento):
    cola.append(elemento)  # Agrega al final

def dequeue():
    if not is_empty():
        return cola.pop(0)  # Elimina el primero
    else:
        return None
```

#### **Error común y cómo evitarlo**
Uno de los errores más comunes es intentar eliminar (`dequeue`) de una cola vacía, lo cual puede causar errores si no se verifica antes. Por eso siempre es buena idea tener una función como:

``` python
def is_empty():
    return len(cola) == 0
```
Y usarla antes de hacer `dequeue()`.