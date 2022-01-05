(function (w, d, s, o, f, js, fjs) {
    var elemDiv = document.createElement('div');
    elemDiv.setAttribute("id", "onlive-widget");
    document.body.appendChild(elemDiv);

  w["Onlive-Widget"] = o;
  w[o] =
    w[o] ||
    function () {
      (w[o].q = w[o].q || []).push(arguments);
    };
  (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
  js.id = o;
  js.src = f;
  js.async = 1;
  fjs.parentNode.insertBefore(js, fjs);
})(
  window,
  document,
  "script",
  "onliveW",
  "https://cdn.onlive.site/widget/v1/onlive-widget.js"
);
onliveW("init", {
  targetElementId: "onlive-widget",
  organizationId: "ec6423cb-5724-4418-a9ea-b3650fea2e34",
});