"use strict";

$(document).ready(function (e) {
  $('.clipboard').tooltip({
    'title': 'Copied!',
    'placement': 'top',
    'trigger': 'click'
  });
  $('.clipboard').on('shown.bs.tooltip', function () {
    setTimeout(function () {
      $('.clipboard').tooltip('hide');
    }, 2000);
  });
  $('[data-toggle="tooltip"]').tooltip(function () {
    container: 'body';
  });
  new ClipboardJS('.clipboard');
});
"use strict";

$(document).ready(function (e) {
  // Search box
  var searchDocument = $(".document-search");

  if (searchDocument.length > 0) {
    $(searchDocument).autoComplete({
      source: function source(term, response) {
        $.getJSON('/test/', {
          q: term
        }, function (data) {
          response(data);
        });
      } // renderItem: function(item, search) {
      //     search = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      //     var re = new RegExp("(" + search.split(' ').join('|') + ")", "gi");
      //     return '<div class="autocomplete-suggestion" data-val="' + item + '">' + item.replace(re, "<b>$1</b>") + '</div>';
      // }

    });
  }
});
"use strict";

$(document).ready(function (e) {
  // Fancy Dropdown
  $(".msdd").msDropdown({
    mainCSS: "dd fortinetblue",
    on: {
      change: function change(data, ui) {
        var val = data.value;
        if (val != "") window.location = val;
      }
    }
  });
  $(".msdd10").msDropdown({
    mainCSS: "dd fortinetblue",
    visibleRows: 10,
    on: {
      change: function change(data, ui) {
        var val = data.value;
        if (val != "") window.location = val;
      }
    }
  });
  $(".video").modalVideo({
    title: "TEST"
  });
  $('#filter_products').keyup(function () {
    var keyword = $(this).val();
    $('.all-products .product').each(function () {
      if ($(this).find('span').html().toLowerCase().indexOf(keyword.toLowerCase()) >= 0) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });

    if (keyword == '') {
      $('.all-products .product').show();
    }
  });
});
"use strict";

$(document).ready(function (e) {
  // apply table styles
  $(".column_right table").toggleClass("table", true).toggleClass("table-striped", true).toggleClass("table-bordered", true).toggleClass("table-sm", true);
  $(".column_right thead").toggleClass("thead-dark");
});
"use strict";

$(document).ready(function (e) {
  //mobile menu
  $('#mobile_menu_btn').click(function () {
    $('#mobile_menu').toggleClass('show');
    $('body').toggleClass('offcanvas show');
    $('.side-menu').toggleClass('offcanvas');
  }); //side menu

  $('#side_menu_main_btn').click(function () {
    var sideMenuItem = $('.side-menu-item ');
    sideMenuItem.toggleClass('show');

    if (sideMenuItem.hasClass('show')) {
      $(this).html('<i class="fas fa-minus"></i>');
    } else {
      $(this).html('<i class="fas fa-plus"></i>');
    }
  });
});
"use strict";

$(document).ready(function (e) {
  /*
   * Replace all SVG images with inline SVG
   */
  jQuery('img.svg').each(function () {
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    jQuery.get(imgURL, function (data) {
      // Get the SVG tag, ignore the rest
      var $svg = jQuery(data).find('svg'); // Add replaced image's ID to the new SVG

      if (typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
      } // Add replaced image's classes to the new SVG


      if (typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass + ' replaced-svg');
      } // Remove any invalid XML tags as per http://validator.w3.org


      $svg = $svg.removeAttr('xmlns:a'); // Check if the viewport is set, if the viewport is not set the SVG wont't scale.

      if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
      } // Replace image with new SVG


      $img.replaceWith($svg);
    }, 'xml');
  });
});
"use strict";

$(document).ready(function (e) {
  $("li.toc ul").hide();
  $("li.toc").on("click", function (a) {
    a.stopPropagation();
    var target = a.target;
    var jtarget = $(a.target); // this allows clicking a nested item (for styling purposes) to still react like it should

    if ("SPAN" === target.nodeName) {
      jtarget = jtarget.parent("li");
    }

    if ("LI" === jtarget.prop('nodeName') && (jtarget.hasClass("closed") || jtarget.hasClass("opened")) && jtarget.toggleClass("closed opened")) {
      jtarget.hasClass("closed") && jtarget.children("ul").hide();
      jtarget.hasClass("opened") && jtarget.children("ul").show();
    }
  });
  $("li.toc.selected").each(function () {
    $(this).parents("li.toc.closed").each(function () {
      $(this).toggleClass("closed opened"); // $(this).toggleClass("");

      $(this).children("ul").show();
    });
    $(this).toggleClass("closed opened").children("ul").show();
  });
  $(".column_left strong .toc").click(function () {
    var autoScrollElement = $(this);
    $(".column_left").animate({
      scrollTop: 0
    }, 0);
    setTimeout(function () {
      //do something special
      $(".column_left").animate({
        scrollTop: autoScrollElement.offset().top - $(".ftnt-multi-col").offset().top
      }, 0);
    }, 500);
  });
  $(document).ready(function () {
    var elId = location.hash.replace('#', '');
    $(".column_center").animate({
      scrollTop: $("a[name='" + elId + "']").offset().top - $(".ftnt-multi-col").offset().top
    }, 0);
  });
  setTimeout(function () {
    //do something special
    var autoScrollElement = $(".column_left strong .toc");
    var pathname = window.location.href;
    var origin = window.location.origin;

    if (autoScrollElement.length > 0) {
      autoScrollElement.each(function (index, elem) {
        var href_link = $(elem).attr('href');

        if (origin + href_link == pathname) {
          $(".column_left").animate({
            scrollTop: $(elem).offset().top - $(".ftnt-multi-col").offset().top
          }, 0);
          return;
        }
      }); // $(".column_left").animate({
      //     scrollTop: $(autoScrollElement).offset().top - $(".ftnt-multi-col").offset().top
      // }, 0);
    }
  }, 500);
  setTimeout(function () {
    //do something special
    var autoScrollElement = $("#mobile_menu strong .toc");

    if (autoScrollElement.length > 0) {
      $("#mobile_menu").animate({
        scrollTop: $(autoScrollElement).offset().top - $(".ftnt-multi-col").offset().top - 30
      }, 0);
    }
  }, 500);
});
"use strict";

$(document).ready(function (e) {
  var win = $(window); // Triple Column Layout Global Functions

  var tripleCol = $(".ftnt-multi-col");

  if (tripleCol.length > 0) {
    var resizeColumns = function resizeColumns() {
      // goal: eliminate enough pixels with precision to remove vertical scrollbar from window
      var padding = parseInt(tripleCol.css("margin-bottom").replace('px', '')) * 2; // apply height calculations

      tripleCol.css('height', win.height() - tripleCol.position().top - padding);
    };

    win.resize(function () {
      resizeColumns();
    });
    resizeColumns();
  }
});
"use strict";

$(document).ready(function (e) {
  // Typeahead Search system
  var elSuggestions = $(".document-search .suggestions");
  var lastXhrRequest = null;

  if (elSuggestions.length) {
    var context_document = elSuggestions.data("document");
    var elSearchInput = $(".document-search input");
    elSearchInput.on('focus', function (e) {
      elSuggestions.show();
    });
    elSearchInput.keyup(function (e) {
      var val = $(this).val().toLowerCase();
      var matchers = [];

      for (var l = val.length; l > 0; l--) {
        matchers.push(val.substr(0, l));
      }

      if (val.length > 2) {
        if (lastXhrRequest != null) {
          lastXhrRequest.abort();
        }

        lastXhrRequest = $.ajax({
          url: "/search/suggest/page?q=" + val + "&d=" + context_document,
          success: function success(_success) {
            // remove existing suggestions
            elSuggestions.children().each(function () {
              $(this).remove();
            });

            for (var i = 0; i < _success.s.length; i++) {
              var o = _success.s[i];
              var title = o.title;

              for (var m = 0; m < matchers.length; m++) {
                var strStart = title.toLowerCase().indexOf(matchers[m]);

                if (strStart >= 0) {
                  // put in end tag first
                  title = title.slice(0, strStart + matchers[m].length) + "</span>" + title.slice(strStart + matchers[m].length);
                  title = title.slice(0, strStart) + "<span class='match'>" + title.slice(strStart);
                  break;
                }
              }

              $("<div class=\"suggestion\"><a href=\"" + o.path + "\">" + title + "</a></div>").appendTo(elSuggestions);
            } // console.log("Success", success);

          }
        });
      }
    });
  }
});
"use strict";

$(document).ready(function (e) {
  //dropdown menu for selecting version
  $('.md-dropdown-version').on('show.bs.dropdown', function () {
    $('#dd_select_btn').html('<span>Select version</span> <i class="fas fa-angle-up"></i>');
  });
  $('.md-dropdown-version').on('hide.bs.dropdown', function () {
    $('#dd_select_btn').html('<span>Select version</span> <i class="fas fa-angle-down"></i>');
  }); //version selector
  // $('.product-section-single .version-item a').click(function (e) {
  //     e.preventDefault();
  //     var product_section = $(this).parents('.product-section');
  //     //remove all selected links
  //     product_section.find('.version-item a').removeClass('selected');
  //     $(this).addClass('selected');
  //
  //     var doc_version_id = $(this).data('version-target');
  //     product_section.find('.doc-version').hide();
  //
  //     //update link for h5 title
  //     var doc_version_href = $(doc_version_id + ' a').attr('href');
  //     $(this).parents('.product-section-single').find('h5 a').attr('href', doc_version_href);
  //
  //     $(doc_version_id).show();
  // });
  //

  $('.product-section-multiple .version-item a').click(function (e) {
    e.preventDefault();
    var product_section = $(this).parents('.product-section-multiple'); //remove all selected links

    product_section.find('.version-item a').removeClass('selected');
    $(this).addClass('selected');
    var doc_version_class = $(this).data('version-target');
    product_section.find('.product-section-title, .product-section-versions').css('display', 'none');
    product_section.find(doc_version_class).css('display', 'inline-block');
  }); //init version pre-selected

  $(document).ready(function () {
    $('.product-section-multiple .version-item a.selected').click();
  });
});
"use strict";

$(function () {
  $('#select_product').selectpicker();
  $('#select_product').change(function () {
    var product_id = $(this).val();

    if (vm_landing_page_path) {
      window.location.replace(vm_landing_page_path + "/" + product_id);
    }
  });

  function get_vm_page(product_id, version_family, type) {
    var result;

    if (vm_pages_path) {
      $.post(vm_pages_path, {
        "product_id": product_id,
        "version_family": version_family,
        "type": type
      }, function (data) {
        result = data;
        return result;
      });
    }
  }

  $('#vm2 .toggle-mobile').click(function () {
    var element = $(this);
    var vm_item = $(element).parents('.vm-item');
    vm_item.find('.version').toggle();
    vm_item.find('.vm-item-pages').toggle();
    $(element).removeClass('show');
    $(element).removeClass('hidden');

    if (vm_item.find('.version').is(":visible")) {
      $(element).addClass('show');
    } else {
      $(element).addClass('hidden');
    }
  });
  var vues = document.querySelectorAll(".vm-item");
  var each = Array.prototype.forEach;
  each.call(vues, function (el, index) {
    new Vue({
      el: el,
      delimiters: ['<{', '}>'],
      // props: ['doc_tag'],
      data: {
        version_family: null,
        doc_tag: null,
        vm_pages: []
      },
      mounted: function mounted() {
        this.doc_tag = this.$el.attributes['data-doc-tag'].value;
        this.version_family = $('#' + this.doc_tag + '_version option:first').val(); // temporary change default to 6.2 if latest it's 6.4

        if (this.version_family === "6.4") {
          this.version_family = "6.2";
        }

        this.get_vm_page();
      },
      watch: {
        version_family: function version_family() {
          this.get_vm_page();
        }
      },
      methods: {
        get_vm_page: function get_vm_page() {
          var self = this;

          if (vm_pages_path && product_slug) {
            $.post(vm_pages_path, {
              "product_slug": product_slug,
              "version_family": this.version_family,
              "type": this.doc_tag
            }, function (data) {
              self.vm_pages = data;
            });
          }
        }
      }
    });
  });
});
"use strict";

angular.module('docs', ['ngCookies', 'matchMedia', 'ngSanitize']).config(['$interpolateProvider', '$cookiesProvider', function ($interpolateProvider, $cookiesProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
}]) // Filters
.filter('reverse', function () {
  return function (items, apply) {
    if (!apply) {
      return items.slice();
    }

    return items.slice().reverse();
  };
});
;
'use strict';

angular.module('docs').controller('BSMIController', ['$scope', '$window', function ($scope, $window) {
  $scope.documents = [];
  $scope.search = {
    $: ""
  };

  $scope.setDocuments = function (json) {
    var parsed = JSON.parse(json); // for(var i = 0; i < parsed.length; i++) {
    //     parsed[i]['date_added'] = new Date(parsed[i]['date_added']);
    //     parsed[i]['date_updated'] = new Date(parsed[i]['date_updated']);
    // }

    $scope.documents = parsed;
  };

  $scope.viewDocument = function (document) {
    console.log(document.file);

    if (document.file) {
      $window.open(document.file, '_blank');
    }

    if (document.url) {
      $window.open(document.url, '_blank');
    }
  };
}]);
'use strict';

angular.module('docs').controller('FeedbackController', ['$scope', '$http', '$cookies', function ($scope, $http, $cookies) {
  var _token = null;
  var validated = false;
  $scope.error = null;
  $scope.success = false;
  $scope.showform = true;
  $scope.form = {
    name: "",
    email: "",
    feedback: ""
  };

  function triggerError(msg) {
    $scope.error = msg;
    setTimeout(function () {
      $scope.error = null;
      $scope.$apply();
    }, 7000);
  }

  function triggerSuccess() {
    $cookies.put('form_submit', true, {
      expires: moment(new Date()).add(1, 'm').toDate()
    });
    $scope.showform = false;
    $scope.success = true;
  }

  var sendFeedback = function sendFeedback() {
    $http.post("", {
      form: $scope.form
    }).then(function (sent) {
      triggerSuccess();
    }, function (error) {
      triggerError("An error happened sending the feedback, please try again.");
    });
  };

  $scope.send = function () {
    // validate here
    var elInvalids = $(".ng-invalid");

    if (elInvalids.length > 0) {
      var fields = [];

      for (var i = 0; i < elInvalids.length; i++) {
        var el = elInvalids[i];

        switch (el.id) {
          case 'name':
            fields.push('Invalid or Empty Name');
            break;

          case 'email':
            fields.push('Invalid or Empty Email');
            break;

          case 'feedback':
            fields.push('Invalid or Empty Feedback');
            break;
        }
      }

      triggerError("Before trying to submit again, please fix the following issues: " + fields.join(", "));
      return;
    } // this is done to prevent the need to re-validate on re-submission if there was an error.


    if (!validated) {
      // validate token
      $http.post("", {
        token: _token
      }).then(function () {
        validated = true;
        sendFeedback();
      }, function (not_valid) {
        if (!not_valid.success) {
          triggerError("Human verification failed, please reload and try again");
        }

        if (!not_valid.score) {
          triggerError("Human verification has decided you are most likely a bot. If this is incorrect, copy your feedback message, reload the page, and try once more.");
        }
      });
    } else {
      sendFeedback();
    }
  };

  if ($cookies.getObject("form_submit")) {
    // it's not time to let another one slip through
    $scope.showform = false;
    $scope.success = true;
  }

  $(".fbform").css("display", "block");
  grecaptcha.ready(function () {
    grecaptcha.execute('6LevapQUAAAAAMXPc8WhGWiuFFtx0tNYabWhCN4y', {
      action: 'homepage'
    }).then(function (token) {
      _token = token;
    });
  });
}]);
'use strict';

angular.module('docs').controller('HardwareSearchController', ['$scope', '$window', '$document', function ($scope, $window, $document) {
  $scope.hardware = [];
  $scope.raw_hardware = {};
  $scope.show_results = false;
  $scope.search = {
    title: ""
  };
  var that = $scope;

  $scope.init = function (init_hardware) {
    $scope.raw_hardware = init_hardware;
    refresh();
  };

  $scope.toggleShow = function (doShow) {
    $scope.show_results = doShow;
  };

  $scope.clear = function ($event) {
    $scope.show_results = false;
    $scope.search = {
      title: ""
    };
    $event.currentTarget.blur(); // require focus to retrigger showing dropdown
  }; // Detect if safe to hide once shown if clicked off-scope


  $document.on('click', function (e) {
    if (true === that.show_results) {
      var elAtts = e.target.attributes;
      var elClass = elAtts["class"];

      if (elClass) {
        var elClassVal = elClass.nodeValue;

        if (elClassVal.indexOf('hardware_') >= 0) {
          that.show_results = true;
        } else {
          that.show_results = false;
        }
      } else {
        that.show_results = false;
      }
    } // commit scope changes


    that.$apply();
  });

  function refresh() {
    $scope.hardware = $scope.raw_hardware;
  }
}]);
'use strict';

angular.module('docs').controller('HomeControllerV3', ['$scope', '$http', 'ProductService', function ($scope, $http, ProductService) {
  $scope.products = [];
  $scope.isOpen = false; // we use this one several times with no differences.

  var fortigateLong = {
    slug: 'fortigate-5000',
    as: 'FortiGate 5000',
    slug2: 'fortigate-6000',
    as2: '6000',
    slug3: 'fortigate-7000',
    as3: '7000'
  };
  var teleworking = {
    title: 'Tele-working',
    link: '/teleworking'
  };
  var sdwan = {
    title: 'Secure SD-WAN',
    link: '/sdwan'
  };
  var vm = {
    title: 'Virtualization',
    link: '/vm'
  };
  $scope.menuStructure = [{
    title: 'Security-driven Networking',
    icon: '../../../img/home3/menuicons/Security-driven Networking.svg',
    options: {
      columns: 1,
      bgColor: 'none',
      bgHoverColor: '#da291c'
    },
    children: [{
      title: 'Network Security',
      children: ['fortigate', fortigateLong, sdwan]
    }, {
      title: 'Secure Access',
      children: ['fortiap', 'fortiap-u', 'fortiswitch', 'fortiextender']
    }, {
      title: 'Related',
      children: ['fortimanager', 'fortianalyzer', 'fortigate-cloud', teleworking]
    }]
  }, {
    title: 'Dynamic Cloud Security',
    icon: '../../../img/home3/menuicons/Dynamic Cloud Security.svg',
    options: {
      columns: 1,
      bgColor: 'none',
      bgHoverColor: '#0d70cf'
    },
    children: [{
      title: 'Cloud and Data Center',
      children: [{
        link: '/vm',
        as: 'Virtualization'
      }, fortigateLong, 'forticwp', 'fortiadc', {
        slug: 'fortiadc-cloud',
        as: 'FortiGSLB'
      }]
    }, {
      title: 'Application Security',
      children: ['fortiweb', 'fortiweb-cloud', 'fortimail', 'fortimail-cloud', 'forticasb']
    }, {
      title: 'Related',
      children: ['fortimanager', 'fortianalyzer', 'fortiweb-manager', 'fortiadc-manager']
    }]
  }, {
    title: 'AI-Driven Security Operations',
    icon: '../../../img/home3/menuicons/AI-enabled Security.svg',
    options: {
      columns: 1,
      bgColor: 'none',
      bgHoverColor: '#6ad1e3'
    },
    children: [{
      title: 'SOC Platform',
      children: ['fortianalyzer', 'fortisiem', 'fortisoar']
    }, {
      title: 'Advanced Threat Protection',
      children: ['fortisandbox', 'fortideceptor', 'fortiisolator', 'fortiai', 'fortiinsight']
    }, {
      title: 'Endpoint Security',
      children: ['forticlient', 'fortiedr']
    }, {
      title: 'NOC Platforms',
      children: ['fortimanager']
    }]
  }, {
    title: 'Zero-Trust Network Access',
    icon: '../../../img/home3/menuicons/Zero Trust Network Access.svg',
    options: {
      columns: 1,
      bgColor: 'none',
      bgHoverColor: '#9064cb'
    },
    children: [{
      title: 'Endpoint Visibility & Control',
      children: [{
        slug: 'forticlient',
        as: 'Fabric Agent (FortiClient)'
      }, 'fortiguard-cloud', teleworking]
    }, {
      title: 'Network Access',
      children: ['fortinac', 'fortiauthenticator', 'fortitoken', 'fortitoken-cloud']
    }, {
      title: 'Voice & Video',
      children: [{
        slug: 'fortivoice-enterprise',
        as: 'FortiVoice'
      }, 'fortirecorder', {
        slug: 'forticamera',
        as: 'FortiCamera / Recorder'
      }]
    }]
  }, {
    title: 'Lookup',
    icon: '../../../img/home3/menuicons/lookup.svg',
    options: {
      columns: 4,
      bgColor: 'none',
      bgHoverColor: '#ffffff'
    },
    children: [// doing this second layer of nesting prevents a css bug where everything is underlined in mobile view. @todo by all means try to fix it ~k
    {
      children: ['avengine', 'fortiadc', 'fortiadc-e', 'fortiadc-m', 'fortiai', 'fortiap', 'fortiap-cloud', 'fortiap-u', 'fortianalyzer', 'fortiauthenticator', 'forticasb', 'forticwp', 'forticache', 'forticarrier', 'forticlient', 'forticonnect', 'forticontroller', 'forticonverter', 'fortiddos', 'fortideceptor', 'fortiedr', 'fortiexplorer', 'fortiextender', 'fortiextender-cloud', 'fortiadc-cloud', 'fortigate', 'fortigate-cloud', 'fortigate-5000', 'fortigate-6000', 'fortigate-7000', 'fortihypervisor', 'fortiinsight', 'fortiisolator', 'fortimail', 'fortimail-cloud', 'fortimanager', 'fortinac', 'fortiplanner', 'fortiportal', 'fortipresence', 'fortiproxy', 'fortirps', 'fortirecorder', 'fortisiem', 'fortisoar', 'fortisandbox', 'fortisandbox-cloud', 'fortiswitch', 'fortiswitch-cloud', 'fortitester', 'fortitoken', 'fortitoken-cloud', 'fortivoice-enterprise', 'fortivoice', 'fortiwan', 'fortiwan-controller', 'fortiweb', 'fortiweb-cloud', 'fortiweb-manager', 'ipsengine', 'wireless-controller']
    }, {
      title: 'Multi-Platform solutions',
      children: [sdwan, teleworking, vm]
    }]
  }];
  $scope.$watch(function () {
    return ProductService.products;
  }, function (newValue, oldValue) {
    if (newValue !== oldValue) {
      $scope.products = newValue;
    }
  });
}]);
"use strict";

angular.module('docs').controller('TestController', ['$scope', function ($scope) {
  $scope.test = "hello world";
}]);
'use strict';

angular.module('docs').directive('connectors', ['$http', function ($http) {
  return {
    restrict: 'E',
    transclude: true,
    template: "<div class=\"connectors\" ng-transclude></div>",
    link: function link($scope) {
      $scope.connectors = [];

      function refresh() {
        $http.get('/api/connectors').then(function (res) {
          $scope.connectors = res.data.connectors;
        });
      }

      refresh();
    }
  };
}]).directive('connector', [function () {
  return {
    restrict: 'E',
    scope: {
      connector: '='
    },
    replace: true,
    template: "\n            <a class=\"connector\" ng-href=\"/fortisoar/connectors/{{ connector.class }}\">\n                <div class=\"connector-icon connector-{{ connector.class }}\"></div>\n                <div class=\"connector-title\">{{ connector.title }}</div>\n            </a>"
  };
}]);
'use strict';

angular.module('docs').directive('escKey', function () {
  return function (scope, element, attrs) {
    element.bind('keydown keypress', function (event) {
      if (event.which === 27) {
        // 27 = esc key
        scope.$apply(function () {
          scope.$eval(attrs.escKey, {
            $event: event
          });
        });
        event.preventDefault();
      }
    });
  };
});
'use strict';

angular.module('docs').directive('ftntLogo', function () {
  return {
    restrict: 'E',
    scope: {
      color: '@?',
      fortColor: '@?'
    },
    template: "\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 619.8 71.1\" enable-background=\"new 0 0 619.8 71.1\">\n            <style type=\"text/css\">\n                .st0 {\n                    fill: none;\n                }\n\n                .st1 {\n                    fill: #F7BC60;\n                }\n\n                .st2 {\n                    fill: #FFFFFF;\n                }\n\n                .st3 {\n                    fill: [[ appliedTextColor ]];\n                }\n\n                .st4 {\n                    fill: [[ appliedFortColor ]];\n                }\n            </style>\n            <pattern x=\"68.3\" y=\"34\" width=\"69\" height=\"69\" patternUnits=\"userSpaceOnUse\" id=\"Unnamed_Pattern\" viewBox=\"2.1 -70.9 69 69\" overflow=\"visible\">\n                <path class=\"st0\" d=\"M2.1-70.9h69v69h-69z\"></path>\n                <path class=\"st1\" d=\"M2.1-70.9h69v69h-69z\"></path>\n                <path class=\"st2\" d=\"M61.8-71.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 .1 0 0M54.1-71.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 .1 0 0M46.4-71.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 .1 0 0M38.8-71.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 .1 0 0M31.1-71.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 .1 0 0M23.4-71.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 .1 0 0M15.8-71.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 .1 0 0M8.1-71.7v.2l-.2.2c-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.2c0 .1 0 .1 0 0M.4-71.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.2.4.6.6.7.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.2c0 .1 0 .1 0 0M69.4-71.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 .1 0 0M.5-71.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.2.3.6.6.7.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.2c0 .1 0 .1 0 0M69.4-64v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M61.8-64v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M54.1-64v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M46.5-64v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M38.8-64v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M31.1-64v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M23.5-64v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M15.8-64v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M8.2-64v.2c-.1.1-.2.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4 0 .2.2.4.3.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2.1.3.1.2.1.3-.1 0-.1 0 0 0M.5-64v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1 0 .3.1.4 0 .2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.2M69.4-56.3v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M61.8-56.3v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M54.1-56.3v.2c-.1 0-.1 0-.2.1s-.1.3-.1.4c-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M46.5-56.3v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M38.8-56.3v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M31.1-56.3v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M23.5-56.3v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M15.8-56.3v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M8.2-56.3v.2c-.1 0-.2 0-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c-.1 0-.1 0 0 0M.5-56.3v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M69.4-48.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M61.8-48.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M54.1-48.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M46.5-48.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M38.8-48.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M31.1-48.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M23.5-48.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M15.8-48.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M8.2-48.7v.2c-.1.1-.2.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.1.2.3.6.5.6s.4-.1.5-.1c.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2.1.3.1.2.1.3-.1 0-.1 0 0 0M.5-48.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.2.3.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M69.4-41v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M61.8-41v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M54.1-41v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M46.5-41v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M38.8-41v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M31.1-41v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M23.5-41v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M15.8-41v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M8.2-41v.2c-.1 0-.2 0-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c-.1 0-.1 0 0 0M.5-41v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5h.4c.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.2M69.4-33.4v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M61.8-33.4v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M54.1-33.4v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M46.5-33.4v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M38.8-33.4v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M31.1-33.4v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M23.5-33.4v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M15.8-33.4v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M8.2-33.4v.2c-.1.1-.2.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c-.1 0-.1 0 0 0M.5-33.4v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M69.4-25.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M61.8-25.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M54.1-25.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M46.5-25.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M38.8-25.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M31.1-25.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M23.5-25.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M15.8-25.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M8.2-25.7v.2c-.1.1-.2 0-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4 0 .1.2.3.3.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2.1.2.1.2.1.3-.1 0-.1 0 0 0M.5-25.7v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.3.5.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M69.4-18.1v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 0 0 0M61.8-18.1v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 0 0 0M54.1-18.1v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 0 0 0M46.5-18.1v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 0 0 0M38.8-18.1v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 0 0 0M31.1-18.1v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 0 0 0M23.5-18.1v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 0 0 0M15.8-18.1v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 0 0 0M8.2-18.1v.2c-.1.1-.2.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4 0 .2.2.4.3.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2.1.3.1.2.1.3-.1.1-.1 0 0 0M.5-18.1v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1 0 .3.1.4.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.1c0 .1 0 0 0 0M69.4-10.4v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M61.8-10.4v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.4.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.2M54.1-10.4v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M46.5-10.4v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M38.8-10.4v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.4.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.2M31.1-10.4v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M23.5-10.4v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3M15.8-10.4v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.4.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.2M8.2-10.4v.2c-.1.1-.2 0-.2.1-.1.1-.1.3-.1.3-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4 0 .2.2.4.3.6.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2.1.2.1.2.1.3-.1 0-.1 0 0 0M.5-10.4v.2c-.1.1-.1.1-.2.1 0 .1-.1.3-.1.3-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.2.3.6.6.7.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.4.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.2M69.4-2.8v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.2.2.4.6.6.7.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.2c0 .1 0 0 0 0M61.8-2.8v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4 0 .2.2.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 0 0 0M54.1-2.8v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.2.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2.1.3-.1.4-.3v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.1c0 .1 0 0 0 0M46.5-2.8v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.1.2.3.6.5.7.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2.1.2.1.1.1.2M38.8-2.8v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4 0 .2.2.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 0 0 0M31.1-2.8v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.2.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 0 0 0M23.5-2.8v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.3.4.4.5.1.2.3.6.6.7.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.2c0 .1 0 0 0 0M15.8-2.8v.2c-.1.1-.1.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4.1.2.2.4.4.5.2.1.4.6.6.6.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.2 0-.3.1-.4.2-.2.1-.1.2-.3.2-.1 0-.2.1-.2.2v.3c0 .1 0 0 0 0M8.2-2.8v.2c-.1.1-.2.1-.2.1-.1.1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4 0 .2.2.4.3.5.2.2.4.6.6.7.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2-.1.3-.3.4-.5v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8 0 .1-.2.2-.3.2-.2.1-.1.2-.3.3-.1 0-.2.1-.2.2v.1c-.1.1-.1 0 0 0M.5-2.8v.2c-.1.1-.1.1-.2.1 0 .1-.1.3-.1.4-.2.1 0 .2 0 .3v.2c0 .1 0 .3.1.4 0 .2.2.4.4.5.2.2.3.6.6.7.2 0 .4-.1.5-.1.2 0 .4 0 .6-.1.2-.1.1-.3.3-.5.1-.1.3 0 .4-.1.2 0 .3-.2.4-.4v-.2c0-.1.1-.2.1-.3 0-.1-.1-.1-.1-.2v-.3c0-.2 0-.4-.1-.5-.4-.7-1.2-.9-2-.8-.1 0-.2.1-.4.1-.1.1-.1.2-.3.3-.1 0-.2.1-.2.2v.1c0 .1 0 0 0 0\"></path>\n            </pattern>\n            <path class=\"st3\" d=\"M0 70.4V.8h76.8v15.5H17v11.8h51.5v15H17v27.3H0zM257 70.4V46.7c0-2.1-1.8-3-1.8-3-.8-.5-3.2-.6-6.8-.6h.8-35.8v27.4h-17V.8h53c9.2 0 15.5 1.4 19.8 5.6 4.3 4.4 4.8 10.1 4.9 16v5c.1 5-2.6 9.6-5.8 12.3l.6.3c1.3.6 2 1.5 2 1.5 2.4 3.1 2.4 5.7 2.4 9v19.9H257zm-9.2-42.3c4.2 0 6.6 0 7.6-.6 0 0 1.7-1 1.8-3v-4.6c0-2.1-1.8-3-1.8-3-1.3-.7-3.6-.6-8.9-.6h-33.1v11.8h35.1-.7zM299 70.4V16.3h-16V.8h63.8v15.5H316v54.1h-17zm4.4-58.5V9.6v2.3zM567.6 70.4V16.3h-16V.8h63.8v15.5h-30.8v54.1h-17zm4.3-58.5V9.6v2.3zM355.2 70.4V.8h17v69.6h-17zM474.6 70.4V.8h68.5v15.5h-51.5v11.8h35.8v15h-35.8v11.8h51.9v15.5h-68.9zM402 70.4h-17.1V.8h54.9s10.1-.4 16.4 5.9c0 0 6.5 5.5 6.5 18.8v44.9h-17v-46s.2-4.7-1.4-6.3c0 0-1.4-1.8-4.1-1.8H402v54.1zM611.4 70.3c-4.7 0-8.4-3.8-8.4-8.4 0-4.6 3.8-8.4 8.4-8.4 4.6 0 8.4 3.8 8.4 8.4 0 4.7-3.7 8.4-8.4 8.4zm0-15.8c-4.1 0-7.4 3.3-7.4 7.5 0 4.1 3.3 7.4 7.4 7.4 4.1 0 7.4-3.3 7.4-7.4.1-4.2-3.3-7.5-7.4-7.5zm-3.1 2.5h4.1c1.4 0 2.8.3 3 2.4 0 1.2-.3 1.6-1.2 2.3 1 .6 1 .8 1.1 2.4.1 1.2-.1 1.4.4 2.2h-1.4l-.2-1.2c-.2-1.1.3-2.8-1.6-2.8h-3v4h-1.2V57zm1.2 1.1v3.2h3c.8 0 1.6-.2 1.7-1.4.2-1.6-1-1.8-1.7-1.8h-3z\"></path>\n            <path class=\"st4\" d=\"M84.3 26.3h28.2v18.5H84.3zM120.3 0H148v18.5h-27.7zM120.3 52.5H148V71h-27.7zM155.7 26.3H184v18.5h-28.3zM95.9 0C90 1.5 85.4 8.1 84.3 16.5v2.1h28.2V0H95.9zM84.3 52.5v2.3c1 8 5.3 14.4 10.9 16.2h17.4V52.5H84.3zM184 18.5v-2.1c-1.1-8.3-5.7-14.9-11.6-16.5h-16.7v18.5H184zM173.1 71.1c5.5-1.9 9.8-8.2 10.9-16.2v-2.3h-28.3v18.5h17.4z\"></path>\n        </svg>\n        ",
    link: function link($scope, $elem, $attrs) {
      $scope.appliedTextColor = '#231F20';
      $scope.appliedFortColor = '#EE3124';

      function updateValues(oldValue, newValue) {
        if (typeof $scope.color !== "undefined" && $scope.color !== '') {
          $scope.appliedTextColor = $scope.color;
        }

        if (typeof $scope.fortColor !== "undefined" && $scope.fortColor !== '') {
          $scope.appliedFortColor = $scope.fortColor;
        }
      }

      $scope.$watch('color', updateValues);
      $scope.$watch('fortColor', updateValues);
    }
  };
});
'use strict';
/***
 * The point of this system is to build a flexible, dynamic menu that's bound to a product listing pull.
 * Items can be defined statically and will always show up, but menu items bound to a product that isn't in the product
 *  list from the server should not show up.
 */

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ParsedMenuItem = function ParsedMenuItem() {
  _classCallCheck(this, ParsedMenuItem);

  this.label = '';
  this.link = null;
  this.label2 = '';
  this.link2 = null;
  this.label3 = '';
  this.link3 = null;
  this.children = null;
  this.icon = null;
  this.options = {};
};

angular.module('docs').directive('productsBarList', ['MenuService', 'screenSize', function (MenuService, screenSize) {
  return {
    restrict: 'E',
    scope: {
      label: '@',
      options: '=',
      icon: '=?'
    },
    transclude: true,
    template: "\n                <span><img ng-src=\"[[ icon ]]\" ng-if=\"icon\" class=\"list-icon\" /> [[ label ]]</span>\n                <div class=\"products-list\" ng-style=\"{width: getWidth()}\" ng-transclude></div>\n            ",
    link: function link($scope, elem) {
      $scope.isOpen = false;
      $scope.isActive = false;
      $scope.isMobile = false;

      if (!screenSize.is('lg')) {
        $scope.isMobile = true;
      }

      screenSize.on('lg', function (isMatch) {
        $scope.isMobile = !isMatch;
      });

      $scope.getWidth = function () {
        return $scope.options.columns * 200 + 'px';
      };

      $scope.$watch('isOpen', function (newValue, oldValue) {
        if (newValue != oldValue) {
          // console.log("HomeProductsComponent", "productsBarList", "Watch isOpen Change", newValue);
          elem.toggleClass('open', newValue);
        }
      });

      $scope.toggleMenu = function () {
        // console.log("HomeProductsComponent", "productsBarList", "toggleMenu", MenuService.activeMenu, "!==", $scope.label, MenuService.activeMenu !== $scope.label);
        if (MenuService.activeMenu !== $scope.label) {
          MenuService.setActiveMenu($scope.label);
        } else {
          MenuService.setActiveMenu(null);
        }

        $scope.$apply();
      }; // Watch for changes in the Products listing


      $scope.$watch(function () {
        return MenuService.activeMenu;
      }, function (newValue, oldValue) {
        // console.log("HomeProductsComponent", "productsBarList", "Watch activeMenu Change", newValue);
        if (newValue !== oldValue) {
          $scope.isOpen = newValue === $scope.label;
        }
      });
      elem.on('click', function () {
        if (!$scope.isMobile) {
          return;
        } // Disable clicks on mobile mode


        $scope.toggleMenu();
      }).on('mouseenter', function () {
        var color = 'unset';

        if (typeof $scope.options.bgHoverColor !== "undefined" && $scope.options.bgHoverColor && $scope.options.bgHoverColor != 'none') {
          color = $scope.options.bgHoverColor;
        }

        elem.css('background-color', color);

        if ($scope.isMobile) {
          return;
        } // console.log("HomeProductsComponent", "productsBarList", "elem.on MouseEnter", $scope.label);


        MenuService.setActiveMenu($scope.label);
        $scope.$apply();
      }).on('mouseleave', function () {
        var color = 'unset';

        if (typeof $scope.options.bgColor !== "undefined" && $scope.options.bgColor && $scope.options.bgColor != 'none') {
          color = $scope.options.bgColor;
        }

        elem.css('background-color', color);

        if ($scope.isMobile) {
          return;
        } // console.log("HomeProductsComponent", "productsBarList", "elem.on MouseLeave", null);


        MenuService.setActiveMenu(null);
        $scope.$apply();
      });
    }
  };
}]).directive('productsBarItem', function () {
  return {
    restrict: 'E',
    scope: {
      item: '=',
      options: '='
    },
    transclude: true,
    template: "\n                <div class=\"products-bar-item-container\" \n                     ng-class=\"{parent: item.children != null && item.children.length > 0, \n                                leaf: item.children === null || item.children.length === 0}\">\n                    <img ng-src=\"[[ item.options.icon ]]\" ng-if=\"item.options.icon\" />\n                    <a ng-href=\"[[ item.link ]]\" \n                       ng-if=\"item.link\">[[ item.label ]]</a>\n                    <span ng-if=\"item.link2\"> / </span>\n                    <a ng-href=\"[[ item.link2 ]]\" \n                       ng-if=\"item.link2\">[[ item.label2 ]]</a>\n                    <span ng-if=\"item.link3\"> / </span>\n                    <a ng-href=\"[[ item.link3 ]]\" \n                       ng-if=\"item.link3\">[[ item.label3 ]]</a>\n                    <span ng-if=\"!item.link && item.options.v !== false\">[[ item.label ]]</span>\n                    <products-bar-item ng-repeat=\"sub in item.children\"\n                                       item=\"sub\" \n                                       ng-if=\"item.children != null && item.children.length > 0\"\n                    ></products-bar-item>\n                </div> \n            "
  };
}).directive('mobileMenuToggle', ['MenuService', function (MenuService) {
  return {
    restrict: 'E',
    template: '<div class="mobile-menu-toggle" ng-click="toggle()"><i class="fas fa-bars"></i></div>',
    link: function link($scope) {
      $scope.toggle = function () {
        MenuService.toggle();
      };
    }
  };
}]).directive('productsBarMenu', ['$filter', 'screenSize', 'MenuService', function ($filter, screenSize, MenuService) {
  return {
    restrict: 'E',
    template: "\n            <div class=\"menu-mobile-bg\" ng-if=\"isMobile\" ng-click=\"toggleMobileMenu()\" ng-class=\"{open: isOpen}\"></div>\n            <div class=\"products-menu\" ng-class=\"{mobile: isMobile, open: isOpen}\">\n                <products-bar-list ng-repeat=\"item in menu | reverse:!isMobile\" label=\"[[ item.label ]]\" options=\"item.options\" icon=\"item.icon\">\n                    <div class=\"product-search\" ng-if=\"item.options.allowFilter\">\n                        <input type=\"search\" placeholder=\"Find...\" ng-model=\"search\" />\n                    </div>\n                    <div class=\"product-item-container\" ng-style=\"{columnCount: item.options.columns}\">\n                        <products-bar-item item=\"sub\" options=\"item.options\" ng-repeat=\"sub in item.children | filter:search\"></products-bar-item>\n                    </div>\n                </products-bar-list>         \n            </div>\n\n            ",
    scope: {
      products: '=',
      structure: '='
    },
    link: function link($scope, elem) {
      $scope.menu = [];
      $scope.search = '';
      $scope.isOpen = false;
      $scope.activeMenu = null; // Watch for changes in the Products listing

      $scope.$watch(function () {
        return MenuService.isOpen;
      }, function (newValue, oldValue) {
        if (newValue !== oldValue) {
          $scope.isOpen = newValue;
        }
      });

      $scope.toggleMobileMenu = function () {
        MenuService.toggle();
      };

      $scope.$watch('search', function (newVal, oldVal) {
        // Watch gets fired on scope initialization and when empty so differentiate:
        console.log('SEARCH', newVal); // if (newVal !== oldVal && newVal !== '') {
        //     // Has searchvalue, apply sourcedata, propertyname and searchstring to filter
        //     // and assign return value of filter to geojson
        //     $scope.menu = $filter('filter')($scope.menu, 'label', newVal);
        // } else {
        //     // Search has been initialized or emptied, assign sourcedata to geojsonobject
        //     $scope.menu = $scope.menu;
        // }
      }); // apply a dynamic updating responsive class to determine some behaviours

      $scope.isMobile = false;

      if (!screenSize.is('lg')) {
        $scope.isMobile = true;
      }

      screenSize.on('lg', function (isMatch) {
        $scope.isMobile = !isMatch;
      });
      $scope.$watch('isMobile', function (newVal, oldVal) {
        if (newVal !== oldVal) {}
      });

      function findProductBySlug(slug) {
        var out = null;
        $scope.products.filter(function (p) {
          return p.slug === slug;
        }).forEach(function (p) {
          return out = p;
        });
        return out;
      }

      function parseItem(item) {
        var _parsed = new ParsedMenuItem();

        if (typeof item === "string") {
          // this is a slug shortcut that should match something in the products list
          var product = findProductBySlug(item);

          if (product) {
            _parsed.label = product.title;
            _parsed.link = "/product/".concat(product.slug);
          }
        } else if (_typeof(item) === "object") {
          // providing "slug" does a product lookup, which binds a proper link and title
          if (typeof item.slug !== "undefined") {
            var _product = findProductBySlug(item.slug);

            if (_product) {
              _parsed.label = _product.title;
              _parsed.link = "/product/".concat(_product.slug);
            } else {
              // product not found, hide
              _parsed.options.v = false;
            }
          }

          if (typeof item.slug2 !== "undefined") {
            var _product2 = findProductBySlug(item.slug2);

            if (_product2) {
              _parsed.label2 = _product2.title;
              _parsed.link2 = "/product/".concat(_product2.slug);
            } else {
              // product not found, hide
              _parsed.options.v = false;
            }
          }

          if (typeof item.slug3 !== "undefined") {
            var _product3 = findProductBySlug(item.slug3);

            if (_product3) {
              _parsed.label3 = _product3.title;
              _parsed.link3 = "/product/".concat(_product3.slug);
            } else {
              // product not found, hide
              _parsed.options.v = false;
            }
          } // If a title is provided, set it here


          if (typeof item.title !== "undefined") {
            _parsed.label = item.title;
          } // "as" overrides any title previously set


          if (typeof item.as !== "undefined") {
            _parsed.label = item.as;
          }

          if (typeof item.as2 !== "undefined") {
            _parsed.label2 = item.as2;
          }

          if (typeof item.as3 !== "undefined") {
            _parsed.label3 = item.as3;
          } // Overwrite any previously defined link


          if (typeof item.link !== "undefined") {
            _parsed.link = item.link;
          } // Recursively parse any children


          if (typeof item.children !== "undefined" && item.children.length > 0) {
            _parsed.children = item.children.map(function (c) {
              return parseItem(c);
            });
          }

          if (typeof item.options !== "undefined") {
            _parsed.options = item.options;
          }

          if (typeof item.icon !== "undefined") {
            _parsed.icon = item.icon;
          }
        }

        if (!_parsed.label) {// No item was parsed
          // return null;
        }

        return _parsed;
      }

      function reBindProducts() {
        $scope.menu = [];
        $scope.structure.forEach(function (topLevel) {
          // parse each item in the structure to normalize each item
          $scope.menu.push(parseItem(topLevel));
        });
      }

      function refresh() {
        // console.log("Refreshing");
        $scope.menu = [];

        if ($scope.structure !== null && $scope.products.length !== null) {
          reBindProducts();
        }
      }

      $scope.$watch('products', function (newValue, oldValue) {
        if (newValue !== oldValue) {
          refresh();
        }
      });
      refresh();
    }
  };
}]);
'use strict';

angular.module('docs').directive('product', ['ProductService', function (ProductService) {
  return {
    restrict: 'E',
    scope: {
      highlighted: '=?',
      inverted: '=?',
      id: '@?',
      // used to find a product from the Product API
      link: '@?',
      // override the default link
      icon: '@?',
      // override the default icon
      label: '@?' // override the default title

    },
    template: "\n                <a ng-href=\"[[ evaluatedProduct.link ]]\" ng-if=\"enabled\" ng-class=\"{highlight: highlighted}\">\n                    <div class=\"product-container\">\n                        <div class=\"product-icon\">\n                            <img ng-src=\"../../../img/[[ getIconLibrary() ]]/[[ evaluatedProduct.icon ]].svg\" alt=\"[[ evaluatedProduct.label ]]\" />\n                        </div>\n                        <div class=\"product-label\" ng-bind-html=\"evaluatedProduct.label\"></div>\n                    </div>\n                </a>\n            ",
    link: function link($scope, $elem, $attrs) {
      $scope.enabled = false; // This is the actual object with properties we bind to the template

      $scope.evaluatedProduct = {
        link: '/',
        icon: '',
        label: ''
      };

      $scope.getIconLibrary = function () {
        if ($scope.inverted) {
          return 'product-blue';
        }

        if ($scope.highlighted) {
          return 'product-highlighted';
        }

        return 'product-white';
      };
      /**
       * Updates values in the bound scope object based on product availability (if one is found), and any
       * overrides provided (if any)
       */


      function setup() {
        if (typeof $scope.product !== "undefined" && $scope.product !== {}) {
          // product found
          $scope.evaluatedProduct.icon = $scope.product.icon;
          $scope.evaluatedProduct.label = $scope.product.title;
          $scope.evaluatedProduct.link = "/product/".concat($scope.product.slug);
        }

        if (typeof $scope.link !== "undefined" && $scope.link) {
          $scope.evaluatedProduct.link = $scope.link;
        }

        if (typeof $scope.icon !== "undefined" && $scope.icon) {
          $scope.evaluatedProduct.icon = $scope.icon;
        }

        if (typeof $scope.label !== "undefined" && $scope.label) {
          $scope.evaluatedProduct.label = $scope.label;
        } // Only show if product id is supplied and product was found (aka: published)
        // also show if product isn't supplied but at least a label was
        // otherwise hide.


        $scope.enabled = $scope.id && typeof $scope.product !== "undefined" && typeof $scope.product.title !== "undefined" || !$scope.id && $scope.label;
      }
      /**
       * Evaluates the online product list.
       * This is executed every time the products listing from the ProductService is updated
       * @param products
       */


      function evaluate(products) {
        products.filter(function (p) {
          return p.slug === $scope.id;
        }) // find the product(s)
        .forEach(function (p) {
          return $scope.product = p;
        });
        setup();
      } // Because we're not binding values directly in the scope, we're just going to watch for changes to them
      // and perform the "offline" setup (as many times as needed)


      $scope.$watchGroup(['id', 'link', 'icon', 'label'], function () {
        setup();
      }); // Watch for changes in the Products listing

      $scope.$watch(function () {
        return ProductService.products;
      }, function (newValue, oldValue) {
        if (newValue !== oldValue) {
          evaluate(newValue); // no need to store the value here, we just need to find the right out and use that
        }
      }); // run setup with "offline" values

      setup();
    }
  };
}]);
'use strict';

angular.module('docs').directive('searchBar', ['$http', function ($http) {
  return {
    restrict: 'E',
    scope: {
      method: '@',
      endpoint: '@',
      queryValue: '@',
      placeholder: '@'
    },
    template: "\n            <div class=\"search-bar\">\n            <form name=\"search-bar\" ng-submit=\"search()\">\n                <input type=\"text\" ng-model=\"query\" placeholder=\"[[ placeholder ]]\"> \n<!--                <input type=\"submit\">-->\n            </form>\n            </div>\n            ",
    // replace: true,
    link: function link($scope, $elem, $attrs) {
      $scope.$watch('query', function (newValue, oldValue) {
        if (newValue !== oldValue) {
          quickSearch();
        }
      });

      function quickSearch() {
        console.log('do quick search with', $scope.query);
        $http.post('/api/quicksearch').then(function (results) {}, function (error) {});
      }

      $scope.search = function () {
        if ($scope.method.toLowerCase() === 'get') {
          window.location = "".concat($scope.endpoint, "?").concat($scope.queryValue, "=").concat($scope.query);
        }
      };
    }
  };
}]);
'use strict';

angular.module('docs').factory('MenuService', [function () {
  var out = {
    isOpen: false,
    menuStructure: [],
    activeMenu: null
  };

  out.toggle = function () {
    out.isOpen = !out.isOpen;
  };

  out.setMenuStructure = function (options) {
    out.menuStructure = options;
  };

  out.setActiveMenu = function (menu) {
    out.activeMenu = menu;
  };

  return out;
}]);
'use strict';

angular.module('docs').factory('ProductService', ['$http', function ($http) {
  var out = {
    success: null,
    loading: false,
    error: null,
    products: []
  };
  out.loading = true;

  out.refresh = function () {
    $http.get('/api/products').then(function (response) {
      var _out = [];
      angular.forEach(response.data, function (product) {
        _out.push(product);
      });
      out.products = _out;
      out.loading = false;
      out.success = true; // console.log("Got", out);
    }, function (error) {
      console.error('Could not load products');
      out.loading = false;
      out.success = false;
      out.error = 'Could not load products';
    });
  };

  out.refresh();
  return out;
}]);
//# sourceMappingURL=docs.v2.js.map
