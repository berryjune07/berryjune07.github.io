function is_youtubelink(url) {
    var p =
        /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    return url.match(p) ? RegExp.$1 : false;
}
function is_imagelink(url) {
    var p = /([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif|webp|svg))/i;
    return url.match(p) ? true : false;
}
function setGallery(el) {
    var elements = document.body.querySelectorAll(".gallery");
    elements.forEach((element) => {
        element.classList.remove("gallery");
    });

    var scope = el.closest("article.page, article.post, .page, body");
    var link_elements = scope
        ? scope.querySelectorAll("a.lightbox-image")
        : document.querySelectorAll("a.lightbox-image");

    link_elements.forEach((link_element) => {
        link_element.classList.remove("current");
    });

    var currentkey = 0;
    link_elements.forEach((link_element, index) => {
        if (el.getAttribute("href") === link_element.getAttribute("href")) {
            link_element.classList.add("current");
            currentkey = index;
        }
    });

    var gallery_elements;

    if (link_elements.length > 1) {
        document.getElementById("lightbox").classList.add("gallery");
        link_elements.forEach((link_element) => {
            link_element.classList.add("gallery");
        });
        gallery_elements = Array.from(
            (scope ? scope : document).querySelectorAll("a.gallery")
        );
    } else {
        gallery_elements = Array.from(link_elements);
    }

    var nextButton = document.getElementById("next");
    var prevButton = document.getElementById("prev");
    var indexLabel = document.getElementById("lightbox-index");

    if (indexLabel) {
        indexLabel.textContent = gallery_elements.length
            ? currentkey + 1 + " / " + gallery_elements.length
            : "";
    }

    var disableButton = function (button, disabled) {
        if (!button) return;
        if (disabled) {
            button.classList.add("disabled");
            button.setAttribute("aria-disabled", "true");
            button.tabIndex = -1;
        } else {
            button.classList.remove("disabled");
            button.removeAttribute("aria-disabled");
            button.tabIndex = 0;
        }
    };

    if (gallery_elements.length < 2) {
        disableButton(nextButton, true);
        disableButton(prevButton, true);
        return;
    }

    var nextkey = currentkey + 1;
    var prevkey = currentkey - 1;

    disableButton(nextButton, nextkey >= gallery_elements.length);
    disableButton(prevButton, prevkey < 0);

    nextButton.onclick = function (event) {
        if (nextkey >= gallery_elements.length) return;
        event.stopPropagation();
        gallery_elements[nextkey].click();
    };

    prevButton.onclick = function (event) {
        if (prevkey < 0) return;
        event.stopPropagation();
        gallery_elements[prevkey].click();
    };
}

function apply_lightbox_to_img_tag() {
  var isPostPage = !!document.querySelector("article.post");
  Array.from(document.querySelectorAll("img")).forEach((img_element) => {
    if (img_element.classList.contains("no-lightbox")) {
      return;
    }
    if (img_element.closest("#_sidebar")) {
      return;
    }
    if (isPostPage && img_element.closest(".about.related")) {
      return;
    }
    var wrapper = document.createElement("a");
    var url = img_element.getAttribute("src");
    wrapper.href = url;
    if (is_youtubelink(url)) {
      wrapper.classList.add("lightbox-youtube");
      wrapper.setAttribute("data-id", is_youtubelink(url));
    } else if (is_imagelink(url)) {
      wrapper.classList.add("lightbox-image");
      var href = wrapper.getAttribute("href");
      var filename = href.split("/").pop();
      var name = filename.split(".")[0];
      wrapper.setAttribute("title", name);
    } else {
      return;
    }
    img_element.parentNode.insertBefore(wrapper, img_element);
    wrapper.appendChild(img_element);
  });
}

function apply_lightbox() {
  var newdiv = document.createElement("div");
  newdiv.setAttribute("id", "lightbox");
  document.body.appendChild(newdiv);

  apply_lightbox_to_img_tag();

  //remove the clicked lightbox
  document
    .getElementById("lightbox")
    .addEventListener("click", function (event) {
      if (event.target.id != "next" && event.target.id != "prev") {
        this.innerHTML = "";
        document.getElementById("lightbox").style.display = "none";
      }
    });

  //add the youtube lightbox on click
  document.querySelectorAll("a.lightbox-youtube").forEach((element) => {
    element.addEventListener("click", function (event) {
      event.preventDefault();
      document.getElementById("lightbox").innerHTML =
        '<a id="close"></a><a id="next">&rsaquo;</a><a id="prev">&lsaquo;</a><div class="videoWrapperContainer"><div class="videoWrapper"><iframe src="https://www.youtube.com/embed/' +
        this.getAttribute("data-id") +
        '?autoplay=1&showinfo=0&rel=0"></iframe></div>';
      document.getElementById("lightbox").style.display = "block";

      setGallery(this);
    });
  });

  //add the image lightbox on click
  document.querySelectorAll("a.lightbox-image").forEach((element) => {
    element.addEventListener("click", function (event) {
      event.preventDefault();
      document.getElementById("lightbox").innerHTML =
        '<a id="close"></a><a id="next">&rsaquo;</a><a id="prev">&lsaquo;</a><div class="img" style="background: url(\'' +
        this.getAttribute("href") +
        '\') center center / contain no-repeat;" title="' +
        this.getAttribute("title") +
        '" ><img src="' +
        this.getAttribute("href") +
        '" alt="' +
        this.getAttribute("title") +
        '" /></div><div class="lightbox-meta"><span class="lightbox-title">' +
        this.getAttribute("title") +
        '</span><span id="lightbox-index" class="lightbox-index"></span></div>';
      document.getElementById("lightbox").style.display = "block";

      setGallery(this);
    });
  });
}
