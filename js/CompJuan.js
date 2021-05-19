data.component('comp-juan', {
    template: /*html*/
    `
        <div class="bg-danger text-dark p-3">
            <h1 class="text-center"><u>JUAN</u></h1>
            <img src="img/Juan.jpg" alt="" class="mx-auto d-block img-fluid rounded-3 img-thumbnail">
            <div class="mb-3">
                <label class="form-label fs-4">Historia Juan</label>
                <input type="email" class="form-control fs-4" placeholder="Historias de Juan" v-model="juanTxt1">
            </div>
           
            <div class="fw-bold py-2 bg-light rounded-3">
                <h5 class="m-2">{{juanTxt1}}</h5>
            </div>

            <div class="row text-center">
                <div class="col-6">
                    <button @click="GuardarLocalStorage" class="btn btn-dark mt-3">Guardar Datos Juan</button>
                </div>

                <div class="col-6">
                    <button @click="reset" class="btn btn-success mt-3">Limpiar Datos Juan</button>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            juanTxt1: 'Juan dice: ',
            historiasJuan: []
        }
    },
    methods: {
        GuardarLocalStorage() {

            this.historiasJuan.push(this.juanTxt1);

            console.log('arrayAlex: ', this.historiasJuan);

            if(this.historiasJuan != '')
            {
                localStorage.setItem('juan', JSON.stringify(this.historiasJuan)); 
            }
        },
        reset(){
            this.alexTxt1 = 'Juan dice: ';
            this.historiasJuan = [];
        }
    },
})