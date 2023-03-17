
<template>
  <div >
    <div>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand">Dashboard</a>        
        </div>
      </nav>
    </div>
    <div class="container-fluit text-center">
      <div class="row">
        <div id="menu" class="col-2">
          <div class="container">
            <div class="row">
              <h4>Opsiones</h4>
            </div>
            <div class="row">
              <router-link :to="{name:'Get'}" type="button" class="btn btn-outline-secondary">Get</router-link>
            </div>
            <div class="row">
              <router-link :to="{name:'insert'}" type="button" class="btn btn-outline-secondary">Insert</router-link>
            </div>
            <div class="row">
              <router-link :to="{name:'update'}" type="button" class="btn btn-outline-secondary">Update</router-link>
            </div>
            <div class="row">
              <router-link :to="{name:'delete'}" type="button" class="btn btn-outline-secondary">Delete</router-link>
            </div>
          </div>
        </div>
        <div id="procesos" class="col">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
button {
  margin: 10px;
}
#procesos {
  background-color: white;
  margin-left:10px;
  margin-right: 25px;
  padding: 3px 10px;
  border: rgb(182, 183, 184) 5px dashed;
 border-radius: 20px;
}
#menu {
  margin: 5px;
  border-radius: 20px;
}
.row{
  margin-top:8px;
  margin-bottom: 8px;
}
</style>