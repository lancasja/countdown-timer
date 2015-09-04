(function() {

  var timer = countdown(
    // Set date to countdown to here
    new Date(2016, 0, 1),

    function(t) {
      var timeArray = [];
      var displayTimeArray = [];

      var pageTimer = document.querySelector('#pageTimer');
      var pageMonths = document.querySelector('#pageTimer .months');
      var pageDays = document.querySelector('#pageTimer .days');
      var pageHours = document.querySelector('#pageTimer .hours');
      var pageMinutes = document.querySelector('#pageTimer .minutes');

      var firstSplit = t.toString().split(',');
      var splitAnd = firstSplit[firstSplit.length - 1].split('and');

      for (var i = 0; i < firstSplit.length; i++) {
        var item = firstSplit[i];
        if (item.indexOf('and') < 0) {
          timeArray.push(item);
        }
      }

      displayTimeArray = timeArray.concat(splitAnd);

      // To get just the number, wrap value in parseInt()
      pageMonths.innerHTML = parseInt(displayTimeArray[0]);
      pageDays.innerHTML = parseInt(displayTimeArray[1]);
      pageHours.innerHTML = parseInt(displayTimeArray[2]);
      pageMinutes.innerHTML = parseInt(displayTimeArray[3]);
    },

    ~(countdown.WEEKS | countdown.SECONDS | countdown.MILLISECONDS)
  );

})();
