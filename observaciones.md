    Pienso que al ser un equipo cada linea de codigo, cada archivo, todo de este proyecto nos pertenece a cada uno de nosotros. Con esto entendido tomamos responsabilidad individual de realizar ciertas tareas para su progreso.
        Es un camino de aprendizaje para todos asi que vamos a vivir con errores, pero tambien aprendizaje.
    
_ _ _
    Estas modificaciones que voy a detallar son necesarias para relizar una modularizacion completa en nuestro proyecto. A un nivel inicial, ya despues seguiremos. Pero estos son minimamente necesarias para comenzar desde donde estamos. 
___
## OBSERVACIONES

### Diego: 
- login.css
    - Eliminar todos los estilos generales(*).
    - Eliminar todos los estilos que apliquen a **header** o **footer**.
    - Eliminar el import
    - Mejorar el camino de las clases para aplicar estilos

- login.html
    - cambiar el archivo de referencia del link de la linea 6 por **style.css** 

En cuanto cambies el link de tu html vas a notar cambio. Otra cosa es que tu css esta pisando estilos de otros archivos, trata de darle una clase a tu body y que todo comienze desde ahi.
~~~
.login .alguna-clase .otra-clase-mas {
    //tus estilos
}
~~~

### Julia:
- product-detail.css
    - Eliminar los import
    - Eliminar las variables (van en *style.css* mejor aun seria crear un variables.css y colocarlas ahi, si te animas hacelo)
    - Eliminar los estilos generales(el selector *)
    - ser mas especifica con el estilo de tu media query de ordenador(tenes un max-width que aplica a body)
- product-detail.html
    - Eliminar del **head** los import de las fuentes

Lograste hacer que tus estilos no se propaguen hacia otras vistas, bien ahi. Solo te falto el body y ya estaria hecho.
 Si te animas crea el *variables.css* declara ahi dentro todas las variables y despues importalo en *style.css*

### Eduardo:
- register.css
    - Eliminar el **import**
    - Mejorar el camino de las clases para aplicar estilos
- register.html
    - en el **head** cambiar el link de estilos por *style.css*

Esta vista es la que mejor quedo. Una sola cosa en tu css tenes estilos que aplican a etiquetas **a**, **h2**, **hr** y **body**. Estos elementos se usan en otras vistas y tus estilos acabarian sobreescribiendo lo de los demas

### Agustina: 
- carrito.css
    - Eliminar estilos que apliquen al **header** y **footer**
    - Mejorar el camino de las clases para aplicar estilos
- carrito.html
    - en el **head** cambiar el link de estilos por *style.css* 

Create tu metodo **GET** para verlo ya en fucionamiento. En cuanto hagas eso cambia las rutas a archivos estaticos de tu *html*: borrales el */public*


### Edgar:
- home.css
    - Eliminar **import**
-home.html
    - Agrandar la **nav-bar** de la seccion del **main**
___ 

Si es posible traten de eliminar de cada una de sus vistas *html* tanto el **footer** como el **header**. De esta manera les va a quedar mas limpia su hoja *html* y van a poder concentrarse mas en lo importante 

Cuando logramos hacer esto ya vamos a estar listos para comenzar a hacer los cambios necesarios para poder utilizar el motor de **ejs**


