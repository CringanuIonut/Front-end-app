this["JST"] = this["JST"] || {};

this["JST"]["#app-layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="sidebar"></div><div id="container" class="container"><div id="newsbar" class="newsbar"><p><h2> News</h2></p></div></div><div id="footer" class="footer"></div>';

}
return __p
};

this["JST"]["#contact-layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<span>Salut!</span>';

}
return __p
};

this["JST"]["#home-group"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p +=
__e( model.id) +
'<br/>' +
__e( model.name) +
'<br/>' +
__e( model.startDate) +
'<hr/>';

}
return __p
};

this["JST"]["#home-layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="col-md-12"><div class="col-md-1"><div class="dropdown btn btn-primary dropdown-toggle">\tArticol1<div class="caret"><ul class="dropdown-menu"><li>\tSubarticol1</li><li>Subarticol2</li><li>Subarticol3</li></ul></div></div><div class="dropdown btn btn-primary dropdown-toggle">\tArticol2<div class="caret"><ul class="dropdown-menu"><li>\tSubarticol1</li><li>Subarticol2</li><li>Subarticol3</li></ul></div></div><div class="dropdown btn btn-primary dropdown-toggle">\tArticol3<div class="caret"><ul class="dropdown-menu"><li>\tSubarticol1</li><li>Subarticol2</li><li>Subarticol3</li></ul></div></div></div><div class="col-md-9"><div class="slide-banner"><img src="./banner/banner2.jpg"/></div></div><div class="col-md-2"><div id="newsbar"><p><h2>News</h2></p></div></div></div><div class="continut-articol col-md-8 col-md-offset-2"><p><h2>\tPagina Principala</h2></p><div id="collection-container"></div></div><div id="form" class="form-contact"><form><table><tr><td><b>   Nume:</b></td><td><input type="text" name="nume" maxlength="50" size="30" placeholder="Nume"/></td></tr><tr><td><b>Prenume:</b></td><td><input type="text" name="prenume" maxlength="50" size="30" placeholder="Prenume"/></td></tr><tr><td><b> E-mail:</b></td><td><input type="text" name="E-mail" maxlength="50" size="30" placeholder="E-mail"/></td></tr><tr><td><b>  Mesaj:</b></td><td><textarea name="mesaj" maxlength="1000" cols="31" rows="6"></textarea></td></tr></table></form></div>';

}
return __p
};

this["JST"]["#navigation-navbar"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="navbar"><ul class="list-inline"><li><a href="http://www.youtube.com"><b>Home</b></a></li><li><a href="http://www.google.ro"><b>Article</b></a></li><li><a href="http://www.yahoo.com"><b>Contact</b></a></li></ul></div>';

}
return __p
};