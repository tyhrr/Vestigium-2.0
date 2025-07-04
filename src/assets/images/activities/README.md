# Activities Images

Esta carpeta contiene las imágenes para el carrusel de actividades de la sección "About Vestigium".

## Estructura recomendada:

- `workshop1.jpg` - Talleres comunitarios de sostenibilidad
- `garden1.jpg` - Actividades de jardinería urbana  
- `community1.jpg` - Eventos de reunión comunitaria
- `market1.jpg` - Mercado local de agricultores
- `repair1.jpg` - Café de reparación comunitario

## Especificaciones técnicas:

- **Formato:** JPG, PNG, WebP
- **Resolución recomendada:** 500x500px mínimo (formato cuadrado)
- **Tamaño de archivo:** Máximo 2MB por imagen
- **Optimización:** Comprimir para web

## Cómo agregar más imágenes:

1. Agregar la imagen física a esta carpeta
2. Actualizar el array `images` en el script del carrusel en `index.html`
3. Seguir la estructura:
   ```javascript
   {
       src: 'src/assets/images/activities/nueva-imagen.jpg',
       alt: 'Descripción de la actividad',
       title: 'Título de la Actividad'
   }
   ```

## Imágenes actuales:

Por defecto, si no se encuentran las imágenes específicas, el carrusel mostrará la imagen placeholder del logo de Vestigium.
