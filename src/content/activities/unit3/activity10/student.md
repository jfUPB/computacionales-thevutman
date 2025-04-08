
#### Esta es la solucion de mi actividad ✍️
---

#### **Respuestas a preguntas**
1. **¿Por qué aparece Destructor: Punto cambiado(70, 80) destruido.?**
- Porque `p` es una copia local dentro de `cambiarNombre()`, y cuando la función termina, el objeto se destruye.

2. **¿Por qué original sigue existiendo luego de llamar cambiarNombre()?**
- Porque `original` y `p` son objetos distintos. Solo `p` fue destruido.

3. **¿Dónde están en memoria original y p?**
- `original` está en el stack de `main()`.
- `p` está en el stack de `cambiarNombre()`, y se destruye al salir de la función.

4. **¿Son el mismo objeto?**
- No. `p` es una copia de `original`, por lo que modificar `p` no afecta a `original`.

#### **Codigo Modificádo**
1. No se crea una copia del objeto, sino que `p` es una referencia directa a `original`.
2. `original` cambia permanentemente dentro de la función.

#### **Código modificádo otra vez**
1. `p` es un puntero, pero sigue referenciando directamente a `original`.
2. Al usar `p->name = nuevoNombre;`, estamos modificando `original` directamente.
3. El resultado es idéntico a la referencia (`&p` y `*p` actúan como alias de `original`).

---

- **Por valor:** No cambia el original.
- **Por referencia:** Modifica el original sin usar punteros.
- **Por puntero:** También modifica el original, pero requiere el operador ->.

