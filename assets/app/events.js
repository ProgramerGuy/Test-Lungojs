App.Events = (function(lng, app, undefined) {
    var makeSearch = function(){
        app.Services.getSearch(app.Data.getSearchTerm());
       
    }

    // makePullDown method. Calculates distance to top and container to make the pulldown.
    var _makePullDown = function(event){
       
    };


            
    lng.dom('#tweet_container').on('longTap', function(event){
        //console.log('longTap offsetTop:' + event.target.offsetTop);
        var pulldown_pos = lng.dom("#pullDown").offset();  
        var container_pos = lng.dom("#tweet_container").offset();
        var pulldown_offset_top = pulldown_pos.top;
        var container_top = container_pos.top;
        
        if(event.target.offsetTop < 100){
            
            lng.dom("#pullDown").toggleClass('flip');
            $$('.pullDownLabel').html('Suelta para actualizar ...');
             
            lng.dom('#tweet_container').on('touchend', function(event){
                //console.log('touchend offsetTop:' + event.target.offsetTop);
 
                if(event.target.offsetTop < 200){ 
                    lng.View.Scroll.init('tweet_container');
                    lng.dom("#pullDown").toggleClass('loading');
                    $$('.pullDownLabel').html('Cargando ...');
                    App.Data.setSearchTerm($$("#text_search_input").val());                 
                    makeSearch(); 
                }
                  
            });
            
        }
    });


    lng.dom('#search_button').tap(function() {
        if($$("#text_search_input").val() != ''){
            App.Data.setSearchTerm($$("#text_search_input").val());
            makeSearch();
        }else{
            return false;
        }
    })

    return {
        makeSearch:makeSearch,
    //  _makePullDown:_makePullDown
    }

})(LUNGO, App);