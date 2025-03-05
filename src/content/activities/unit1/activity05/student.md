#### Esta es la solucion de mi actividad ✍️
---

| Ciclo | PC (Antes) | Instrucción | Decodificación | Ejecución (Cambios en registros/memoria) |
|-------|-----------|-------------|----------------|---------------------------------|
| 1     | `0`       | `@valor`    | Carga `valor` en A | A = `valor` |
| 2     | `1`     | `D=A`       | Copia el valor de A en D | D = `valor` |
| 3     | `2`     | `@direccion` | Carga `direccion` en A | A = `direccion` |
| 4     | `3`     | `M=D`       | Guarda el valor de D en la memoria en `direccion` | M[`direccion`] = `valor` |
| 5     | `4`     | `@direccion` | Carga `direccion` en A | A = `direccion` |
| 6     | `5`     | `D=D+A`       | ALU Guarda el valor de D `valor` + A `direccion` en D | D[`direccion`] = `valor` |
| 7     | `6`     | `@direccion` | Carga `direccion` en A | A = `direccion` |
| 8     | `7`     | `0;JMP`       | Salta a la dirección almacenada en A `direccion` | M[`direccion`] = `valor` |
| ...   | ...       | ...         | ...            | ... |


