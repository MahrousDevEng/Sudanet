(function ($) {
  "use strict";
  $.fn.Collapzion = function (options) {
    // Private Functions
    function debug(e) {
      console.log(e);
    }
    // Global Private Variables
    var _base = this;
    var _settings = $.extend(
      {
        _pos: {
          width: "100%",
          "min-height": "20%",
          position: "fixed",
          right: "0",
          left: "-20px",
          bottom: "-25px",
          "text-align": "center",
          padding: "0px 8px",
          display: "block",
          "margin-bottom": "34px",
        },
        _child_attribute: [
          {
            label: "Post",
            url: "/",
            icon: "&#xE150;",
            className: "social-icon",
          },
        ],
        _main_btn_color: "#2f353e;",
        _child_btn_color: "#2f353e;",
      },
      options
    );

    _base.init = function () {
      _base.css(_settings._pos);
      _base.append(
        `<a 
          style="background-color: ${_settings._main_btn_color}"
          href="javascript:void(0)"
          class="_col_shadow _collapz_parant _close"
          >
          <i class="fas fa-plus"></i>
        </a>`
      );

      $("#" + this.attr("id") + " a._collapz_parant").on("click", function () {
        var ths = $(this);
        _base.collapz_btn(ths, _settings._child_attribute);
      });
    };
    // toggle button
    _base.collapz_btn = function (_element, child_attribute) {
      if (_element.hasClass("_close")) {
        _element.css({
          "-webkit-transform": "rotate(45deg)",
          "-moz-transform": "rotate(45deg)",
          transform: "rotate(45deg)",
        });
        _element.removeClass("_close");
        _element.addClass("_open");

        var _child_el = '<ul class="_child_collapzion">';
        jQuery.each(child_attribute, function (i, val) {
          _child_el += `
          <li>
            <a href="${val.url}" target="_blank" rel="noopener" class="${val.className}">
              ${val.icon}
            </a>
          </li>
          `;
        });
        _child_el += "</ul>";

        _element.parent().append(_child_el);
        $("._child_collapzion").css({ transform: "translate3d(0, -100%, 0)" });
      } else {
        $("._child_collapzion").css({ transform: "translate3d(0, 0%, 0)" });
        $(this).parent().find("ul._child_collapzion").remove();
        _element.css({
          "-webkit-transform": "rotate(0)",
          "-moz-transform": "rotate(0)",
          transform: "rotate(0)",
        });
        _element.removeClass("_open");
        _element.addClass("_close");
      }
    };
    _base.clicker = function (e) {
      debug(e);
    };
    _base.init();
  };
})(jQuery);
