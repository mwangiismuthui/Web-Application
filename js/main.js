/*
 *
 * Module: <name>
 * < short description here e.g. "This module implements main entry point...">
 *
 * Student Name:
 * Student Number:
 *
 */

$(document).ready(function (params) {

    
    if (localStorage.getItem("username") === null) {
        $("#login-form").show();
 
    } else {
        $("#login-form").hide();
        $("#username-icon").append(localStorage.getItem("username"));

    }
    
});


