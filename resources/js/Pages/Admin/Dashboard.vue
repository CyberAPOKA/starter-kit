<template>
  <Sidebar></Sidebar>

  <div class="p-4 sm:ml-64">
    <div
      class="p-4 my-10 md:mx-10 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th
                scope="col"
                class="px-6 py-3 text-sm font-medium text-gray-900 dark:text-white"
              >
                ID
              </th>
              <th scope="col" class="px-6 py-3">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >E-mail</label
                >
                <input
                  type="text"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Pesquisar"
                  v-model="searchEmail"
                />
              </th>
              <th scope="col" class="px-6 py-3">
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Nome</label
                >
                <input
                  type="text"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Pesquisar"
                  v-model="searchName"
                />
              </th>
              <!-- <th scope="col" class="px-6 py-3">
                <label
                  for="city"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Cidade</label
                >
                <input
                  type="text"
                  id="city"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Pesquisar"
                  v-model="searchCity"
                />
              </th> -->
              <th
                scope="col"
                class="px-6 py-3 text-sm font-medium text-gray-900 dark:text-white"
              >
                AÇÕES
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              v-for="(user, index) in users.data"
              :key="user.id"
              :users="users"
              :index="index"
            >
              <td class="px-6 py-4">
                <Link
                  :href="'/admin/user/' + user.id"
                  class="font-medium text-gray-900 whitespace-nowrap dark:text-blue-400"
                >
                  {{ user.id }}
                </Link>
              </td>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {{ user.email }}
              </th>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {{ user.profile?.name }}
              </th>
              <th><button @click="openModal(user)">EDitar</button></th>
            </tr>
          </tbody>
        </table>
        <!-- <div
          v-if="selectedUser && isModalOpen"
          class="modal-test fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
          @click="handleOutsideClick"
        >
          <div class="modal-content">
            <h2>{{ selectedUser.email }}</h2>
            <p>{{ selectedUser.profile?.name }}</p>
          </div>
          <button @click="closeModal">Fechar</button>
        </div> -->

        <div
          v-if="selectedUser && isModalOpen"
          tabindex="-1"
          aria-hidden="true"
          class="modal-test flex justify-center items-center bg-slate-200 fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%)] max-h-full"
          @click="handleOutsideClick"
        >
          <div class="relative w-full max-w-2xl max-h-full modal-content">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <!-- Modal header -->
              <div
                class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600"
              >
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                  EDITAR
                </h3>
                <button
                  type="button"
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>
              </div>
              <!-- Modal body -->
              <div class="p-6 space-y-6">
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  <h2>{{ selectedUser.email }}</h2>
          
                </p>
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  <p>{{ selectedUser.profile?.name }}</p>
                </p>
              </div>
              <!-- Modal footer -->
              <div
                class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
              >
                <button
                  type="button"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  I accept
                </button>
                <button
                  type="button"
                  class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="pl-5 py-6 text-center">
          <TailwindPagination
            :data="users"
            :filters="filters"
            @pagination-change-page="(page) => getUsers(page, filters)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "@/Pages/Admin/Layout/Sidebar.vue";
import { TailwindPagination } from "laravel-vue-pagination";
import { ref, watchEffect, reactive, onMounted } from "vue";
import { createStore } from "vuex";
import { Link } from "@inertiajs/vue3";

const users = ref({ data: [] });
const searchEmail = ref(null);
const searchName = ref(null);
const searchCity = ref(null);

const selectedUser = ref(null);

const isModalOpen = ref(false);

const openModal = (user) => {
  selectedUser.value = user;
  isModalOpen.value = true;
};

const closeModal = () => {
  selectedUser.value = null;
  isModalOpen.value = false;
};

const handleOutsideClick = (event) => {
  if (!event.target.closest(".modal-content")) {
    closeModal();
  }
};

const filters = reactive({
  email: "",
  name: "",
  city: "",
});

const store = createStore({
  state: {
    filters: {
      email: "",
      name: "",
      city: "",
    },
  },
  mutations: {
    setFilters(state, filters) {
      state.filters = filters;
    },
  },
});

const getUsers = (page = 1, filters = store.state.filters) => {
  axios
    .get(`/api/users?page=${page}`, {
      params: filters,
    })
    .then((response) => {
      users.value = response.data.users;
    });
};

onMounted(() => {
  searchEmail.value = "";
  searchName.value = "";
  searchCity.value = "";
});

watchEffect(() => {
  filters.email = searchEmail.value;
  filters.name = searchName.value;
  filters.city = searchCity.value;
  store.commit("setFilters", filters);
  getUsers();
});
</script>
<style scoped>
.modal-test {
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 4px;
}

button {
  margin-top: 10px;
}
</style>
