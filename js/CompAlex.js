data.component('comp-alex', {
    template: /*html*/
    `
        <div class="bg-warning text-dark p-3 col-12" >
            <h1 class="text-center"><u>ALEX</u></h1>
            <img src="img/Alex.jpg" alt="" class="mx-auto d-block img-fluid rounded-3 img-thumbnail">
            <div class="mb-3">
                <label class="form-label fs-4">Las Historias de Alex</label>
                <input type="text" class="form-control fs-4" placeholder="ingresa la historia" v-model="alexTxt1">
            </div>

            <div class="fw-bold py-2 bg-light rounded-3">
                <h5 class="m-2">{{alexTxt1}}</h5>
            </div>

            <div class="row text-center">
                <div class="col-6">
                    <button @click="GuardarLocalStorage" class="btn btn-dark mt-3">Guardar Datos Alex</button>
                </div>

                <div class="col-6">
                    <button @click="reset" class="btn btn-danger mt-3">Limpiar Datos Alex</button>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            alexTxt1: 'Alex dice: ',
            historiasAlex: []
        }
    },
    methods: {
        GuardarLocalStorage() {

            this.historiasAlex.push(this.alexTxt1);

            console.log('arrayAlex: ', this.historiasAlex);

            if(this.historiasAlex != '')
            {
                localStorage.setItem('alex', JSON.stringify(this.historiasAlex));
            }
        },
        reset(){
            this.alexTxt1 = 'Alex dice: ';
            this.historiasAlex = [];
        }
    },
})