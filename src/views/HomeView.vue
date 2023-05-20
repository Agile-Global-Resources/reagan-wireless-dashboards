<script lang="ts">

export default {
    data() {
        return {
            username: '',
            password: '',
            error: false
        }
    },
    methods: {
        login() {
            if (this.username === 'martin' && this.password === 'reagan') {
                this.$router.push('main')
            } else {
                this.error = true
            }
        }
    }
};

</script>

<template>
  <main>
    <div>

<div class="container">

    <!-- Outer Row -->
    <div class="row justify-content-center">
        <div class="col-xl-10 col-lg-12 col-md-9">
            <div class="card o-hidden border-0 shadow-lg my-5">
                <div class="card-body p-0">
                    <!-- Nested Row within Card Body -->
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="p-5">
                                <div class="text-center">
                                    <h1 class="h4 text-gray-900 mb-4">Reagan Wireless dashboards</h1>
                                </div>
                                <form class="user">
                                    <div class="form-group">
                                        <input type="username" class="form-control form-control-user"
                                            id="exampleInputEmail" aria-describedby="emailHelp"
                                            placeholder="Username" v-model="username">
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control form-control-user"
                                            id="exampleInputPassword" placeholder="Password" v-model="password">
                                    </div>

                                    <div class="text-center text-danger">
                                        <label v-if="error">Username or password is incorrect</label>
                                    </div>
                                    
                                    <div class="btn btn-primary btn-user btn-block" v-on:click="login">Login</div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>

</div>
</div>
  </main>
</template>
