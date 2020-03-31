<template>
  <div class="mt-4">
    <div>
      <b-card no-body class="overflow-hidden">
        <b-row no-gutters>
          <b-col md="4">
            <b-card-img :src="data.Poster"></b-card-img>
          </b-col>
          <b-col md="8">
            <b-card-body>
              <b-card-title class="text-muted">{{data.Title}} ({{data.Year}})</b-card-title>
              <b-card-text>{{data.Plot}}</b-card-text>
              <b-card-sub-title class="mb-2">Director</b-card-sub-title>
              <b-card-text>{{data.Director}}</b-card-text>
              <b-card-sub-title class="mb-2">Writer(s)</b-card-sub-title>
              <b-card-text>{{data.Writer}}</b-card-text>
              <div class="text-muted">IMDB: {{data.imdbRating}}/10 - Metascore: {{data.Metascore}}/100</div>
              
              
              <div v-if="authenticated">
                <b-icon icon="tv" style="width: 30px; height: 30px;" @click="handleNewWatchlistItem"></b-icon>
              

              <!-- MODAL -->
              <div>
                <b-button v-b-modal="data.imdbID">Write a review</b-button>

                <b-modal :id="data.imdbID" :title="data.Title">
                  <p class="my-4">Your review:</p>
                  <b-form-textarea
                    id="textarea-rows"
                    v-model="review"
                    rows="8"
                  ></b-form-textarea>
                  <template v-slot:modal-footer>
                  <div class="w-100">
                    
                    <p class="float-left">Rating: <b-form-input v-model="rating"></b-form-input> / 10</p>
                    <b-button
                      variant="primary"
                      size="sm"
                      class="float-right"
                      @click="handleNewReview"
                    >
                      Save
                    </b-button>
                  </div>
                </template>                
                </b-modal>
              </div>
              <!-- MODAL END -->
              </div><!-- end if auth -->
              
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>

<script>
import {authState} from '../auth.js';
import reviewService from '../helpers/reviewService.js';
import watchlistService from '../helpers/watchlistService.js';

export default {
  name: "MovieListItem",
  data() {
    return {
      movies: null,
      loading: true,
      review: null,
      rating: null,
    };
  },
  computed: {
    authenticated() {
      return authState.isAuthenticated;
    },
  },
  props: {
    data: Object
  },
  methods: {
    async handleNewReview() {
      let newReview =  {
        createdBy: authState.id,
        movie: this.data._id,
        review: this.review,
        rating: this.rating,
      }
      let res = await reviewService.PostReview(newReview);
      console.log(res);
    },
    async handleNewWatchlistItem() {
      let newItem =  {
        createdBy: authState.id,
        movie: this.data._id,
        completed: false,
      }
      let res = await watchlistService.AddItem(newItem);
      console.log(res);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mt-4 {
    text-align: left;
}
</style>
