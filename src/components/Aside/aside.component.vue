<template>
  <aside>
    <span class="p-input-icon-left input">
      <i class="pi pi-search" />
      <pv-input-text v-model="search" placeholder="Buscar" />
    </span>

    <Contacts :contacts="contacts" />

    <Groups :groups="groups" />
  </aside>
</template>

<script setup>
import { onMounted, ref } from 'vue';

import { ContactsService } from '../services/contacts.service';
import { GroupsService } from '../services/groups.service';

import Contacts from './contacts.component.vue';
import Groups from './groups.component.vue';

const contactsService = new ContactsService();
const groupsService = new GroupsService();

const search = ref('');
const contacts = ref([]);
const groups = ref([]);

onMounted(async () => {
  contacts.value = await contactsService.getAll();
  groups.value = await groupsService.getAll();
});
</script>

<style scoped>
aside {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 24px 0;
  gap: 24px;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  border-left: 1px solid lightgray;
}
</style>
