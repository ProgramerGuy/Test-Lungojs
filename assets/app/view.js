App.View = (function(lng, app, undefined) {

    // var aside_results_markup = '<a href="#tweet_container" data-target="article" data-icon="items">{{results}}</a>';
    //var aside_results_markup = '<li class="list scrollable">{{results}}</li>';
    // Template for aside resut
    // lng.View.Template.create('aside_results_template', aside_results_markup);
    
    //  render aside results 
    //var render_aside = function(results){
    //var data = [{results:results}];

    //lng.View.Template.render('#options_aside', 'aside_results_template', data);

    //  }
    
    var tweet_template_markup = "<li data-icon='user'>\n\
            <img src='{{profile_image_url}}' />\
            {{tweet_author}} {{tweet_date}} {{tweet_touser}}<strong>{{tweet_text}} </strong> <small> {{tweet_url}}</small> </li>";
   
    // Template for tweets
    lng.View.Template.create('tweet_template', tweet_template_markup);
  
    //  render list & pulldown-to-refresh
    var render_list = function(tweets){
        lng.View.Template.List.create ({
            el : '#tweet_container',
            template: 'tweet_template',
            data: tweets
        });

        var markup_content = '<div id="pullDown"><span class="pullDownIcon"></span><span class="pullDownLabel">Arrastra hacia abajo para actualizar ...</span></div>';
        lng.View.Scroll.prepend('tweet_container', markup_content);
    
    }

    return{
        //render_aside:render_aside, 
        render_list:render_list 
        
    }

})(LUNGO, App);