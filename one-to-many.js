const el = document.getElementById("onlive-tv-widget");

if (el) {
  (function (w, d, s, o, f, js, fjs) {
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
    "_hw",
    "https://resources-onlive-site-staging.s3.eu-west-2.amazonaws.com/widget-tv-staging/v1/widget.js"
  );
  _hw("init", {
    debug: true,
    embed: true,
    organizationId: "ec6423cb-5724-4418-a9ea-b3650fea2e34",
    serviceBaseUrl: "https://staging.onlive.site/api/v1",
  });
}
