1) Creo el proyecto con:
 ng new |ProyectoName|

2) Lo lanzo con ng serve --open

PRUEBAS:

 * * * PRUEBA 1: Interpolation: * * *

1.1 ) Nos vamos a src/app/app.component.ts y en el export class ponemos la propiedad que queramos hacer interpolacion. En este caso un simple 

message: string = "Esto es una interpolation :)"

1.2 )  Nos vamos a su component.html y allí encapsulamos entre doble llave {{message}}
1.3 )  Angular hace un bind y nos muestra el mensaje.

* * * PRUEBA 2: ngFor con array simple * * *

Para usar el ngFor:

2.1  Tenemos en app.component.ts un array con animals dentro de la class
2.2  Para usarlo nos vamos al html del componente y, en este caso , hacemos una lista:
<ul>
<li *ngFor="let animal in animals">{{animal}}</li>
</ul>

dentro del <li> pondremos nuestro ngFor con el bucle y luego el {{}} para que cada animal se vaya poniendo ahí con interpolacion

* * * PRUEBA 3: ngFor con array mas complicado * * *

3.1 tenemos un array persons mas complicado en la class de app.component.ts
3.2 hemos usado en el html el ngFor para mostrar varias de sus propiedades dentro de una lista.

* * * PRUEBA 4: ngIf * * *

4.1 si el array de animal tiene mas de 3 animales se muestra una frase en el html, si quitas un animal, al haber menos de 3 no se muestra

