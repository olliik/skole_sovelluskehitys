<template>
  <div class="mt-4">
    <div>
      <b-card no-body class="overflow-hidden">
        <b-row no-gutters>
          <b-col md="4">
            <b-card-img :src="data.Poster" class="rounded-0"></b-card-img>
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
              TODO: add to watchlist
              <b-icon icon="tv" style="width: 30px; height: 30px;"></b-icon>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieListItem",
  data() {
    return {
      movies: null,
      loading: true
    };
  },
  props: {
    data: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mt-4 {
    text-align: left;
}
</style>
