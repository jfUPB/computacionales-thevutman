
#### Esta es la solucion de mi actividad ✍️
---

#### **Código fuente del programa (C++)**
``` cpp
#include <iostream>
using namespace std;

class Persona {
private:
    string nombre;
    int* edad; // Puntero (heap)

    static int contador; // Variable estática

public:
    // Constructor
    Persona(string n, int e) {
        nombre = n;
        edad = new int(e); // Memoria dinámica
        contador++;
        cout << "Constructor llamado para " << nombre << endl;
    }

    // Destructor
    ~Persona() {
        cout << "Destructor llamado para " << nombre << endl;
        delete edad; // Liberación del heap
    }

    // Método por valor
    void mostrarPorValor(int edad) {
        edad += 5;
        cout << "Edad pasada por valor (modificada dentro): " << edad << endl;
    }

    // Método por referencia
    void modificarPorReferencia(int& edadRef) {
        edadRef += 10;
        cout << "Edad pasada por referencia (modificada): " << edadRef << endl;
    }

    // Mostrar datos
    void mostrarDatos() const {
        cout << "Nombre: " << nombre << ", Edad: " << *edad << endl;
    }

    static int getContador() {
        return contador;
    }
};

// Inicialización de variable estática
int Persona::contador = 0;

int main() {
    // Objeto en el stack
    Persona p1("Ana", 25);

    // Objeto en el heap
    Persona* p2 = new Persona("Luis", 30);

    int valor = 40;
    p1.mostrarPorValor(valor);
    cout << "Edad original (después del paso por valor): " << valor << endl;

    p1.modificarPorReferencia(valor);
    cout << "Edad original (después del paso por referencia): " << valor << endl;

    p1.mostrarDatos();
    p2->mostrarDatos();

    cout << "Total de personas creadas: " << Persona::getContador() << endl;

    delete p2; // Llamada al destructor
    return 0;
}
```

#### **Explicación de los conceptos aplicados**

|**Concepto**	|**Aplicación en el código**|
|-----------|-----------------------|
|Clases y objetos	|Clase `Persona` con atributos y métodos. Objetos `p1` (stack) y `p2` (heap).|
|Paso por valor y referencia	|Métodos `mostrarPorValor()` y `modificarPorReferencia()` muestran ambas formas.|
|Constructores y destructores	|Se definen en la clase, se imprimen mensajes para evidenciar su ejecución.
|Métodos y atributos	|Métodos como `mostrarDatos()`, `getContador()` y atributos `nombre`, `edad`.
|Objetos en stack y heap	|`p1` está en stack, `p2` en heap (`new` / `delete`).
|Punteros y referencias	|Atributo `edad` es un puntero (`int*`). Uso de referencias en método.
|Variables estáticas	|`contador` se comparte entre todas las instancias de la clase.
|Depuración	|El programa es ideal para colocar breakpoints y observar el ciclo de vida de objetos.

#### **Análisis de la memoria**

|**Segmento de memoria**	|**Ejemplo del programa**|
|---------------------------|------------------------|
|Código (.text)	|Funciones como `main()`, `mostrarPorValor()`, etc.
|Datos (.data/.bss)	|Variable estática `contador` está en el segmento de datos.
|Stack	|Variables `p1`, `valor` y parámetros de funciones.
|Heap	|`p2` (objeto dinámico), y `edad` dentro de `p1` y `p2`.

#### **Mapa de memoria:**
``` sql
+-----------------------------+
| Código: funciones           |
| main, mostrarPorValor...    |
+-----------------------------+
| Datos:                      |
| contador (static): dirección fija |
+-----------------------------+
| Heap:                       |
| edad de p1 y p2             | 
| objeto p2 (creado con new)  |
+-----------------------------+
| Stack:                      |
| p1                          |
| valor                       |
| parámetros de funciones     |
+-----------------------------+
```