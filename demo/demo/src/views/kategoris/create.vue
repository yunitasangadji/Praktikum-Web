<script setup>
//import ref
import { ref } from "vue";

//import router
import { useRouter } from "vue-router";

//import api
import api from "../../api";

//init router
const router = useRouter();

//define state
const Nama = ref("");
const errors = ref([]);


//method "storePost"
const storePost = async () => {
  //init formData
  let formulirData = new FormData();

  //assign state value to formData
  formulirData.append("Nama", Nama.value);

  //store data with API
  await api
    .post("/api/kategoris", formulirData)
    .then(() => {
      //redirect
      router.push({ path: "/kategoris" });
    })
    .catch((error) => {
      //assign response error data to state "errors"
    });
};
</script>

<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-12">
        <div class="card border-0 rounded shadow">
          <div class="card-body">
            <form @submit.prevent="storePost()">
              <div class="mb-3">
                <label class="form-label fw-bold">Nama</label>
                <textarea class="form-control" v-model="Nama" rows="5" placeholder="Nama Post"></textarea>
                <div v-if="errors.Nama" class="alert alert-danger mt-2">
                  <span>{{ errors.Nama[0] }}</span>
                </div>
              </div>
              <button type="submit" class="btn btn-md btn-primary rounded-sm shadow border-0">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
