<script setup lang="ts">
    import SideBar from '@/components/SideBar.vue'; 
    import TopBar from '@/components/TopBar.vue';
</script>

<template>
<!-- Page Wrapper -->
<div id="wrapper">

    <SideBar></SideBar>

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">

        <!-- Main Content -->
        <div id="content">

            <TopBar></TopBar>

            <!-- Begin Page Content -->
            <div class="container-fluid">
                <!-- Content Row -->
                <div class="row">
                  <iframe title="Dashboard Academy" width="100%" height="800" src="https://app.powerbi.com/reportEmbed?reportId=26e0071b-73c3-4a66-8e48-8fc6771be4fb&autoAuth=true&ctid=421d196a-a7d8-417b-92a0-d2711a1a10b7" frameborder="0" allowFullScreen="true"></iframe>
                </div>
            </div>
            <!-- /.container-fluid -->

        </div>
        <!-- End of Main Content -->
    </div>
    <!-- End of Content Wrapper -->

</div>

</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
