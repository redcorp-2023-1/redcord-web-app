
  <template>
    <div class="select-cargo">
      <div class="logo-container">
        <img src="../assets/logo1.png" alt="Logo">
      </div>
      <h2>Seleccione tu cargo en tu compañía</h2>
      <div class="buttons-container">
        <button class="cargo-button">
          <img src="../assets/icono8.png" alt="Administrador">
          <label>Administrador</label>
        </button>
        <button class="cargo-button">
          <img src="../assets/icono9.png" alt="Empleado">
          <label>Empleado</label>
        </button>
      </div>
      <button class="continuar-button">Continuar</button>
    </div>
  </template>



<script>
export default {
  name: "selectCargo"
}
</script>

<style>
.select-cargo {
  background-color: #FFFFFF;
  padding: 20px;
}
.logo-container {
  text-align: left;
  margin-bottom: 20px;
}
.logo-container img {
  max-height: 50px;
}
h2 {
  text-align: center;
  color: #000000;
  font-size: 1.2rem;
  margin-bottom: 20px;
}
.buttons-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.cargo-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45%;
  background-color: #FFFFFF;
  border: 2px solid #CFCFCF;
  border-radius: 5px;
  padding: 20px;
}
.cargo-button img {
  max-height: 50px;
  margin-bottom: 10px;
}
.cargo-button label {
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
}
.continuar-button {
  display: block;
  margin: 0 auto;
  width: 150px;
  background-color: #C9725B;
  border-radius: 30px;
  color: #FFFFFF;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}
</style>
