/*
 * Template Name: Unify - Responsive Bootstrap Template
 * Author: @htmlstream
 * Website: http://htmlstream.com
 */
var App = function () {
    // We extend jQuery by method hasAttr
    $.fn.hasAttr = function (name) {
        return this.attr(name) !== undefined;
    };

    return {
        init: function () {
            this.initScrollBar();
            this.initSidebarMenuDropdown();
        },

        // Scroll Bar
        initScrollBar: function () {
            jQuery('.mCustomScrollbar').mCustomScrollbar({
                theme: "minimal",
                scrollInertia: 200,
                scrollEasing: "linear"
            });
        },

        // Sidebar Menu Dropdown
        initSidebarMenuDropdown: function () {
            function sidebarMenuDropdown() {
                jQuery('.header-v7 .dropdown-toggle').on('click', function () {
                    jQuery('.header-v7 .dropdown-menu').stop(true, false).slideUp();
                    jQuery('.header-v7 .dropdown').removeClass('open');

                    if (jQuery(this).siblings('.dropdown-menu').is(":hidden") == true) {
                        jQuery(this).siblings('.dropdown-menu').stop(true, false).slideDown();
                        jQuery(this).parents('.dropdown').addClass('open');
                    }
                });
            }

            sidebarMenuDropdown();
        },

        // Animate Dropdown
        initAnimateDropdown: function () {
            function MenuMode() {
                jQuery('.dropdown').on('show.bs.dropdown', function () {
                    jQuery(this).find('.dropdown-menu').first().stop(true, true).slideDown();
                });
                jQuery('.dropdown').on('hide.bs.dropdown', function () {
                    jQuery(this).find('.dropdown-menu').first().stop(true, true).slideUp();
                });
            }

            jQuery(window).resize(function () {
                if (jQuery(window).width() > 768) {
                    MenuMode();
                }
            });

            if (jQuery(window).width() > 768) {
                MenuMode();
            }
        }
    };
}();
