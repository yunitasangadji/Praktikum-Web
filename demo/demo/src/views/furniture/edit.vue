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
const Deskripsi = ref("");
const Harga = ref("");
const Image = ref("");
const errors = ref([]);

//onMounted
onMounted(async () => {
  //fetch detail data post by ID
  await api.get(`/api/furniture/${route.params.id}`).then((response) => {
    //set response data to state
    Deskripsi.value = response.data.data.Deskripsi;
    Harga.value = response.data.data.Harga;
  });
});

//method for handle file changes
const handleFileChange = (e) => {
  //assign file to state
  Image.value = e.target.files[0];
};

//method "updatePost"
const updatePost = async () => {
  //init formData
  let formData = new FormData();

  //assign state value to formData
  formData.append("Deskripsi", Deskripsi.value);
  formData.append("Harga", Harga.value);
  formData.append("Image", Image.value);
  formData.append("_method", "PATCH");

  //store data with API
  await api
    .post(`/api/furniture/${route.params.id}`, formData)
    .then(() => {
      //redirect
      router.push({ path: "/furniture" });
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
              <button type="submit" class="btn btn-md btn-primary rounded-sm shadow border-0">Update</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
