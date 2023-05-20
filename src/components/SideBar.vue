<script setup lang="ts">

</script>

<template>
    <!-- Sidebar -->
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

      <!-- Sidebar - Brand -->
      <RouterLink class="sidebar-brand d-flex align-items-center justify-content-center" to="main">
          <div><img class="logo" src="https://www.reaganwireless.com/wp-content/uploads/2019/12/reagan-wireless-lo-res-160-2.png"></div>
      </RouterLink>

      <!-- Heading -->
      <div class="sidebar-heading">
          Main
      </div>

      <!-- Nav Item - Pages Collapse Menu -->
      <li :class="$route.name == 'main' ? 'nav-item active' : 'nav-item'">
        <RouterLink class="nav-link collapsed" to="main">
          <i class="fas fa-tachometer-alt-average"></i>
          <span> Dashboard</span>
        </RouterLink>
      </li>

      <!-- Nav Item - Utilities Collapse Menu -->
      <li :class="$route.name == 'dashboard-page-2' ? 'nav-item active' : 'nav-item'"> 
          <RouterLink class="nav-link collapsed" to="dashboard-page-2">
              <i class="fas fa-table"></i>
              <span> Page two</span>
          </RouterLink>
      </li>

      <!-- Nav Item - Utilities Collapse Menu -->
      <li :class="$route.name == 'dashboard-page-3' ? 'nav-item active' : 'nav-item'"> 
          <RouterLink class="nav-link collapsed" to="dashboard-page-3">
            <i class="fas fa-users"></i>
              <span> Page three</span>
          </RouterLink>
      </li>

    </ul>
  <!-- End of Sidebar -->
</template>
