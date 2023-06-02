<template>
  <div class="Card">
    <div class="border"></div>
    <div class="content">
      <div class="code">#LTA546 2023</div>
      <div class="title">ÁREA DE LOGÍSTICA - STARTUP</div>
      <div class="members">Ver miembros</div>
    </div>

    <div class="star">
      <img src="../../assets/images/Star.png" alt="Star" class="star-img" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'seccion.card.component',
};
</script>

<style scoped>
.Card {
  width: 680px;
  height: 110px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  border: 3px solid black;
  align-items: center;
  position: relative;
}
.border {
  height: 70%;
  border: 8px solid pink;
  margin-left: 1px;
}
.content {
  margin-left: 30px;
  display: flex;
  flex-direction: column;
}
.code {
  color: grey;
  text-align: left;
}
.title {
  color: black;
  font-size: 20px;
  font-weight: bold;
  text-decoration: underline;
}
.members {
  color: #7da4ca;
  text-align: left;
}
.star {
  margin-top: 10px;
  position: absolute;
  right: 0;
  margin-right: 25px;
}
.star-img {
  height: auto;
  width: 35px;
}
</style>
