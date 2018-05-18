<template>
  <div id="app">
  <div style="margin-top:40px" class="container">
  <div class="text-left">
  <flash-message class="myCustomClass"></flash-message>
  </div>
  </div>
  <div class="formulaire">      
  <div class="panel panel-default"> 
      <div class="panel-heading">
          <div class="text-center">
              <h1>
                formulaire
              </h1>
            </div>
      </div>
    <form class=" was-validated form-signin panel-body"  @submit.prevent="onSubmit">
    <div class="form-label-group" :class="{error: errors.has('username')}">
      <div class="text-left">
      <label>Username</label>
      </div>
      <input type="text" name="username" autofocus class="form-control" placeholder="Username" v-validate="'required'" v-model="username">
      <div class="text-left">
      <div class="alert alert-danger" v-if="errors.has('username')">{{errors.first('username')}}</div>
      </div>
    </div>
    <div class="form-label-group" :class="{error: errors.has('email')}">
      <div class="text-left">
      <label>Email</label>
      </div>
      <input type="email" name="email"   class="form-control" placeholder="Email" v-validate="'required|email'" v-model="email">
      <div class="text-left">
      <div class="alert alert-danger" v-if="errors.has('email')">{{errors.first('email')}}</div>
      </div>
    </div>
    <div class="form-label-group" :class="{error: errors.has('password')}">
      <div class="text-left">
      <label>password</label>
      </div>
      <input type="password" name="password" autofocus  class="form-control" placeholder="password" v-validate="'required|min:6'" v-model="password">
      <div class="text-left">
      <div class="alert alert-danger" v-if="errors.has('password')">{{errors.first('password')}}</div>
      </div>
    </div>
    <div class="text-left">
      <label>Select Photo</label>
      </div>
    <div class="custom-file form-label-group">
    <input  type="file" class="custom-file-input" id="validatedCustomFile" accept="image/*" 
               name="myFile" @change="onFileChanged" v-validate="'required'">
              <label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
              <div class="invalid-feedback">Photo not Select</div>
    </div>
    <button type="submit" :disabled="errors.any()||(username==''||email==''||password=='')" class="btn btn-lg btn-primary btn-block">Send</button>
  </form>
  </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
require('vue-flash-message/dist/vue-flash-message.min.css');
export default {
  name: 'app',
  data() {
    return {
      email: '',
      username:'',
      password:'',
      image:''
    }
  },
  methods: {
     onFileChanged (event) {
     this.image= event.target.files[0]
     console.log(this.image)
  },
    onSubmit() {
      this.$validator.validateAll()
      
      if (!this.errors.any()) {
        const formData = new FormData()
   formData.append("email", this.email);
    formData.append("password",this.password);
    formData.append("username", this.username);
    formData.append("image", this.image,this.image.name);
        axios.post(`http://localhost:8000/api/trello`, {
      body:formData
    },
  )
    .then(response => {
      console.log("data sended",response)
     this.flash('data sended', 'success', {
  timeout: 2000,
});
    })
    .catch(e => {
       console.log("error",e)
       this.flash('Validation failed', 'error', {
  timeout: 2000,
});
    })
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.form-signin {
    width: 100%;
    max-width: 420px;
    padding: 15px;
    margin: 0 auto;
}
.form-label-group{
    margin-bottom: 10px;
}
.formulaire{
    padding:80px;
    min-height:100vh;
    width: auto;
    height: auto;
}

.panel{
    background: white;
    border-radius: 1%;
    max-width: 440px;
    margin: 0 auto;
    padding-top: 20px;
    opacity: 0.85;
    filter: Alpha(opacity=85)
}
</style>
