<template>
  <v-app>
    
      <!-- <v-app-bar  color="#05BE87">
        <v-container>
          <v-row>
            <v-col sm="9">
              <v-text-field variant="solo-filled" hide-details ><v-icon icon="mdi-magnify"></v-icon></v-text-field>
            </v-col>
            <v-col sm="3">
              
            </v-col>
          </v-row>
        </v-container>
    </v-app-bar> -->



    <!-- <v-toolbar class="main-bar" :height="toolberHeight">
      <v-container>
          <v-row>
            <v-col :sm="searchBarWidth">
              <v-text-field variant="solo-filled" hide-details ><v-icon icon="mdi-magnify"></v-icon></v-text-field>
            </v-col>
            
          </v-row>
        </v-container>
    </v-toolbar> -->
    
    <v-container>
      <v-row>
        <v-col cols="6" lg="2" md="4" sm="4" xs="6" :class="cardClass">
          <v-card href="https://s.shopee.co.th/3q442ue7Wz">
             <img src="https://down-th.img.susercontent.com/file/th-11134207-7r98p-lyx8vfong4h5c5" class="vuetify-img">
            <v-card-title>WLMouse Beast X 8K</v-card-title>
          </v-card>
        </v-col>
        <v-col cols="6" lg="2" md="4" sm="4" xs="6" :class="cardClass">
          <v-card href="https://s.shopee.co.th/9UiQnJ9oC8">
            <img src="https://down-th.img.susercontent.com/file/th-11134207-7r98o-lvyae871dwpb8d" class="vuetify-img">
            <v-card-title>WLMouse Beast X Mini</v-card-title>
          </v-card>
        </v-col><v-col cols="6" lg="2" md="4" sm="4" xs="6" :class="cardClass">
          <v-card href="https://s.shopee.co.th/3q442okbHS">
            <img src="https://down-th.img.susercontent.com/file/th-11134207-7r98y-lwr4zwz59ei811" class="vuetify-img">
            <v-card-title>WLMouse Beast X Max</v-card-title>
          </v-card>
        </v-col><v-col cols="6" lg="2" md="4" sm="4" xs="6" :class="cardClass">
          <v-card href="https://s.shopee.co.th/20cPrIZ4x7">
            <img src="https://down-th.img.susercontent.com/file/e0984db9f6816415627b5ea30afc4b45" class="vuetify-img">
            <v-card-title>UGREEN USB3.0 Switch Selector 4Port 2 Computers</v-card-title>
          </v-card>
        </v-col><v-col cols="6" lg="2" md="4" sm="4" xs="6" :class="cardClass">
          <v-card href="https://s.shopee.co.th/4VJkplXKXp">
            <img src="https://down-th.img.susercontent.com/file/th-11134207-7qul6-lf3p40ff8dm57e" class="vuetify-img">
            <v-card-title>SSD HIKSEMI FUTURE</v-card-title>
          </v-card>
        </v-col><v-col cols="6" lg="2" md="4" sm="4" xs="6" :class="cardClass">
          <v-card href="https://s.shopee.co.th/8zmABt6ymS">
            <img src="https://down-th.img.susercontent.com/file/th-11134207-7r98x-lsqw280fhnqme0" class="vuetify-img">
            <v-card-title>MasterBox TD500 MESH V2</v-card-title>
          </v-card>
        </v-col><v-col cols="6" lg="2" md="4" sm="4" xs="6" :class="cardClass">
          <v-card href="https://s.shopee.co.th/5pp8PssCNn">
            <img src="https://down-th.img.susercontent.com/file/38c65709f5b0d9d66538eac1ab09ddfe" class="vuetify-img">
            <v-card-title>ZOMO PLUS Silver Spider Aluminium Keycap</v-card-title>
          </v-card>
        </v-col><v-col cols="6" lg="2" md="4" sm="4" xs="6" :class="cardClass">
          <v-card href="https://s.shopee.co.th/2Avq2xojxX">
            <img src="https://down-th.img.susercontent.com/file/sg-11134201-22120-vwchv5zih7kv6b" class="vuetify-img">
            <v-card-title>Fonken อะแดปเตอร์แม่เหล็ก 100W USB C 24Pins Type C QC 4.0</v-card-title>
          </v-card>
        </v-col>
        
        
        
        
        
      </v-row>
    </v-container>
    
  </v-app>
</template>

<script setup>
  import { computed } from 'vue'
  import { useDisplay } from 'vuetify'

  const { name } = useDisplay()

  const toolberHeight = computed(() => {
    // name is reactive and
    // must use .value
    switch (name.value) {
      case 'xs': return 80
      case 'sm': return 80
      case 'md': return 150
      case 'lg': return 150
      case 'xl': return 150
      case 'xxl': return 150
    }

    return undefined
  })


  const searchBarWidth = computed(()=>{
    switch (name.value) {
      case 'xs': return 12
      case 'sm': return 9
      case 'md': return 9
      case 'lg': return 9
      case 'xl': return 9
      case 'xxl': return 9
    }

    return undefined
  })

  const cardClass = computed(()=>{
    switch (name.value) {
      case 'xs': return "pa-1"
      case 'sm': return "pa-1"
    }

    return "pa-2"
  })
</script>

<style scoped>
.main-bar{
  background-color: #05BE87;

}
.vuetify-img {
    display: block;
    width: 100%; /* Adjust width according to your layout */
    height: auto;
    object-fit: cover; /* Maintain aspect ratio and cover the container */
    border-radius: 4px; /* Similar to Vuetify's border radius */
  }
</style>