## Geometría
# Circulo
En el canvas utilizamos radianes como unidad de medida de ángulos.
Un circulo completo tiene 2π radianes.
En grados: 360° = 2π rad;
En javaScript: 2*Math.PI;
(The Math.PI property represents the ratio of the circumference of a circle to its diameter, approximately 3.14159)

Para convertir grados sexagesimales a radianes utilizamos la siguiente fórmula:
radianes = (π / 180) * grados;

Pasar  grados sexagesimales a radianes en javaScript:
var radianes = (Math.PI / 180) * grados;

# arco
Para dibujar un arco utilizamos el método arc(x, y, r, ap, af, aC), donde
- x e y son las coordenadas del centro,
- ap es el ángulo de partida ( en radianes ),
- af es el ángulo final ( en radianes ), y
- cR ( contra reloj ) es la dirección.
El parametro cR puede tomar dos valores:
- true ( verdadero, o sea: en sentido contrario al de las agujas del reloj ) y
- false ( falso, o sea: en el sentido de las agujas del reloj ).

## Installation
git init
Initialized empty Git repository in C:/Users/JAVIER/Documents/Repositorios/circles/.git/

Iniciar un repositorio local:
    git init
Añadir archivos al staging area:
    git add . o git add <<archivo>>
Confirmar los cambios en el repositorio:
    git commit -m ‘comentario’
Ver el estado de un archivo git status -s
Ver diferencias entre archivos añadidos y los cambios que aún no están con:
     git diff




```bash
pip install foobar
```

## Usage

```Vanilla javaScript
imp

# returns 'words'
foobar.pluralize('word')

# returns 'geese'
foobar.pluralize('goose')

# returns 'phenomenon'
foobar.singularize('phenomena')
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Fuente
[font](http://w3.unpocodetodo.info/canvas/arc.php)
[MIT](https://choosealicense.com/licenses/mit/)