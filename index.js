(function(){
  var yes,
      no,
      yesImg,
      noImg,
      i;
  function rand () {
    return Math.floor(Math.random() * 2);
  }

  function randomSize () {
    var lo = 190;
    var hi = 210;
    return Math.floor(Math.random() * (hi-lo)) + lo;
  }

  function src (didFail) {
    var w = randomSize();
    var h = randomSize();
    parts = ["http://placecage.com"];

    if (didFail) {
      parts.push("c")
    }
    parts.push(w)
    parts.push(h)
    return parts.join('/')
  }

  window.src = src

  function hideAll() {
    yes.hide();
    no.hide();
    loader.hide();
  }

  function showYes() {
    hideAll();
    yesImg.attr('src', src(false));
    loader.show();
    setTimeout( function() {
      showResult(yes);
    }, 1500 );
  }

  function showNo() {
    hideAll();
    noImg.attr('src', src(true));
    loader.show();
    setTimeout( function() {
      showResult(no);
    }, 1500 );
  }

  function showResult(div) {
    loader.hide();
    div.show();
  }


  $(document).on('ready', function() {
    yes = $('#yes');
    no = $('#nope');
    yesImg = yes.find('img');
    noImg = no.find('img');
    loader = $('#loader');
    hideAll();

    $('#start').on('click', function(){
      if (rand() == 1) {
        showYes();
      } else {
        showNo();
      }
    });
  });

})();
