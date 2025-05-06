
#### Esta es la solucion de mi actividad ✍️
---
#### **Explicación de lo que ocurre en C++**

1. `original` es creado en la pila (stack).

2. Se hace una copia de `original` en `copia`.
- La copia es un objeto completamente nuevo e independiente.
- Se ejecuta el constructor de copia implícito.

3. Se cambia `copia`, pero `original` permanece igual.
- `copia` y `original` son entidades separadas.

4. Se usa un puntero `p` que apunta a `original`.
- Cambiar `p` afecta a `original`, ya que es una referencia directa.

5. Se destruyen los objetos al salir del `main()`.
- Primero se destruye `copia`.
- Luego `original` (que ya había sido modificado por `p`).

**Conclusión en C++:**
- Las copias en C++ crean objetos independientes.
- Los punteros (p) solo referencian el objeto original y no crean copias.

#### **Explicación de lo que ocurre en C#**
1. original es creado en el `heap`.

- Todos los objetos en C# se almacenan en el heap

2. Se asigna `original` a `copia`.

- No se crea una copia independiente, sino que `copia` y `original` apuntan al mismo objeto.

3. Cuando modificamos `copia`, también modificamos `original` porque ambos apuntan al mismo objeto.

**Conclusión en C#:**
- No se copia un objeto al asignarlo a otra variable, solo se copia la referencia.
- Modificar la "copia" también modifica el original.

---
#### **Preguntas**
1. Qué ocurre al copiar un objeto en C++ y en C#?

- C++: Se crea un nuevo objeto en memoria.
- C#: Se copia solo la referencia al mismo objeto.

2. ¿Qué diferencias encuentras entre C++ y C# en la copia de objetos?

- En C++, `copia` y `original` son independientes.
- En C#, `copia` y `original` son el mismo objeto en memoria.

3. ¿La copia en C++ es independiente del original?

- Sí, la copia tiene su propia memoria y valores.
4.  ¿La copia en C# es independiente del original?

- No, ambas variables apuntan al mismo objeto.



