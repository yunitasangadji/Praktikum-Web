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
const Deskripsi = ref("");
const Harga = ref("");
const Image = ref("");
const errors = ref([]);

//method for handle file changes
const handleFileChange = (e) => {
  //assign file to state
  Image.value = e.target.files[0];
};

//method "storePost"
const storePost = async () => {
  //init formData
  let formData = new FormData();

  //assign state value to formData
  formData.append("Deskripsi", Deskripsi.value);
  formData.append("Harga", Harga.value);
  formData.append("Image", Image.value);
  //store data with API
  await api
    .post("/api/furniture", formData)
    .then(() => {
      //redirect
      router.push({ path: "/furniture" });
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
                <label class="form-label fw-bold">Image</label>
                <input type="file" class="form-control" @change="handleFileChange($event)" />
                <div v-if="errors.Image" class="alert alert-danger mt-2">
                  <span>{{ errors.Image[0] }}</span>
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label fw-bold">Harga</label>
                <input type="text" class="form-control" v-model="Harga" placeholder="Harga Post" />
                <div v-if="errors.Harga" class="alert alert-danger mt-2">
                  <span>{{ errors.Harga[0] }}</span>
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label fw-bold">Deskripsi</label>
                <textarea class="form-control" v-model="Deskripsi" rows="5" placeholder="Deskripsi Post"></textarea>
                <div v-if="errors.Deskripsi" class="alert alert-danger mt-2">
                  <span>{{ errors.Deskripsi[0] }}</span>
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
