<template>
    <div>
      <div class="card">
        <div class="card-header">Articulos</div>
  
        <div class="card_body">
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Proveedor</th>
                <th>Precio</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="articulo in articulos" :key="articulo.id">
                <td>{{ articulo.id }}</td>
                <td>{{ articulo.name }}</td>
                <td>{{ articulo.proveedor }}</td>
                <td>{{ articulo.precio }}</td>
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                    |<button
                      type="button"
                      v-on:click="borrarArticulo(articulo.id)"
                      class="btn btn-danger"
                    >
                      Eliminar</button
                    >|
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      articulos: [],
    };
  },
  created: function () {
    this.consultarArticulos();
  },
  methods: {
    consultarArticulos() {
      axios.get("https://localhost:7053/articulos").then((result) => {
        console.log(result.data);
        this.articulos = result.data;
      });
    },

    borrarArticulo(id) {
      console.log(id);

      axios.delete("https://localhost:7053/articulos/borrar/" + id);

      window.location.href = "Listar";
    },
  },
};
</script>