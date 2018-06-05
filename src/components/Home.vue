<template>
<v-container>
    <v-layout row wrap class="mb-2">
        <v-flex xs12 sm6 class="text-xs-center text-sm-right">
            <v-btn large router to="/meetups" class="primary">Explore Meetups</v-btn>
        </v-flex>
        <v-flex xs12 sm6 class="text-xs-center text-sm-left"> 
            <v-btn large router to="/meetups/new" class="primary">Organize Meetups</v-btn>
        </v-flex>
    </v-layout>

    <v-layout row wrap class="mt-2">
        <v-flex>
            <v-carousel>
                <v-carousel-item 
                v-for="meetup in meetups"
                :src="meetup.imageUrl"
                :key="meetup.id">
                    <div class="title">
                        {{ meetup.title }}
                    </div>
                </v-carousel-item>
            </v-carousel>
        </v-flex>
    </v-layout>

    <v-layout row wrap class="mt-2">
        <v-flex xs12 class="text-xs-center">
            <p>Join our awesome meetups!</p>
        </v-flex>
    </v-layout>

</v-container>
</template>

<script>
    export default {
        data () {
            return {
                meetups: [
                    { imageUrl: 'https://i2.wp.com/www.worldwanderista.com/wp-content/uploads/2018/01/One-day-in-Ljubljana-Slovenia.jpg?resize=715%2C400&ssl=1',
                     id: 'blablabla', title: 'Meetup in Ljubljana'},
                    { imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/12/f8/68/3d/big-bus-paris-hop-on.jpg',
                     id: 'blablabla2', title: 'Meetup in Paris'},
                ]
            }
        }
    }
</script>

<style scoped>
    .title {
        position: absolute;
        bottom: 50px;
        background: rgba(0, 0, 0, 0.5);
        color: white;
        font-size: 2em;
    }
</style>

