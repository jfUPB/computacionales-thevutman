#### Esta es la solucion de mi actividad ✍️
---

#### Actividad 04: Profundizando en las instrucciones del lenguaje ensamblador Hack  

##### ¿Cuál es la función de cada tipo de instrucción?  

1. **A-instructions (Instrucciones de Tipo A):**  
   - Se utilizan para cargar un valor numérico en el registro **A** o para apuntar a una dirección de memoria.  
   - Tienen el formato `@valor` donde `valor` puede ser un número o una etiqueta.  
   - Ejemplo: `@5` carga el valor `5` en el registro `A`.  

2. **C-instructions (Instrucciones de Tipo C):**  
   - Ejecutan operaciones aritméticas/lógicas o asignaciones de datos.  
   - Tienen el formato `[dest]=[comp];[jump]`, donde:  
     - **comp (cómputo):** La operación a realizar (suma, resta, AND, etc.).  
     - **dest (destino):** Registro donde se almacenará el resultado (A, D o M).  
     - **jump (salto):** Opcional, indica si se debe saltar a otra instrucción según una condición.  

---

##### ¿Cómo se representa cada tipo de instrucción en binario?  

1. **A-instructions:**  
   - Se representan con un `0` como bit más significativo, seguido de un valor de 15 bits.  
   - Ejemplo:  
     ```assembly
     @5
     ```
     - En binario: `0000000000000101` (el `5` en binario).  

2. **C-instructions:**  
   - Comienzan con `111` y luego incluyen bits para la operación (comp), el destino (dest) y el salto (jump).  
   - Ejemplo:  
     ```assembly
     D=D+A
     ```
     - En binario: `1110000010010000`  
       - `0000010` → Representa `D+A`.  
       - `010` → Indica que el resultado se almacena en `D`.  
       - `000` → No hay salto.  

---

##### **Ejemplos de A-instructions**  

1. **`@10`** → Carga el valor `10` en el registro `A`.  
   - Binario: `0000000000001010`  

2. **`@100`** → Carga la dirección `100` en `A`.  
   - Binario: `0000000001100100`  

3. **`@SCREEN`** → Carga la dirección de memoria de la pantalla en `A` (`16384`).  
   - Binario: `0100000000000000`  

---

##### **Ejemplos de C-instructions**  

1. **`D=D+A`** → Suma el contenido de `D` y `A`, y guarda el resultado en `D`.  
   - Binario: `1110000010010000`  

2. **`M=D`** → Guarda el valor de `D` en la dirección de memoria apuntada por `A`.  
   - Binario: `1110001100001000`  

3. **`D;JGT`** → Si `D > 0`, salta a la dirección almacenada en `A`.  
   - Binario: `1110001100000001`  

---

Esta estructura clara y concisa cubre todos los puntos requeridos en la actividad. ¿Quieres que lo adapte más? 😊  
