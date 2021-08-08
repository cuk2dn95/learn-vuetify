<template>
  <v-card class="overflow-hidden" tile>
    <v-app-bar class="d-none d-md-block" color="rgba(141,43,50)">
      <v-container>
        <v-row no-glutters align-center justify-space-around>
          <v-col v-for="menu in menus" :key="menu.content">
            <v-hover v-slot="{ hover }">
              <div
                class="d-flex"
                style="align-items: center"
                :style="
                  hover
                    ? `background-color: white`
                    : `background-color: rgba(141,43,50)`
                "
              >
                <v-icon :color="hover ? `rgba(141,43,50)` : `white`">{{
                  menu.icon
                }}</v-icon>
                <p
                  :style="hover ? `color: rgba(141,43,50);` : `color: white;`"
                  class="my-auto ml-2"
                >
                  {{ menu.content }}
                </p>
              </div>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </v-card>
</template>


<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      menus: [
        {
          icon: "mdi-cup",
          content: "Drink's menu",
        },
        {
          icon: "mdi-new-box",
          content: "What's new",
        },
        {
          icon: "mdi-bottle-soda",
          content: "Big & miniatures",
        },
        {
          icon: "mdi-gift",
          content: "Gift & accessories",
        },
        {
          icon: "mdi-star",
          content: "Favourite brands",
        },
        {
          icon: "mdi-sale",
          content: "Sales & offers",
        },
      ],
    };
  },
});
</script>


<style lang="scss" scoped>
</style>