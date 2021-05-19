
data.component('buscador',{
    template: /* html */
    `
        <!-- Busqueda: Componente Padre App.js -->
        <br>
        <div class="col-12 bg-secondary text-light text-center p-3 rounded-2">
            <h1>Mostrar info desde localStorage</h1>
            <div>
                <h3 v-for="item in receptor">{{item}}</h3>
                <h3 v-for="item in receptor2">{{item}}</h3>
            </div>
            <button @click="GetElement" class="btn btn-outline-light" type="submit">Descargar Datos</button>
        </div>

        <div class="text-center my-3">
            
        </div>

        <!--<div class="col-12 bg-info text-light text-center p-3">
            <h1>¿Que estas Buscando?</h1>
            <input type="text" class="form-control fs-4 my-3" placeholder="Buscador de Historias">
            <button @click="Buscar" class="btn btn-outline-light" type="submit">Buscar</button>
        </div>
        -->

    `,

    data() {
        return {
            receptor: [],
            receptor2: [],
        }
    },
    methods: {
        GetElement() {

            this.receptor = JSON.parse(localStorage.getItem('alex'))
            //this.contenido.push(this.receptor.split(","))
            console.log('receptor: ', this.receptor)

            this.receptor2 = JSON.parse(localStorage.getItem('juan'))
            //this.contenido.push(this.receptor.split(","))
            console.log('receptor2: ', this.receptor2)
        },
        Buscar(){
            
        }
    },
})