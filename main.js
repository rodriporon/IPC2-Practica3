/* en esta parte instancio a Muuri a la clase .grid de mi body para poder
utilizar los layaout de dicha librería y poder organizar de mejor manera
las fichas de información. */

const grid = new Muuri('.grid', {

    layout: {

        rounding: false,
    },

});

window.addEventListener('load', () => {
    grid.refreshItems().layout();
    document.getElementById('grid').classList.add('informacion-cargada');
    const links = document.querySelectorAll('#categorias a');
    /* itera sobre todos los href que se encuentran en el id categorias */
    links.forEach( (element) => {
        element.addEventListener('click', (e) => {
            /* quitar el evento por defecto que realiza el navegador al clickear un enlace href */
            e.preventDefault();
            links.forEach((enlace) => {
                enlace.classList.remove('active')
            });
            /* se le asigna la clase active del css al enlace que fue clickeado */
            e.target.classList.add('active');
            /* defino en qué categoría he clickeado para redirigirme a esa ficha de información */
            const category = e.target.innerHTML.toLowerCase();
            category === 'inicio' ? grid.filter('[data-category]') :
            /* grid.filter filtra todas las fichas por su categoría */
            grid.filter(`[data-category="${category}"]`);
        });
    });
});

