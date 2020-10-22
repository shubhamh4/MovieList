Vue.config.devtools = true
Vue.component('movie-detail',{
    
    props:['movie'],

    template:`
    <div>
        <div class="card" style="width: 100%;">
            <img class="card-img-top" v-bind:src="movie.Poster" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{movie.Title}}</h5>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#summary">
        Summary
      </button>
            </div>
        </div>
    </div>
    `
});

new Vue({
    el:"#movieapp",
    data:{
        searchKey:'',
        movieList:[]
    },
    methods:{

        searchMovies()
        {
            var url='http://www.omdbapi.com/?s='+this.searchKey+'&apikey=e0620bd4';
            fetch(url)
           .then(response=>response.json())
           .then(data=>{
               this.movieList=data;
           })
        }
    }
})

