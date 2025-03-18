
#### Esta es la solucion de mi actividad ✍️
---

``` cpp
#include <iostream>
using namespace std;


// Intercambio por valor (no afecta a los valores originales)
void swapPorValor(int a, int b) {
    int z = a;
    a = b;
    b = z;
}

// Intercambio por referencia (afecta a los valores originales)
void swapPorReferencia(int& a, int& b) {
    int z = a;
    a = b;
    b = z;
}

// Intercambio por puntero (afecta a los valores originales)
void swapPorPuntero(int* a, int* b) {
    int z = *a;
    *a = *b;
    *b = z;
}

int main() {
    int x = 5, y = 10;

    cout << "Valores originales: x = " << x << ", y = " << y << "\n";

    // Prueba de swapPorValor
    swapPorValor(x, y);
    cout << "Después de swapPorValor: x = " << x << ", y = " << y << " (sin cambios)\n";

    x = 5, y = 10;

    // Prueba de swapPorReferencia
    swapPorReferencia(x, y);
    cout << "Después de swapPorReferencia: x = " << x << ", y = " << y << "\n";

    x = 5, y = 10;

    // Prueba de swapPorPuntero
    swapPorPuntero(&x, &y);
    cout << "Después de swapPorPuntero: x = " << x << ", y = " << y << "\n";

    return 0;
}
```


1. 
La función `swapPorValor(int a, int b)` no intercambia los valores de `x` e `y` en `main()` porque trabaja con copias de los valores originales. Cuando la función se llama, `a` y `b` reciben copias de los valores de `x` e `y`, por lo que cualquier cambio que se haga dentro de la función solo afecta a esas copias y no a las variables originales en `main()`. Al finalizar la función, las copias se destruyen y `x` e `y` permanecen sin cambios.

2. 
- **Por referencia:** En `swapPorReferencia(int& a, int& b)`, los parámetros `a` y `b` son referencias a `x` e `y`. Esto significa que a y b no son copias, sino alias de las variables originales. Cualquier modificación en `a` y `b` afecta directamente a `x` e `y` en `main()`, por lo que el intercambio se mantiene después de la ejecución de la función.

- **Por puntero:** En `swapPorPuntero(int* a, int* b)`, los parámetros son punteros a `x` e `y`. Al recibir las direcciones de memoria de `x` e `y`, la función puede acceder y modificar sus valores a través de `*a` y `*b`. Como el cambio se realiza en la memoria donde están almacenadas `x` e `y`, los valores originales se intercambian correctamente.

3. 

| Aspecto | Referencias | Punteros |
|---------|-------------|----------|
|Sintaxis |	Más clara y fácil de leer `(swapPorReferencia(x, y))`|Se necesita usar `*` y `&` para acceder y modificar los valores `(swapPorPuntero(&x, &y))`|
|Seguridad|	No pueden ser `nullptr`, por lo que es más seguro|Puede haber errores si se pasan punteros `nullptr` o no inicializados|
|Modificabilidad|Siempre referencia la variable original, sin opción de reasignar|Se puede cambiar el puntero para que apunte a otra dirección|
|Flexibilidad|Mejor para operaciones simples como esta|	Útil cuando se necesita manejar memoria dinámica o estructuras más complejas|

En este caso, usar referencias es preferible porque hace que el código sea más limpio y seguro sin necesidad de preocuparse por punteros nulos o errores de desreferenciación. Sin embargo, los punteros son útiles cuando se necesita modificar direcciones de memoria o trabajar con estructuras dinámicas.