
#### Esta es la solucion de mi actividad ✍️

1. Condicionales
**Código en C#:**
```csharp
int num = 5;
if (num > 0) {
    num = num * 2;
}
```
**Código en Hack Assembly:**
```assembly
@5          // num = 5
D=A
@num
M=D

@num        // if (num > 0)
D=M
@SKIP       // Salta si num <= 0
D;JLE

@num        // num = num * 2
D=M
D=D+M
@num
M=D

(SKIP)
```
2. Ciclo While
**Código en C#:**
``` csharp
int count = 5;
while (count > 0) {
    count--;
}
```
**Código en Hack Assembly:**
```assembly
@5          // count = 5
D=A
@count
M=D

(LOOP)
@count      // while (count > 0)
D=M
@END
D;JLE

@count      // count--
M=M-1
@LOOP
0;JMP

(END)
```
3. Ciclo For
**Código en C#:**
```csharp
for (int i = 0; i < 5; i++) {
    // Hacer algo
}
```
**Código en Hack Assembly:**
```assembly
@0          // i = 0
D=A
@i
M=D

(FOR_LOOP)
@i          // if (i >= 5) break;
D=M
@END_LOOP
D=D-5
D;JGE

@i          // i++
M=M+1
@FOR_LOOP
0;JMP

(END_LOOP)
```
4. Escritura de Variables por Medio de Punteros
**Código en C#:**
``` csharp
int x = 10;
int* p = &x;
*p = 20;
```
**Código en Hack Assembly:**
``` assembly
@10         // x = 10
D=A
@x
M=D

@x          // p = &x (en Hack, se usa directamente)
D=A
@p
M=D

@20         // *p = 20
D=A
@p
A=M
M=D
```
5. Lectura de Variables por Medio de Punteros
**Código en C#:**
``` csharp
int x = 10;
int* p = &x;
int y = *p;
```
**Código en Hack Assembly:**
``` assembly
@10         // x = 10
D=A
@x
M=D

@x          // p = &x
D=A
@p
M=D

@p          // y = *p
A=M
D=M
@y
M=D
```
6. Manipulación de un Arreglo por Medio de Punteros
**Código en C#:**
``` csharp
int[] arr = {1, 2, 3, 4, 5};
int* p = &arr[0];
*(p + 2) = 10; // Modifica el tercer elemento
```
**Código en Hack Assembly:**
``` assembly
@1          // arr[0] = 1
D=A
@arr
M=D
@2          // arr[1] = 2
D=A
@arr+1
M=D
@3          // arr[2] = 3
D=A
@arr+2
M=D
@4          // arr[3] = 4
D=A
@arr+3
M=D
@5          // arr[4] = 5
D=A
@arr+4
M=D

@arr        // p = &arr[0]
D=A
@p
M=D

@p          // *(p+2) = 10
D=M
@2
A=D+A
M=10
```
7. Llamado a Funciones con Parámetros
**Código en C#:**
``` csharp
int suma(int a, int b) {
    return a + b;
}

int resultado = suma(3, 4);
```
**Código en Hack Assembly:**
``` assembly
@3          // a = 3
D=A
@a
M=D

@4          // b = 4
D=A
@b
M=D

@SUMA       // Llama a la función
0;JMP

(RETORNO_SUMA)
@resultado  // Guardar el resultado
M=D

(SUMA)      // Función suma(a, b)
@a
D=M
@b
D=D+M
@RETORNO_SUMA
0;JMP
```
8. Llamado a Funciones con Retorno de Parámetros
**Código en C#:**
``` csharp
int cuadrado(int x) {
    return x * x;
}

int resultado = cuadrado(5);
```
**Código en Hack Assembly:**
``` assembly
@5          // x = 5
D=A
@x
M=D

@CUADRADO   // Llamado a función
0;JMP

(RETORNO_CUADRADO)
@resultado  // Guardar el resultado
M=D

(CUADRADO)  // Función cuadrado(x)
@x
D=M
D=D*M
@RETORNO_CUADRADO
0;JMP
```
