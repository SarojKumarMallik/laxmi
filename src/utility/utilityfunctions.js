import $ from 'jquery';

export const baseUrl = "http://localhost:5000/laxmimaternity_backend/"
// export const baseUrl = "https://lakshmimaternity.com:13011/laxmimaternity_backend/";
// export const baseUrl = "backend/";

const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
}


/**
 * Toggle .header-scrolled class to #header when page is scrolled
 */
export const toggleHeaderScrolled = (header, topbar) => {
    let selectHeader = $(header);
    let selectTopbar = $(topbar);
    if (selectHeader) {
        const headerScrolled = () => {
            if (window.scrollY > 100) {
                selectHeader.addClass('header-scrolled')
                if (selectTopbar) {
                    selectTopbar.addClass('topbar-scrolled')
                }
            } else {
                selectHeader.removeClass('header-scrolled')
                if (selectTopbar) {
                    selectTopbar.removeClass('topbar-scrolled')
                }
            }
        }
        window.addEventListener('load', headerScrolled)
        onscroll(document, headerScrolled)
    }
}

/**
 * Back to top button
 */
export const showBackToTopBtn = (element) => {
    if ($(element)) {
        const toggleBacktotop = () => {
            if (window.scrollY > 100) {
                $(element).addClass('active')
            } else {
                $(element).removeClass('active')
            }
        }
        window.addEventListener('load', toggleBacktotop)
        onscroll(document, toggleBacktotop)
    }
}

// Regular expression for email validation
export const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};