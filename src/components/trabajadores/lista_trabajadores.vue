

<template>
    <main>
    <SideBar></SideBar>
    
    <div class="card">
        <pv-datatable :value="trabajadores" tableStyle="min-width: 50rem">
            <pv-column field="id" header="ID"></pv-column>
            
            <pv-column field="name" header="Nombre"></pv-column>
            <pv-column field="correo" header="Correo"></pv-column>
            <pv-column field="area" header="Área"></pv-column>
            
        </pv-datatable>

        <div class="workers">
            <div v-for="Trabajador in trabajadores">
            <router-link :to="{ name: 'Trabajador', params: { id: Trabajador.id, nombre: Trabajador.name, correo: Trabajador.correo, area: Trabajador.area, foto: Trabajador.foto } }">
                <pv-button label="Ver perfil" style="display: block; padding-bottom: 9px;"/><p/>
                
            </router-link>
            </div>
            
        </div>



    </div>
        
    </main>
   
</template>

<script>
import {TrabajadorApiService} from '../services/trabajadores-api.service'
import SideBar from '../SideBar/SideBar.vue';


export default{
    name:"trabajadores",
    components:{SideBar},
    data(){
        return{
            id:1,
            trabajadores:[],
            trabajadoresService: new TrabajadorApiService()
        }
    },
    beforeMount()
    {
        this.id = this.$route.params.id

        this.trabajadoresService.getAll().then((response)=>{
            this.trabajadores = response.data
        })


       
    }
    
}

</script>

<style>

main{
    
    flex-direction: row;
    display: flex;

}
.card{
    display: flex;
    flex-direction: row;
}

.workers{
    padding-top: 60px;
    display: flex;
    flex-direction: column;
    text-align: center;
    
}

</style>