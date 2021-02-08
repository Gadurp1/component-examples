<template>
  <v-app>
    <v-row class="mt-10">
      <v-col class="text-center">
        <v-icon class="font-xl">mdi-check</v-icon>
        <blockquote class="blockquote">
         
          <footer>
            <small>
              <em>&mdash;Thanks for Your Reservation</em>
            </small>
          </footer>
        </blockquote>
        <v-btn color="primary" @click="$router.push('/')">
          Back to Reservations
        </v-btn>
      </v-col>
    </v-row>
  </v-app>
</template>
