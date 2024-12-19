<script setup>
//import ref
import { ref, onMounted } from "vue";

//import router
import { useRouter, useRoute } from "vue-router";

//import api
import api from "../../api";

//init router
const router = useRouter();

//init route
const route = useRoute();

//define state
const Nama = ref("");
const errors = ref([]);

//onMounted
onMounted(async () => {
  //fetch detail data post by ID
  await api.get(`/api/kategoris/${route.params.id}`).then((response) => {
    //set response data to state
    Nama.value = response.data.data.data;
  });
});


//method "updatePost"
const updatePost = async () => {
  //init formData
  let formData = new FormData();

  //assign state value to formData
  formData.append("Nama", Nama.value);
  formData.append("_method", "PATCH");

  //store data with API
  await api
    .post(`/api/kategoris/${route.params.id}`, formData)
    .then(() => {
      //redirect
      router.push({ path: "/kategoris" });
    })
    .catch((error) => {
      //assign response error data to state "errors"
      errors.value = error.response.data;
    });
};
</script>

<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-12">
        <div class="card border-0 rounded shadow">
          <div class="card-body">
            <form @submit.prevent="updatePost()">
              <div class="mb-3">
                <label class="form-label fw-bold">Nama</label>
                <input type="text" class="form-control" v-model="Nama" placeholder="Nama Post" />
                <div v-if="errors.Nama" class="alert alert-danger mt-2">
                  <span>{{ errors.Nama[0] }}</span>
                </div>
              </div>
              <button type="submit" class="btn btn-md btn-primary rounded-sm shadow border-0">Update</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
