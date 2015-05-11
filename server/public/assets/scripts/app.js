var templateHTML;
var experience;

function getInfo (){
    $.ajax({
        url:'./assets/data/data.json',
        dataType: 'json',
        success: function(response){
            experience = response;
            addExperience();
        }
    });
}

function addExperience (){
    var el = $('#otherInfo');
    el.append(templateHTML);
    el.children().children('#title').append(experience.info.title);
    el.children().children('#extraOne').append(experience.info.extraOne);
    el.children().children('#extraTwo').append(experience.info.extraTwo);
    el.children().children('#extraThree').append(experience.info.extraThree);
}

$(document).ready(function(){
    $(".moreExperience").on('click', function(){
        if(!templateHTML){
            $.ajax({
                url: '/views/template.html',
                success: function(response) {
                    templateHTML = response;
                    getInfo();
                }
            });
        }
    });
});



