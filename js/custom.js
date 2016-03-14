
$(function (){

    wowobj = new WOW();
    wowobj.init();


    $(window).scroll(function(e){

        stop = Math.round($(window).scrollTop());
        if (stop > 50) {
            $('.navbar').css('background-color', 'rgba(255,255,255,0.6)');
            $('.navbar').css('background', 'rgba(255,255,255,0.6)');
        }else if(stop <= 50 && $(window).width()>768){
            $('.navbar').css('background-color', 'transparent');
            $('.navbar').css('background', 'transparent');
        }

    });

    if($(window).width() < 768){
        $('.timeline-img').removeClass('wow slideInRight');
        $('.timeline-content').removeClass('wow slideInRight');
    }

    // remove wow effect for mobile devices
    if($(window).width() < 768){
        $('.navbar').css('background-color', 'rgba(255,255,255,0.6)');
        $('.navbar').css('background', 'rgba(255,255,255,0.6)');
    }


    $(window).resize(function(e){
        if($(window).width() < 768){
            $('.navbar').css('background-color', 'rgba(255,255,255,0.6)');
            $('.navbar').css('background', 'rgba(255,255,255,0.6)');
        }
    });

    // automatically put the menu back when clollapse is on
    $('.navbar-collapse a').click(function(e){
        $(".navbar-collapse").collapse('hide');
    });

    $(".navbar ul li a[href^='#']").click(function(e) {
       // prevent default anchor click behavior

       // console.log("clicked");
       e.preventDefault();
       // animate
       $('html, body').animate({
           scrollTop: $(this.hash).offset().top}, 
           300, function(){
           // when done, add hash to url
           // (default click behaviour)
            window.location.hash = this.hash;
         });

       // console.log($('.nav-collapse').collapse);

    });

    var pubYearFilter = 'sortByAllYears';
    var pubTypeFilter = 'sortByAllTypes';
    initListTick(pubYearFilter);
    initListTick(pubTypeFilter);
    filterPublications(pubYearFilter,pubTypeFilter);

    // filter click handler
    $('.pub-filter-menu li a').click(function(e){
        e.preventDefault();

        if($(this).attr('filtertype') == 'year'){
            updateListTick(pubYearFilter, $(this).attr('href'));
            pubYearFilter = $(this).attr('href');
        }else{
            updateListTick(pubTypeFilter, $(this).attr('href'));
            pubTypeFilter = $(this).attr('href');
        }

        filterPublications(pubYearFilter,pubTypeFilter);
    });

    function filterPublications(pubYearFilter, pubTypeFilter){

        $('.pubinfo').each(function(){

            if(pubYearFilter == 'sortByAllYears' &&
               pubTypeFilter == 'sortByAllTypes'){
                $(this).slideDown('slow');
            }else if(pubYearFilter == 'sortByAllYears'){
                if($(this).attr('pubtype') == pubTypeFilter)
                    $(this).slideDown('slow');
                else
                    $(this).slideUp('slow');

            }else if(pubTypeFilter == 'sortByAllTypes'){

                if($(this).attr('pubyear') == pubYearFilter)
                    $(this).slideDown('slow');
                else
                    $(this).slideUp('slow');
            }else{
                if($(this).attr('pubyear') == pubYearFilter &&
                   $(this).attr('pubtype') == pubTypeFilter)
                    $(this).slideDown('slow');
                else
                    $(this).slideUp('slow');
            }
        });
    }

    function initListTick(pubFilter){
        $('.pub-filter-menu li a').each(function(){
            if($(this).attr('href') == pubFilter)
                $(this).prepend('+');
        });
    }

    function updateListTick(pubFilter, newFilter){
        $('.pub-filter-menu li a').each(function(){
            if($(this).attr('href') == pubFilter){
                var content = $(this).html();
                $(this).html(content.slice(1));
            }

            if($(this).attr('href') == newFilter){
                $(this).prepend('+');
            }

        });
    }

});


