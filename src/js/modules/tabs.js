document.addEventListener("DOMContentLoaded", () => {
  const tabs = () => {
    const head = document.querySelector(".menu-tabs__head");
    const body = document.querySelector(".menu-tabs__body");

    const getActiveTabName = () => {
      return head.querySelector(".menu-tabs__caption_active").dataset.tab;
    };

    const setActiveContent = () => {
      if (body.querySelector(".menu-content_active")) {
        body
          .querySelector(".menu-content_active")
          .classList.remove("menu-content_active");
      }
      body
        .querySelector(`[data-tab=${getActiveTabName()}]`)
        .classList.add("menu-content_active");
    };

    if (!head.querySelector(".menu-tabs__caption_active")) {
      head
        .querySelector(".menu-tabs__caption")
        .classList.add("menu-tabs__caption_active");
    }

    setActiveContent(getActiveTabName());

    head.addEventListener("click", (e) => {
      const caption = e.target.closest(".menu-tabs__caption");
      if (!caption) return;
      if (caption.classList.contains("menu-tabs__caption_active")) return;

      if (head.querySelector(".menu-tabs__caption_active")) {
        head
          .querySelector(".menu-tabs__caption_active")
          .classList.remove("menu-tabs__caption_active");
      }

      caption.classList.add("menu-tabs__caption_active");

      setActiveContent(getActiveTabName());
    });
  };

  tabs();
});
