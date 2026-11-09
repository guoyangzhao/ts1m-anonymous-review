"use strict";

// Keep scripts local and compatible with the anonymous website sandbox.
document.addEventListener("DOMContentLoaded", () => {
  const dialog = document.getElementById("image-dialog");
  const enlarged = dialog.querySelector("img");
  const closeButton = dialog.querySelector("button");
  document.querySelectorAll("figure img").forEach((image) => {
    image.tabIndex = 0;
    image.setAttribute("role", "button");
    image.setAttribute("aria-label", `Expand figure: ${image.alt}`);
    const open = () => {
      enlarged.src = image.src;
      enlarged.alt = image.alt;
      dialog.showModal();
    };
    image.addEventListener("click", open);
    image.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });
  });
  closeButton.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
  const links = Array.isArray(window.TS1M_RESOURCE_LINKS) ? window.TS1M_RESOURCE_LINKS : [];
  const holder = document.getElementById("resource-links");
  const headerHolder = document.getElementById("dataset-download-links");
  for (const resource of links) {
    if (!resource || typeof resource.url !== "string" || !/^https:\/\//i.test(resource.url)) continue;
    const anchor = document.createElement("a");
    anchor.href = resource.url;
    anchor.textContent = resource.label || "Resource";
    anchor.className = "button";
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    holder.appendChild(anchor);
    if (headerHolder) headerHolder.appendChild(anchor.cloneNode(true));
  }
  if (holder.children.length) document.getElementById("resources").hidden = false;
  if (headerHolder && headerHolder.children.length) document.getElementById("dataset-downloads").hidden = false;
});
