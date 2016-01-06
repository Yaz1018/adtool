$(document).ready(function () {
    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);
});

function checkMedia() {
    var img = new Image();
    $('.imghead').css({
        'width': $('.row').width()
    });
    img.onload = function () {
        $('.imgheader').css({
            'min-height': $('.imghead').height() + 'px'
        });
    };
    img.src = 'img/headerimage.png';

}

//Function to the css rule
function checkSize() {
    if ($(".RKheader").css("font-size") == "2em") {
        checkMedia();
    } else {
        checkMedia();
    }
}

//display function to loop through object key:value pairs and apply them to the website
var objDisplay = function (obj) {
    $.each(obj, function (key, value) {
        //console.log(key + ": " + value);
        $('#' + key).html(value);
    });
};
//Header constructor
var Header = function (img, text) {
    this.headerimg = img;
    this.headerimgtext = text;
    this.display = function () {
        $('#headerimg').attr('src', this.headerimg);
        $('#headerimgtext').attr('src', this.headerimgtext);
        return this;
    };
};

//First column construct
var Column1 = function (
    c1title1,
    c1text1,
    c1title2,
    c1text2,
    c1ultext1,
    c1title3,
    c1ultext2) {
    this.c1title1 = c1title1;
    this.c1text1 = c1text1;
    this.c1title2 = c1title2;
    this.c1text2 = c1text2;
    this.c1ultext1 = c1ultext1;
    this.c1title3 = c1title3;
    this.c1ultext2 = c1ultext2;
    this.display = function () {
        objDisplay(this);
    };

    return this;
};

//build array for first ul
var c1ul1 = ["Brand awareness", "Intent to purchase", "Engagement"];

//build array for second ul
var c1ul2 = ["Compete as Individual or Team",
             "Sustained time spent with brand",
             "Multiple Touch point",
             "Expert Demo Targeting",
             "Interactive Media Support",
             "In - House Creative Services",
             "Comprehensive Custom Wrap Report"];

//for loop that will push array items to ul
c1ulFun = function (array) {
    var a = [];
    for (i = 0; i < array.length; i++) {
        a.push('<li>' + array[i] + '</l>')
    }
    return a;
};

//Second Column constructor
var Column2 = function (c2title1, c2img1, c2img2) {
    this.c2title1 = c2title1;
    this.c2img1 = c2img1;
    this.c2img2 = c2img2;
    this.display = function () {
        $('#c2title1').text(this.c2title1);
        $('#c2img1').attr('src', this.c2img1);
        $('#c2img2').attr('src', this.c2img2);

    };
};

//create header object
function onChange() {

    if ($("#productselect option:selected").text() === 'Challenges') {
        imgtexthead = "img/headerchallenge.png";
        $('.pdf').show();
    } else if ($("#productselect option:selected").text() === 'Sunday Runday') {
        imgtexthead = "img/headersw.png";
        $('.pdf').show();
    } else if ($("#productselect option:selected").text() === 'Workout Rewards') {
        imgtexthead = "img/headerwor.png";
        $('.pdf').show();
    } else if ($("#productselect option:selected").text() === 'Feed Ad') {
        imgtexthead = "img/headerfeed.png";
        $('.pdf').show();
    } else if ($("#productselect option:selected").text() === 'Runkeeper User Network') {
        imgtexthead = "img/headerrun.png";
        $('.pdf').show();
    } else {
        $('.pdf').hide();
        imgtexthead = "";
    }

    var challengeHeader = new Header("img/headerimage.png", imgtexthead);
    //create first column object
    var firstcolumn = new Column1("What is a Challenge?",
        "A branded, immersive fitness experience platform that provides multiple brand touchpoints while engaging users toward a fitness goal",
        "Why run a Challenge?",
        "You are looking to improve:",
        c1ulFun(c1ul1), //array function to push items to ul
        "Campaign Details",
        c1ulFun(c1ul2)); //array function to push items to ul

    var secondcolumn = new Column2("Community Demographics",
        "img/MenWomen.png",
        "img/millenials.png");

    //run header methods to display data

    challengeHeader.display();
    checkSize();

    //run first column methods to display data
    firstcolumn.display();

    secondcolumn.display();
}
onChange();
