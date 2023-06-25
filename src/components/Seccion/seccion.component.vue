<template>
  <main>
    <div class="SeccionesActuales">
      <div class="title">Secciones Actuales</div>

      <div class="filter">
        <span class="filter-text">Filtrar</span>
        <select name="Input" id="input" class="Options-dropdown">
          <option value="Option">Todas las secciones</option>
        </select>
      </div>

      <div class="content_section">
        <div class="card_section" v-for="section in sections">
          <SeccionCardComponent
            :id="section.id"
            :section_Name="section.section_Name"
            :description="section.description"
          />

          <div class="line"></div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import SeccionCardComponent from './seccion.card.component.vue';
import { SectionAndEmployeeApiService } from '../services/SectionsAndEmployee-api.service';

export default {
  name: 'Sections',
  components: { SeccionCardComponent },
  data() {
    return {
      employee_id: 0,
      sections: [],
      SectionsAndEmployeeService: new SectionAndEmployeeApiService(),
    };
  },
  async beforeMount() {
    this.employee_id = localStorage.getItem('id_employee');
    try {
      const response = await this.SectionsAndEmployeeService.GetSectionsByEmployeeId(
        this.employee_id
      );
      this.sections = response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style scoped>
main {
  display: flex;
}

.SeccionesActuales {
  background-color: rgb(240, 240, 240);
  color: dimgrey;
  border-radius: 10px;
  min-height: 100vh;
  position: relative;
  flex: 1 1 auto;
}
.title {
  border-bottom: 1px solid slategrey;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
}
.filter {
  border-bottom: 1px solid slategrey;
  line-height: 40px;
  display: flex;
  padding: 5px 60px;
}
.filter-text {
  font-size: 20px;
}
.Options-dropdown {
  margin-left: 15px;
  background-color: white;
  color: black;
  border-radius: 20px;
  height: 30px;
  width: 150px;
  text-align: center;
  margin-top: 5px;
}
.content content_section {
  position: relative;
  align-items: center;
  justify-content: columns;
}
.card_section {
  padding: 12px 30px 5px;
  flex-direction: row;
}
.line {
  margin-top: 10px;
  height: 0;
  border: 1px solid darkgrey;
}
</style>
