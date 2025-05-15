
#### Esta es la solucion de mi actividad ✍️
---

#### **Experimento 1**
**Explicación del ciclo de vida de un objeto en el stack versus en el heap**

Un objeto creado dentro de un bloque como `Punto pBloque(100, 200);` se almacena en la pila (stack). Esto significa que su ciclo de vida comienza al entrar al bloque y termina automáticamente al salir del mismo. Al finalizar el bloque, el destructor del objeto se invoca de forma automática.

En cambio, un objeto creado con new, como `Punto* pDinamico = new Punto(300, 400);`, se almacena en el montón (heap). En este caso, el ciclo de vida del objeto no depende del alcance del bloque. El objeto no se destruye automáticamente, sino que debe ser liberado manualmente con delete. Si no se hace, se produce una fuga de memoria.

#### **Expermento 2**

**¿Compila el siguiente código?**

No, este código no compila porque la variable `pBloque2` fue declarada dentro del bloque `{}`, y por lo tanto solo existe dentro de ese bloque. Al intentar acceder a `pBloque2` fuera del bloque, el compilador marca un error porque la variable está fuera de su ámbito (scope).

#### **Experimento 3**

1. **¿Por qué el objeto pBloque se destruye al salir del bloque y pBloque2 no?**

`pBloque2` fue declarada fuera del bloque, lo que significa que existe durante toda la función `main()`. El objeto al que apunta, creado con new, vive en el heap, y por eso no se destruye al salir del bloque. Solo se libera la memoria cuando se llama a delete.

2. **¿Por qué pBloque se destruye al salir del bloque y pBloque2 no?**
pBloque es un objeto creado directamente en el stack. Su ciclo de vida está ligado al bloque donde se declaró. Por eso, al finalizar el bloque, se llama automáticamente a su destructor y se libera la memoria.

pBloque2 no es un objeto, sino un puntero. El puntero se almacena en el stack, pero el objeto al que apunta fue creado con new, por lo tanto vive en el heap. Esto significa que no se destruye automáticamente al salir del bloque; sigue existiendo hasta que se invoque explícitamente delete pBloque2.
