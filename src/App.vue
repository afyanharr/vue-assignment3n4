<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand text-warning" href="#">Krusty Crab Restaurant</a>
      <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon bg-light"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link text-light" :to="{ name: 'Home' }" exact>Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-light" :to="{name: 'Menu'}">Menu</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-light" :to="{name: 'Book'}">Book</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view/>
</template>

<style scoped>
.navbar {
  background-color: #0f182a;
}

</style>
