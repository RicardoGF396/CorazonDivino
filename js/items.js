$(function () {
  $("#elastic_grid_demo").elastic_grid({
    showAllText: "Todos",
    filterEffect: "popup", // moveup, scaleup, fallperspective, fly, flip, helix , popup
    hoverDirection: true,
    hoverDelay: 0,
    hoverInverse: false,
    expandingSpeed: 500,
    expandingHeight: 500,
    items: [
      {
        //Item1
        title: "<br>Corazón Lotería",
        description: `
                <p >
                Corazón de hoja de lata con acabados de tarjetas de lotería 
                disponible en todas las tiendas, temas de varios colores. 
                </p>
                <h3>$245.00MXN$</h3>
                <div class="colores d-none d-md-block">
                <p class="text_c color_txt  ">Color</p> 
                <div class="colores_cards ">
                    <div class="rojo card_c"></div>
                    <div class="azul card_c"></div>
                    <div class="amarillo card_c"></div>
                    <div class="rosa card_c"></div>
                </div>
                <p class="subtitulo_card text_c">20 unidades disponibles</p>
                </div>`,
        thumbnail: ["images/small/1.jpg", "images/small/3.jpg"],
        large: ["images/large/1.png", "images/large/3.jpg"],
        img_title: ["Imagen Corazon "],
        button_list: [
          {
            title: "Comprar",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          {
            title: "Añadir al Carrito",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          { title: "♡", url: "http://porfolio.bonchen.net/", new_window: true },
        ],
        tags: ["Corazón"],
      },

      //Item 2
      {
        title: "<br>Nicho de Madera",
        description: `
        <p >
        Nicho de madera  elaborado con madera de patol y pintado a base de pinturas acrílicas disponible solo en corazón divino varias versión(San pascual, San Miguel Arcángel ,Madre Teresa de Calcuta )
        </p>
        <h3>$350.00MXN$</h3>
        <div class="colores d-none d-md-block">
        
        <p class="subtitulo_card text_c">20 unidades disponibles</p>
        </div>`,
        thumbnail: ["images/small/2.jpg", "images/small/3.jpg"],
        large: ["images/large/2.png", "images/large/3.jpg"],
        img_title: ["Imagen Corazon "],
        button_list: [
          {
            title: "Comprar",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          {
            title: "Añadir al Carrito",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          { title: "♡", url: "http://porfolio.bonchen.net/", new_window: true },
        ],
        tags: ["Nicho"],
      },

      //Item 3
      {
        title: "<br>Hombre en Bañador",
        description: `
                <p>
                Decorativo elaborado a base de hoja de lata y pintado con pinturas 
                acrílicas disponible en todas las tiendas, bañador en varios colores
                (rosa ,azul ,verde)
                </p>
                <h3>$195.00MXN$</h3>
                <div class="colores d-none d-md-block"">
                <p class="text_c color_txt">Color</p> 
                <div class="colores_cards">
                    <div class="verde card_c"></div>
                    <div class="azul card_c"></div>
                    <div class="rosa card_c"></div>
                </div>
                <p class="subtitulo_card text_c">20 unidades disponibles</p>
                 </div>`,
        thumbnail: ["images/small/3.jpg", "images/small/3.jpg"],
        large: ["images/large/3.png", "images/large/3.jpg"],
        img_title: ["Imagen Corazon "],
        button_list: [
          {
            title: "Comprar",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          {
            title: "Añadir al Carrito",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          { title: "♡", url: "http://porfolio.bonchen.net/", new_window: true },
        ],
        tags: ["Figuras Humanas"],
      },

      //Item 4
      {
        title: "<br>Mano Floreada",
        description:  `
        <p>
        Mano Floreada; decorativo elaborado a base de hoja de lata y pintada con pinturas acrílicas en la palma
        de la mano contiene un espejo.
        </p>
        <h3>$195.00MXN$</h3>
        <div class="colores d-none d-md-block"">
        <p class="text_c color_txt">Color</p> 
        <div class="colores_cards">
            <div class="rojo card_c"></div>
            <div class="azul card_c"></div>
            <div class="rosa card_c"></div>
        </div>
        <p class="subtitulo_card text_c">20 unidades disponibles</p>
         </div>`,
        thumbnail: ["images/small/4.jpg", "images/small/3.jpg"],
        large: ["images/large/4.png", "images/large/3.jpg"],
        img_title: ["Imagen Corazon "],
        button_list: [
          {
            title: "Comprar",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          {
            title: "Añadir al Carrito",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          { title: "♡", url: "http://porfolio.bonchen.net/", new_window: true },
        ],
        tags: ["Figuras Humanas"],
      },
      //Item 5
      {
        title: "<br>Sirena Gorda",
        description: `
                <p>
                Sirena elaborada con hoja de lata y pintada con pintada a base de pintura 
                acrílica disponible en las versiones (rubia, morena).
                </p>
                <h3>$85.00MXN$</h3>
                <div class="d-none d-md-block">
                <p class="colores d-none d-md-block">Color</p> 
                <div class="colores_cards ">
                    <div class="rojo card_c"></div>
                    <div class="azul card_c"></div>
                    <div class="amarillo card_c"></div>
                    <div class="rosa card_c"></div>
                </div>
                <p class="subtitulo_card text_c">20 unidades disponibles</p>
                </div>`,
        thumbnail: ["images/small/5.jpg", "images/small/3.jpg"],
        large: ["images/large/5.png", "images/large/3.jpg"],
        img_title: ["Imagen Corazon "],
        button_list: [
          {
            title: "Comprar",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          {
            title: "Añadir al Carrito",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          { title: "♡", url: "http://porfolio.bonchen.net/", new_window: true },
        ],
        tags: ["Figuras Humanas"],
      },
      //Item 6
      {
        title: "<br>Sirena Frida Kahlo",
        description: `
                <p>
                Sirena con cara de Frida Kahlo, elaborada con hoja de lata y pintada 
                a base de pintura acrílica disponible en varias combinaciones de 
                colores además de que nos puedes especificar en cualquier caso que quisieras 
                alguno en específico.
                </p>
                <h3>$135.00MXN$</h3>
                <div class="colores d-none d-md-block">
                <p class="text_c color_txt">Color</p> 
                <div class="colores_cards">
                    <div class="rojo card_c"></div>
                    <div class="azul card_c"></div>
                    <div class="amarillo card_c"></div>
                    <div class="rosa card_c"></div>
                </div>
                <p class="subtitulo_card text_c">20 unidades disponibles</p>
                 </div>`,
        thumbnail: ["images/small/6.jpg", "images/small/3.jpg"],
        large: ["images/large/6.png", "images/large/3.jpg"],
        img_title: ["Imagen Corazon "],
        button_list: [
          {
            title: "Comprar",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          {
            title: "Añadir al Carrito",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          { title: "♡", url: "http://porfolio.bonchen.net/", new_window: true },
        ],
        tags: ["Figuras Humanas"],
      },
      //Item 7
      {
        title: "<br>Nicho de Concha",
        description: `
                <p>
                Nicho de concha elaborado con hoja de lata y pintado a base de pinturas de acrílico 
                disponible en varias versiones no en colores en específico.
                </p>
                <h3>$135.00MXN$</h3>
                <div class="colores d-none d-md-block">
                <p class="text_c color_txt">Color</p> 
                <div class="colores_cards">
                    <div class="rojo card_c"></div>
                    <div class="azul card_c"></div>
                    <div class="amarillo card_c"></div>
                    <div class="rosa card_c"></div>
                </div>
                <p class="subtitulo_card text_c">20 unidades disponibles</p>
                 </div>`,
        thumbnail: ["images/small/7.jpg", "images/small/3.jpg"],
        large: ["images/large/7.png", "images/large/3.jpg"],
        img_title: ["Imagen Corazon "],
        button_list: [
          {
            title: "Comprar",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          {
            title: "Añadir al Carrito",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          { title: "♡", url: "http://porfolio.bonchen.net/", new_window: true },
        ],
        tags: ["Nicho"],
      },

      //Item 8
      {
        title: "<br>Cruz de Nopal",
        description: `
                <p>
                Cruz de nopal elaborada con piezas de nopal secado a la intemperie 
                previamente y pequeñas piezas de maya; hermosa decoración disponible 
                en varios en varios tamaños. 
                </p>
                <h3>$170.00MXN$</h3>
                <div class="colores d-none d-md-block">
                <p class="text_c color_txt">Color</p> 
                <div class="colores_cards">
                    <div class="rojo card_c"></div>
                    <div class="azul card_c"></div>
                    <div class="amarillo card_c"></div>
                    <div class="rosa card_c"></div>
                </div>
                <p class="subtitulo_card text_c">20 unidades disponibles</p>
                 </div>`,
        thumbnail: ["images/small/8.jpg", "images/small/3.jpg"],
        large: ["images/large/8.png", "images/large/3.jpg"],
        img_title: ["Imagen Corazon "],
        button_list: [
          {
            title: "Comprar",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          {
            title: "Añadir al Carrito",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          { title: "♡", url: "http://porfolio.bonchen.net/", new_window: true },
        ],
        tags: ["Cruz"],
      },

      //Item 9
      {
        title: "<br>Imán Catrina",
        description: `
                <p>
                Imán de catrina elaborado con hoja de lata pintado con pinturas a 
                base de aceite disponible en sus versiones de color de sombrero (azul, verde, rosa).
                </p>
                <h3>$65.00MXN$</h3>
                <div class="colores d-none d-md-block">
                <p class="text_c color_txt">Color</p> 
                <div class="colores_cards">
                    <div class="azul card_c"></div>
                    <div class="verde card_c"></div>
                    <div class="rosa card_c"></div>
                </div>
                <p class="subtitulo_card text_c">20 unidades disponibles</p>
                 </div>`,
        thumbnail: ["images/small/9.jpg", "images/small/3.jpg"],
        large: ["images/large/9.png", "images/large/3.jpg"],
        img_title: ["Imagen Corazon "],
        button_list: [
          {
            title: "Comprar",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          {
            title: "Añadir al Carrito",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          { title: "♡", url: "http://porfolio.bonchen.net/", new_window: true },
        ],
        tags: ["Figuras Humanas"],
      },

      //Item 10
      {
        title: "<br>Corazón de Oro",
        description: `
                <p>
                Corazón de hoja de lata NO pintado elaborado con hoja en oro 
                y plata con esmalte de protección para el cuidado y su preservación de este.
                </p>
                <h3>$70.00MXN$</h3>
                <div class="colores d-none d-md-block">
                <p class="text_c color_txt">Color</p> 
                <div class="colores_cards">
                 
                </div>
                <p class="subtitulo_card text_c">20 unidades disponibles</p>
                 </div>`,
        thumbnail: ["images/small/10.jpg", "images/small/3.jpg"],
        large: ["images/large/10.png", "images/large/3.jpg"],
        img_title: ["Imagen Corazon "],
        button_list: [
          {
            title: "Comprar",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          {
            title: "Añadir al Carrito",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          { title: "♡", url: "http://porfolio.bonchen.net/", new_window: true },
        ],
        tags: ["Corazón"],
      },

      //Item 11
      {
        title: "<br>Mano Divina",
        description: `
                <p>
                Mano Divina elaborada a base de hoja de lata pintada a base de pinturas de acrílico con una 
                apertura para alguna imagen que contiene un vidrio de protección de esta. 
                </p>
                <h3>$70.00MXN$</h3>
                <div class="colores d-none d-md-block">
                <p class="text_c color_txt">Color</p> 
                <div class="colores_cards">
                    <div class="rojo card_c"></div>
                    <div class="azul card_c"></div>
                    <div class="amarillo card_c"></div>
                    <div class="rosa card_c"></div>
                </div>
                <p class="subtitulo_card text_c">20 unidades disponibles</p>
                 </div>`,
        thumbnail: ["images/small/11.jpg", "images/small/3.jpg"],
        large: ["images/large/11.png", "images/large/3.jpg"],
        img_title: ["Imagen Corazon "],
        button_list: [
          {
            title: "Comprar",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          {
            title: "Añadir al Carrito",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          { title: "♡", url: "http://porfolio.bonchen.net/", new_window: true },
        ],
        tags: ["Figuras Humanas"],
      },

      //Item 12
      {
        title: "<br>Estrella Floreada",
        description: `
                <p>
                Estrella floreada elaborada con hoja de lata y pintada a base de pinturas 
                de acrílico las ediciones de los colores de las flores pueden
                cambiar pero los colores de fondo disponible son (rosa, azul, verde) 
                </p>
                <h3>$220.00MXN$</h3>
                <div class="colores d-none d-md-block">
                <p class="text_c color_txt">Color</p> 
                <div class="colores_cards">
                    <div class="verde card_c"></div>
                    <div class="azul card_c"></div>
                    <div class="rosa card_c"></div>
                </div>
                <p class="subtitulo_card text_c">20 unidades disponibles</p>
                 </div>`,
        thumbnail: ["images/small/12.jpg", "images/small/3.jpg"],
        large: ["images/large/12.png", "images/large/3.jpg"],
        img_title: ["Imagen Corazon "],
        button_list: [
          {
            title: "Comprar",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          {
            title: "Añadir al Carrito",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          { title: "♡", url: "http://porfolio.bonchen.net/", new_window: true },
        ],
        tags: ["Nicho"],
      },

      //Item 13
      {
        title: "<br>Guirnalda de Corazón",
        description: `
                <p>
                Guirnalda elaborada de hoja de lata y pintada a 
                base de pinturas de acrílico único colores 
                disponible (Blanco)
                </p>
                <h3>$320.00MXN$</h3>
                <div class="colores d-none d-md-block">
                <p class="text_c color_txt">Color</p> 
                <div class="colores_cards">
                    <div class="rojo card_c"></div>
                    <div class="azul card_c"></div>
                    <div class="amarillo card_c"></div>
                    <div class="rosa card_c"></div>
                </div>
                <p class="subtitulo_card text_c">20 unidades disponibles</p>
                 </div>`,
        thumbnail: ["images/small/13.jpg", "images/small/3.jpg"],
        large: ["images/large/13.png", "images/large/3.jpg"],
        img_title: ["Imagen Corazon "],
        button_list: [
          {
            title: "Comprar",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          {
            title: "Añadir al Carrito",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          { title: "♡", url: "http://porfolio.bonchen.net/", new_window: true },
        ],
        tags: ["Corazón"],
      },

      //Item 14
      {
        title: "<br>Corazón Vela",
        description: `
                <p>
                Corazón vela elaborado de hoja de lata y pintado a base 
                de pinturas de acrílico tiene un pequeño apartado donde 
                su nombre del mismo corazón hace presencia puesto que es 
                para una vela de circulo. Colores disponibles 
                (rojo, azul, verde, rosa)
                </p>
                <h3>$320.00MXN$</h3>
                <div class="colores d-none d-md-block">
                <p class="text_c color_txt">Color</p> 
                <div class="colores_cards">
                    <div class="rojo card_c"></div>
                    <div class="azul card_c"></div>
                    <div class="amarillo card_c"></div>
                    <div class="rosa card_c"></div>
                </div>
                <p class="subtitulo_card text_c">20 unidades disponibles</p>
                 </div>`,
        thumbnail: ["images/small/14.jpg", "images/small/3.jpg"],
        large: ["images/large/14.png", "images/large/3.jpg"],
        img_title: ["Imagen Corazon "],
        button_list: [
          {
            title: "Comprar",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          {
            title: "Añadir al Carrito",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          { title: "♡", url: "http://porfolio.bonchen.net/", new_window: true },
        ],
        tags: ["Corazón"],
      },

      //Item 15
      {
        title: "<br>Corazón Oxidado",
        description: `
                <p>
                El corazón oxidado es elaborado con hoja de lata. El 
                óxido se hace a base de químicos que hacen que su 
                deterioro sea más rápido para que lleguemos a dar ese 
                acabado.
                </p>
                <h3>$70.00MXN$</h3>
                <div class="colores d-none d-md-block">
                <p class="text_c color_txt">Color</p> 
                <div class="colores_cards">
                    <div class="rojo card_c"></div>
                    <div class="azul card_c"></div>
                    <div class="amarillo card_c"></div>
                    <div class="rosa card_c"></div>
                </div>
                <p class="subtitulo_card text_c">20 unidades disponibles</p>
                 </div>`,
        thumbnail: ["images/small/15.jpg", "images/small/3.jpg"],
        large: ["images/large/15.png", "images/large/3.jpg"],
        img_title: ["Imagen Corazon "],
        button_list: [
          {
            title: "Comprar",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          {
            title: "Añadir al Carrito",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          { title: "♡", url: "http://porfolio.bonchen.net/", new_window: true },
        ],
        tags: ["Corazón"],
      },

      //Item 16
      {
        title: "<br>Exvoto",
        description: `
                <p>
                Los exvotos son elaborados en una hoja de lata y pintados 
                con pintura acrílica sus diseños pueden variar puesto que 
                cada uno cuenta una historia diferente ¿Quieres ver más 
                modelos? ¡Ponte en contacto con nosotros!
                </p>
                <h3>$320.00MXN$</h3>
                <div class="colores d-none d-md-block">
                <p class="text_c color_txt">Color</p> 
                <div class="colores_cards">
                    <div class="rojo card_c"></div>
                    <div class="azul card_c"></div>
                    <div class="amarillo card_c"></div>
                    <div class="rosa card_c"></div>
                </div>
                <p class="subtitulo_card text_c">20 unidades disponibles</p>
                 </div>`,
        thumbnail: ["images/small/16.jpg", "images/small/3.jpg"],
        large: ["images/large/16.png", "images/large/3.jpg"],
        img_title: ["Imagen Corazon "],
        button_list: [
          {
            title: "Comprar",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          {
            title: "Añadir al Carrito",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          { title: "♡", url: "http://porfolio.bonchen.net/", new_window: true },
        ],
        tags: ["Figuras Humanas"],
      },

      //Item 17
      {
        title: "<br>Corazón de Hierro",
        description: `
                <p>
                El corazón de hierro es elaborado con hoja de lata y esa 
                tonalidad es posible con una tinta que nosotros mismos 
                fabricamos y la cual llamamos Antique después de eso es 
                protegida con un esmalte para la perseveración del 
                producto.
                </p>
                <h3>$120.00MXN$</h3>
                <div class="colores d-none d-md-block">
                <p class="text_c color_txt">Color</p> 
                <div class="colores_cards">
                    <div class="rojo card_c"></div>
                    <div class="azul card_c"></div>
                    <div class="amarillo card_c"></div>
                    <div class="rosa card_c"></div>
                </div>
                <p class="subtitulo_card text_c">20 unidades disponibles</p>
                 </div>`,
        thumbnail: ["images/small/17.jpg", "images/small/3.jpg"],
        large: ["images/large/17.png", "images/large/3.jpg"],
        img_title: ["Imagen Corazon "],
        button_list: [
          {
            title: "Comprar",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          {
            title: "Añadir al Carrito",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          { title: "♡", url: "http://porfolio.bonchen.net/", new_window: true },
        ],
        tags: ["Corazón"],
      },

      //Item 18
      {
        title: "<br>Corazón Milagro",
        description: `
                <p>
                Corazón de madera de patol con milagros incrustados de 
                color plata pintado a base de pinturas acrílicas 
                disponible en tres tamaños.
                </p>
                <h3>$120.00MXN$</h3>
                <div class="colores d-none d-md-block">
                <p class="text_c color_txt">Color</p> 
                <div class="colores_cards">
                    <div class="rojo card_c"></div>
                    <div class="azul card_c"></div>
                    <div class="amarillo card_c"></div>
                    <div class="rosa card_c"></div>
                </div>
                <p class="subtitulo_card text_c">20 unidades disponibles</p>
                 </div>`,
        thumbnail: ["images/small/18.jpg", "images/small/3.jpg"],
        large: ["images/large/18.png", "images/large/3.jpg"],
        img_title: ["Imagen Corazon "],
        button_list: [
          {
            title: "Comprar",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          {
            title: "Añadir al Carrito",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          { title: "♡", url: "http://porfolio.bonchen.net/", new_window: true },
        ],
        tags: ["Corazón"],
      },
      {
        title: "<br>Nicho Iglesia",
        description: `
        <p>
        Nicho de iglesia elaborado es elaborado con hoja de lata y pintada a base de pintura de acrílico las ediciones de los colores son (turquesa,blanco,morado,rosa,azul).
        </p>
        <h3>$220.00MXN$</h3>
        <div class="colores d-none d-md-block">
        <p class="text_c color_txt d-none d-md-block">Color</p> 
        <div class="colores_cards ">
            <div class="turquesa card_c"></div>
            <div class="blancoOBS card_c"></div>
            <div class="morado card_c"></div>
            <div class="rosa card_c"></div>
            <div class="azul card_c"></div>
        </div>
        <p class="subtitulo_card text_c">20 unidades disponibles</p>
         </div>`,
        thumbnail: ["images/small/19.jpg", "images/small/3.jpg"],
        large: ["images/large/19.png", "images/large/3.jpg"],
        img_title: ["Imagen iglesia "],
        button_list: [
          {
            title: "Comprar",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          {
            title: "Añadir al Carrito",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          { title: "♡", url: "http://porfolio.bonchen.net/", new_window: true },
        ],
        tags: ["Nicho"],
      },
      {
        title: "<br>Ángel Musical",
        description: `
      <p>
      Ángel de madera de patol pintado a base de pintura acrílica disponible en varios instrumentos .
      </p>
      <h3>$350.00MXN$</h3>
      <div class="colores d-none d-md-block">
      <p class="subtitulo_card text_c">25 unidades disponibles</p>
       </div>`,
        thumbnail: ["images/small/20.png", "images/small/3.jpg"],
        large: ["images/large/20.png", "images/large/3.jpg"],
        img_title: ["Imagen angel "],
        button_list: [
          {
            title: "Comprar",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          {
            title: "Añadir al Carrito",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          { title: "♡", url: "http://porfolio.bonchen.net/", new_window: true },
        ],
        tags: ["Figuras Humanas"],
      },
      {
        title: "<br>Nicho triple concha ",
        description: `
    <p>
    Nicho triple concha elaborado con hoja de lata y pintado a base de pintura de acrílico con una pequeña puerta de vidrio que permite ver el fondo de cualquier imagen.
    </p>
    <p><h3>$255.00MXN$</h3></p>
    <div class="d-none d-md-block">
    <p class="text_c color_txt">Color</p> 
    <div class="colores_cards">
        <div class="rojo card_c"></div>
        <div class="azul card_c"></div>
        <div class="amarillo card_c"></div>
        <div class="verde card_c"></div>
    </div>
    <p class="subtitulo_card text_c">21 unidades disponibles</p>
     </div>`,
        thumbnail: ["images/small/21.png", "images/small/3.jpg"],
        large: ["images/large/21.png", "images/large/3.jpg"],
        img_title: ["Imagen frida "],
        button_list: [
          {
            title: "Comprar",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          {
            title: "Añadir al Carrito",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          { title: "♡", url: "http://porfolio.bonchen.net/", new_window: true },
        ],
        tags: ["Nicho"],
      },
      {
        title: "<br>Nicho Fuente",
        description: `
            <p>
           Nicho de fuente elaborado a base de hoja de lata pintado con antiquecon una pequeña puerta de vidrio que permite ver el fondo de cualquier imagen.
           </p>
          <h3>$245.00MXN$</h3>
       <div class="colores d-none d-md-block">
  
      <p class="subtitulo_card text_c">22 unidades disponibles</p>
   </div>`,
        thumbnail: ["images/small/22.png", "images/small/3.jpg"],
        large: ["images/large/22.png", "images/large/3.jpg"],
        img_title: ["Imagen xd "],
        button_list: [
          {
            title: "Comprar",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          {
            title: "Añadir al Carrito",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          { title: "♡", url: "http://porfolio.bonchen.net/", new_window: true },
        ],
        tags: ["Nicho"],
      },
      {
        title: "<br>Nicho cuatro corazones",
        description: `
<p>
El nicho es elaborado con hoja de lata pintados con pintura acrílica disponible en varias versiones de colores de flores (azul,morado,naranja,verde).
</p>
<p><h3>$270.00MXN$</h3></p>
<div class="colores d-none d-md-block">
<p class="text_c color_txt">Color</p> 
<div class="colores_cards">
    <div class="azul card_c"></div>
    <div class="morado card_c"></div>
    <div class="naranja card_c"></div>
    <div class="verde card_c"></div>
</div>
<p class="subtitulo_card text_c">13 unidades disponibles</p>
 </div>`,
        thumbnail: ["images/small/23.png", "images/small/3.jpg"],
        large: ["images/large/23.png", "images/large/3.jpg"],
        img_title: ["Imagen Ncorazones "],
        button_list: [
          {
            title: "Comprar",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          {
            title: "Añadir al Carrito",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          { title: "♡", url: "http://porfolio.bonchen.net/", new_window: true },
        ],
        tags: ["Nicho"],
      },
      {
        title: "<br>Cruz divina",
        description: `
<p>
La cruz divina es tallada con madera de patol posteriormente con una capa de sellador es barnizada y posteriormente pintada, finalizado todo ese proceso es elaborado pequeñas piezas de adorno de hoja de lata y pintadas con pintura de aceite dorada.
</p>
<p><h3>$270.00MXN$</h3></p>
<div class="colores d-none d-md-block">


<p class="subtitulo_card text_c">15 unidades disponibles</p>
</div>`,
        thumbnail: ["images/small/24.png", "images/small/3.jpg"],
        large: ["images/large/24.png", "images/large/3.jpg"],
        img_title: ["Imagen cruz "],
        button_list: [
          {
            title: "Comprar",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          {
            title: "Añadir al Carrito",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          { title: "♡", url: "http://porfolio.bonchen.net/", new_window: true },
        ],
        tags: ["Cruz"],
      },
      //aaa
      {
        title: "<br>Catrina flor",
        description: `
<p>
La catrina es elaborada con hoja de lata y pintada a base de pintura de acrílico con una pequeña incrustaciones de listones de colores .    </p>
<p><h3>$270.00MXN$</h3></p>
<div class="colores d-none d-md-block">
<p class="text_c color_txt">Color</p> 
<div class="colores_cards">
<div class="rojo card_c"></div>
<div class="azul card_c"></div>
<div class="amarillo card_c"></div>
<div class="rosa card_c"></div>
</div>
<p class="subtitulo_card text_c">15 unidades disponibles</p>
</div>`,
        thumbnail: ["images/small/25.png", "images/small/3.jpg"],
        large: ["images/large/25.png", "images/large/3.jpg"],
        img_title: ["Imagen catrina "],
        button_list: [
          {
            title: "Comprar",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          {
            title: "Añadir al Carrito",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          { title: "♡", url: "http://porfolio.bonchen.net/", new_window: true },
        ],
        tags: ["Figuras Humanas"],
      },
      {
        title: "<br>Corazón tres rayos",
        description: `
<p>
El corazón tres rayos es elaborado con hoja de lata y pintada a base de pintura de acrílico con una pequeña incrustación de una gama de fantasía de color rojo.
</p>
<p><h3>$130.00MXN$</h3></p>
<div class="colores d-none d-md-block">
<p class="text_c color_txt">Color</p> 
<div class="colores_cards">
<div class="rojo_claro card_c"></div>
<div class="rojo card_c"></div>
<div class="rojo_Oscuro card_c"></div>
</div>
<p class="subtitulo_card text_c">18 unidades disponibles</p>
</div>`,
        thumbnail: ["images/small/26.png", "images/small/3.jpg"],
        large: ["images/large/26.png", "images/large/3.jpg"],
        img_title: ["Imagen corazonR "],
        button_list: [
          {
            title: "Comprar",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          {
            title: "Añadir al Carrito",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          { title: "♡", url: "http://porfolio.bonchen.net/", new_window: true },
        ],
        tags: ["Corazón"],
      },
      {
        title: "<br>Corazón Cmini",
        description: `
<p>
El corazón es elaborado con hoja de lata y pintada a base de pintura de acrílico su nombre se da por que es algo pequeño relacionado con los tamaños de los otros.
</p>
<p><h3>$65.00MXN$</h3></p>
<div class="colores d-none d-md-block">
<p class="text_c color_txt">Color</p> 
<div class="colores_cards">
<div class="rojo_claro card_c"></div>
<div class="rojo card_c"></div>
<div class="rojo_Oscuro card_c"></div>
</div>
<p class="subtitulo_card text_c">17 unidades disponibles</p>
</div>`,
        thumbnail: ["images/small/27.png", "images/small/3.jpg"],
        large: ["images/large/27.png", "images/large/3.jpg"],
        img_title: ["Imagen corazonM "],
        button_list: [
          {
            title: "Comprar",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          {
            title: "Añadir al Carrito",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          { title: "♡", url: "http://porfolio.bonchen.net/", new_window: true },
        ],
        tags: ["Corazón"],
      },
      {
        title: "<br>Puerco Madera",
        description: `
<p>
El puerco es tallado en madera de patol ,la madera no tiene un peso significante ya que esa madera es la misma con la que anteriormente hacían los santos.
</p>
<p><h3>$230.00MXN$</h3></p>
<div class="colores">


<p class="subtitulo_card text_c">10 unidades disponibles</p>
</div>`,
        thumbnail: ["images/small/28.png", "images/small/3.jpg"],
        large: ["images/large/28.png", "images/large/3.jpg"],
        img_title: ["Imagen puerco "],
        button_list: [
          {
            title: "Comprar",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          {
            title: "Añadir al Carrito",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          { title: "♡", url: "http://porfolio.bonchen.net/", new_window: true },
        ],
        tags: ["Animales"],
      },
      {
        title: "<br>Porta vela",
        description: `
<p>
Porta vela en forma de pájaro es elaborado con hoja de lata y pintada a base de pintura de acrílico las ediciones de los colores de las flores pueden cambiar pero los colores de fondo disponible son (rosa,azul,verde)  
</p>
<p><h3>$175.00MXN$</h3></p>
<div class="colores d-none d-md-block">
<p class="text_c color_txt">Color</p> 
<div class="colores_cards">
<div class="rosa card_c"></div>
<div class="azul card_c"></div>
<div class="verde card_c"></div>

</div>
<p class="subtitulo_card text_c">15 unidades disponibles</p>
</div>`,
        thumbnail: ["images/small/29.png", "images/small/3.jpg"],
        large: ["images/large/29.png", "images/large/3.jpg"],
        img_title: ["Imagen porta "],
        button_list: [
          {
            title: "Comprar",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          {
            title: "Añadir al Carrito",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          { title: "♡", url: "http://porfolio.bonchen.net/", new_window: true },
        ],
        tags: ["Animales"],
      },
      {
        title: "<br>Corazón catrina",
        description: `
<p>
El corazón catrina es elaborado con hoja de lata y pintada a base de pintura de acrílico las ediciones de los colores de las flores pueden cambiar pero los colores de fondo disponible son (naranja,azul,verde bosque)  
</p>
<p><h3>$220.00MXN$</h3></p>
<div class="colores d-none d-md-block">
<p class="text_c color_txt">Color</p> 
<div class="colores_cards">
<div class="naranja card_c"></div>
<div class="azul card_c"></div>
<div class="verde_Bosque card_c"></div>

</div>
<p class="subtitulo_card text_c">11 unidades disponibles</p>
</div>`,
        thumbnail: ["images/small/30.png", "images/small/3.jpg"],
        large: ["images/large/30.png", "images/large/3.jpg"],
        img_title: ["Imagen corazon_catrina "],
        button_list: [
          {
            title: "Comprar",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          {
            title: "Añadir al Carrito",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          { title: "♡", url: "http://porfolio.bonchen.net/", new_window: true },
        ],
        tags: ["Corazón"],
      },
    ],
  });
});
