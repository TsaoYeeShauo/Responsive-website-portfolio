"use strict";

var searchBtn = document.querySelector('#search-btn');
var searchForm = document.querySelector('.header .search-form');

searchBtn.onclick = function () {
  searchBtn.classList.toggle('fa-times');
  searchForm.classList.toggle('active');
  menuBtn.classList.remove('fa-times');
  navbar.classList.remove('active');
};

var menuBtn = document.querySelector('#menu-btn');
var navbar = document.querySelector('.header .navbar');

menuBtn.onclick = function () {
  menuBtn.classList.toggle('fa-times');
  navbar.classList.toggle('active');
  searchBtn.classList.remove('fa-times');
  searchForm.classList.remove('active');
};

window.onscroll = function () {
  searchBtn.classList.remove('fa-times');
  searchForm.classList.remove('active');
  menuBtn.classList.remove('fa-times');
  navbar.classList.remove('active');
};