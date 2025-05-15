#### Esta es la solucion de mi actividad ✍️
---

#### **Errores cometidos y su solución**  

1. **Error con "D;JNE" en el simulador web**  
   - **Cómo lo identifiqué y corregí:** Intenté ejecutar la instrucción "D;JNE", pero el simulador no la reconocía. Tras varios intentos y pruebas, confirmé que era un bug en la herramienta y lo reporté a los creadores.  
   - **Aprendizaje:** No siempre el error está en el código, a veces puede ser una falla en la herramienta utilizada. Aprendí la importancia de verificar la documentación y considerar problemas externos.  
   - **Cómo evitar errores similares:** En el futuro, si encuentro un comportamiento inesperado, verificaré si el error es mío o de la herramienta antes de hacer cambios innecesarios en el código.  

2. **Error al dibujar una línea en pantalla**  
   - **Cómo lo identifiqué y corregí:** Al intentar dibujar una línea en la pantalla, no se iluminaban los píxeles esperados. Identifiqué que el problema estaba en cómo representaba los valores en binario y descubrí que `-1` en Hack equivale a 16 bits en `1`, lo que activa todos los píxeles en un byte.  
   - **Aprendizaje:** Entender cómo funciona la representación binaria en la arquitectura Hack es clave para manipular gráficos correctamente.  
   - **Cómo evitar errores similares:** En el futuro, analizaré con más detalle cómo se representan los datos en memoria antes de hacer operaciones gráficas.  

---

#### **Importancia del debugging en el desarrollo de software**  
El debugging es fundamental en el proceso de desarrollo de software porque permite identificar y corregir errores que pueden afectar la funcionalidad del programa. Sin un buen proceso de debugging, los errores pueden volverse difíciles de rastrear y corregir, lo que impacta en la eficiencia del desarrollo y la calidad del software.  

#### **Técnicas de debugging utilizadas en el simulador Hack**  
1. **Uso de `@valor` y `D=A` para verificar registros:** Utilicé instrucciones simples para almacenar valores en registros y observar cómo cambiaban en el simulador.  
2. **Pruebas en pasos individuales:** Ejecuté el código línea por línea en el simulador para ver en qué punto ocurría el error.  
3. **Observación de la RAM y el PC:** Revisé los valores almacenados en memoria y el contador de programa para entender qué estaba ocurriendo en cada ciclo de ejecución.  

Estas técnicas me ayudaron a comprender mejor la arquitectura Hack y a corregir errores de forma más eficiente. 🚀  
