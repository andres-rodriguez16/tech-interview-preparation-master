![HenryLogo](https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png)

# Find Word Starting With

## Introducción

Dado un "libro" y un string para buscar,  devolver todos los indices donde la palabra empieza con ese string.

El libro vendrá con dos cosas: un id y un texto. **La búsqueda tiene que ser case insensitive.**

### Ejemplo

```javascript
const book = {
    id: 1,
    text: 'Erase una vez un libro de palabras que era un poco aburrido pero tenia mucho aunque algunas palabras locas'
}
```

findWordsStartingWith **(book, 'de')**
**output:** [23]

findWordsStartingWith **(book, 'un')**
**output:** [ 6, 14, 43]

## Solución

### Primer alternativa

Una alternativa, **naive**, es iterar a través del texto.

### Segunda Alternativa

Otra alternativa, es utilizar un **trie**. Pero ... ¿Que es un trie?

#### Ejemplo

```javascript
{
    [char]: {
        data: data,
        [nextChar]: {
            data: data,
            // ...
        }
    }
}
```

##### ¿Podes encontrar el mensaje secreto?

```javascript
const trie = {
    t: {
        indexes: [0, 5],
        o: {
            indexes:[0, 5],
            n: {
                indexes: [0, 5],
                i: {
                    indexes: [0]
                },
                t: {
                    indexes: [5],
                    o:{
                        indexes: [5]
                    }
                }
            }
        }
    }
}
```

###### Equivale a

```javascript
buildTrie('Toni tonto')
```

#### ¿Por qué?

Porque **repetir la ejecución va a ser mucho mas rápido con un árbol**.

### Paso 1: Haz el TRIE


### Paso 2

Una vez que el TRIE es creado todo lo que necesitas hacer es **iterar a través del largo del string**, **recorrer los nodos hasta** que llegues al **final** y luego, **retornar el arreglo de indices en ese punto**.


