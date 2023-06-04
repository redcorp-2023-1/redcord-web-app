

<template>
    <main>
    <SideBar></SideBar>

    <div class="card">
        <pv-datatable :value="trabajadores" class="table">
            <pv-column field="id" header="ID"></pv-column>
            <pv-column field="name" header="Nombre"></pv-column>
            <pv-column field="correo" header="Correo"></pv-column>
            <pv-column field="area" header="Área"></pv-column>
        </pv-datatable>

        <div class="workers">
            <div v-for="Trabajador in trabajadores">
                <button>Ver Perfil</button>
            </div>

        </div>

    </div>


    </main>

</template>

<script>
import {TrabajadorApiService} from '../services/trabajadores-api.service'
import SideBar from '../SideBar/SideBar.vue';
import Trabajador from "./trabajadores-card.vue";


export default{
    name:"trabajadores",
    components:{Trabajador, SideBar},
    data(){
        return{
            trabajadores:[],
            trabajadoresService: new TrabajadorApiService()
        }
    },

    beforeMount()
    {

        this.trabajadoresService.getAllTrabajadores().then((response)=>{
            this.trabajadores = response.data;
        })

    }
    
}

</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

main{

    flex-direction: row;
    display: flex;

}
.card{
    display: grid;
    grid-template-columns: repeat(5,1fr);
    gap: 0.1rem;
}
.table{
    grid-column: 1/5;
}
td{
    height: 60px;
}

button{
    height:40px;
    width: 100px;
    margin-bottom:20px;
    background:#C9725B;
    color:white;
    font-weight: bold;
}
button:hover{
    background: #22242E;
}

.workers{
    padding-top: 60px;
    display: flex;
    flex-direction: column;
    text-align: center;
}
    .p-column-title{
       color: rgba(0,0,0,0.6);
        border-bottom:1px solid rgba(0,0,0,0.6);
    }

</style>