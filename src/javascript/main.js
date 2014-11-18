/* global React */
/* global document */
/* global App */

React.render(
  App.Page.Main({}),
  document.getElementById('main-page')
);

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) { return; }
  js = d.createElement(s); js.id = id;
  js.setAttribute(
    'src',
    "https://connect.facebook.net/en_US/sdk.js#xfbml=1&appId=1484935508447852&version=v2.0"
  );
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

(function(d,s,id){
  var js,fjs=d.getElementsByTagName(s)[0],
  p=/^http:/.test(d.location.toString())?'http':'https';
  if(!d.getElementById(id)){
    js=d.createElement(s);js.id=id;
    js.setAttribute('src', p+'://platform.twitter.com/widgets.js');
    fjs.parentNode.insertBefore(js,fjs);
  }
}(document, 'script', 'twitter-wjs'));
