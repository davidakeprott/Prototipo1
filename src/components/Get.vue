<template>
  <div>
    <div class="row">
      <h3>Lista de datos</h3>
    </div>
    <div class="row">
      <div class="col"></div>
      <div class="col"></div>
      <div class="col">
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Buscar registro" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
    <div id="div-table" class="row">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Get'
}
</script>

<style scoped>
#div-table{
    padding: 10px;
}
</style>