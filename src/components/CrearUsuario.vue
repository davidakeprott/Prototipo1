<template>
    <div class="container">
      <div class="card">
        <div class="card-header">Agregar Articulo</div>
        <div class="card-body">
          <form v-on:submit.prevent="agregarRegistro">
            <div class="form-group">
              <label for="">Nombre:</label>
              <input
                type="text"
                class="form-control"
                name="nombre"
                v-model="articulo.name"
                aria-describedby="helpId"
                id="nombre"
                placeholder="Nombre"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el nombre del articulo</small
              >
            </div>
            <div class="form-group">
              <label for="">Proveedor:</label>
              <input
                type="text"
                class="form-control"
                name="nombre"
                id="nombre"
                v-model="articulo.proveedor"
                aria-describedby="helpId"
                placeholder="Proveedor"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el nombre del proveedor</small
              >
            </div>
            <div class="form-group">
              <label for="">Precio:</label>
              <input
                type="text"
                class="form-control"
                name="precio"
                id="precio"
                v-model="articulo.precio"
                aria-describedby="helpId"
                placeholder="Precio"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el precio del articulo</small
              >
            </div>
  
            <br />
  
            <div class="btn-group" role="group">
              |<button type="submit" class="btn btn-success">Agregar</button>|
              |<router-link :to="{ name: 'listar' }" class="btn btn-danger"
                >Cancelar</router-link
              >|
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    data() {
      return {
        articulo: {},
      };
    },
  
    methods: {
      agregarRegistro() {
        console.log(this.articulo);
  
        var datosEnviar = {
          name: this.articulo.name,
          proveedor: this.articulo.proveedor,
          precio: this.articulo.precio,
        };
  
        axios
          .post("https://localhost:7053/articulos", datosEnviar)
          .then((result) => {
            console.log(result);
            window.location.href = "Listar";
          });
      },
    },
  };
  </script>