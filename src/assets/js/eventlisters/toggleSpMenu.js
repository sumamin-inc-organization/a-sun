import $ from "jquery";

/* spmenuを開閉する */
export function toggleSpMenu() {
  $(document).ready(function () {
    $("#closeMenuBtn").on("click", function () {
      if ($("#spNavMenu").hasClass("open")) {
        $("#spNavMenu").removeClass("open");
      }
    });

    $(".meatball-btn").on("click", function () {
      if (!$("#spNavMenu").hasClass("open")) {
        $("#spNavMenu").addClass("open");
      }
    });
  });
}
