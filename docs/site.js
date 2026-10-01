document.addEventListener("DOMContentLoaded", () => {
  const year = document.querySelector("#current-year");
  if (year) year.textContent = String(new Date().getFullYear());

  document.querySelectorAll("[data-copy-target]").forEach((button) => {
    button.addEventListener("click", async () => {
      const target = document.getElementById(button.dataset.copyTarget);
      const status = button.parentElement?.querySelector(".copy-status");
      if (!target) return;

      try {
        await navigator.clipboard.writeText(target.textContent.trim());
        if (status) status.textContent = "Copied";
      } catch {
        if (status) status.textContent = "Select and copy the checksum above";
      }
    });
  });
});
