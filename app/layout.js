"use client";

import { useEffect, useState } from "react";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const linkTags = [
      // {
      //   rel: "shortcut icon",
      //   type: "image/x-icon",
      //   href: "/assets/images2/logo_title.png",
      // },
      // { rel: "stylesheet", href: "/assets/css/animate.css" },
      // { rel: "stylesheet", href: "/assets/bootstrap/css/bootstrap.min.css" },
      // {
      //   href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap",
      //   rel: "stylesheet",
      // },
      // {
      //   href: "https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap",
      //   rel: "stylesheet",
      // },
      { rel: "stylesheet", href: "/assets/main/css/fonts.css" },
      { rel: "stylesheet", href: "/assets/main/css/style.css" },
      { rel: "stylesheet", href: "/assets/main/css/style.css.map" },

      { rel: "stylesheet", href: "/assets/main/scss/style.scss" },
      {
        rel: "stylesheet",
        href: "/assets/main/scss/components/content/_calender.scss",
      },
      {
        rel: "stylesheet",
        href: "/assets/main/scss/components/content/_widget.scss",
      },

      {
        rel: "stylesheet",
        href: "/assets/main/scss/components/Header/_notification.scss",
      },
      {
        rel: "stylesheet",
        href: "/assets/main/scss/components/Header/_top-head.scss",
      },

      {
        rel: "stylesheet",
        href: "/assets/main/scss/components/sidebar/_logo.scss",
      },
      {
        rel: "stylesheet",
        href: "/assets/main/scss/components/sidebar/_navbar.scss",
      },

      {
        rel: "stylesheet",
        href: "/assets/main/scss/components/ui/_badge.scss",
      },
      {
        rel: "stylesheet",
        href: "/assets/main/scss/components/ui/_buttons.scss",
      },
      {
        rel: "stylesheet",
        href: "/assets/main/scss/components/ui/_dropdown.scss",
      },
      {
        rel: "stylesheet",
        href: "/assets/main/scss/components/ui/_forms.scss",
      },
      {
        rel: "stylesheet",
        href: "/assets/main/scss/components/ui/_modal.scss",
      },
      {
        rel: "stylesheet",
        href: "/assets/main/scss/components/ui/_table-datatable.scss",
      },
      {
        rel: "stylesheet",
        href: "/assets/main/scss/components/ui/_ui_card.scss",
      },
      {
        rel: "stylesheet",
        href: "/assets/main/scss/components/ui/_ui-breadcrumb.scss",
      },
      {
        rel: "stylesheet",
        href: "/assets/main/scss/components/ui/_ui-progress.scss",
      },

      { rel: "stylesheet", href: "/assets/main/scss/helpers/_colors.scss" },
      { rel: "stylesheet", href: "/assets/main/scss/helpers/_data.scss" },
      { rel: "stylesheet", href: "/assets/main/scss/helpers/_function.scss" },
      { rel: "stylesheet", href: "/assets/main/scss/helpers/_mixins.scss" },
      { rel: "stylesheet", href: "/assets/main/scss/helpers/_reset.scss" },
      { rel: "stylesheet", href: "/assets/main/scss/helpers/_variable.scss" },

      {
        rel: "stylesheet",
        href: "/assets/main/scss/layouts/footer/_footer.scss",
      },
      {
        rel: "stylesheet",
        href: "/assets/main/scss/layouts/header/_header.scss",
      },
      {
        rel: "stylesheet",
        href: "/assets/main/scss/layouts/pages/_pages.scss",
      },

      {
        rel: "stylesheet",
        href: "/assets/main/scss/layouts/rtl/_rtl-components-global.scss",
      },
      {
        rel: "stylesheet",
        href: "/assets/main/scss/layouts/rtl/_rtl-footer.scss",
      },
      {
        rel: "stylesheet",
        href: "/assets/main/scss/layouts/rtl/_rtl-global.scss",
      },
      {
        rel: "stylesheet",
        href: "/assets/main/scss/layouts/rtl/_rtl-header.scss",
      },
      {
        rel: "stylesheet",
        href: "/assets/main/scss/layouts/rtl/_rtl-nav-header.scss",
      },
      {
        rel: "stylesheet",
        href: "/assets/main/scss/layouts/rtl/_rtl-panel.scss",
      },
      {
        rel: "stylesheet",
        href: "/assets/main/scss/layouts/rtl/_rtl-sidebar-right.scss",
      },
      { rel: "stylesheet", href: "/assets/main/scss/layouts/rtl/_rtl.scss" },

      {
        rel: "stylesheet",
        href: "/assets/main/scss/layouts/sidebar/_sidebar.scss",
      },

      // //theme
      {
        rel: "stylesheet",
        href: "/assets/main/scss/layouts/themes/colors/_main_priamry_colors.scss",
      },
      {
        rel: "stylesheet",
        href: "/assets/main/scss/layouts/themes/colors/_primary_color_1.scss",
      },
      {
        rel: "stylesheet",
        href: "/assets/main/scss/layouts/themes/colors/_primary_color_2.scss",
      },
      {
        rel: "stylesheet",
        href: "/assets/main/scss/layouts/themes/colors/_primary_color_3.scss",
      },
      {
        rel: "stylesheet",
        href: "/assets/main/scss/layouts/themes/colors/_primary_color_4.scss",
      },
      {
        rel: "stylesheet",
        href: "/assets/main/scss/layouts/themes/colors/_primary_color_5.scss",
      },
      {
        rel: "stylesheet",
        href: "/assets/main/scss/layouts/themes/colors/_primary_color_6.scss",
      },
      {
        rel: "stylesheet",
        href: "/assets/main/scss/layouts/themes/colors/_primary_color_7.scss",
      },
      {
        rel: "stylesheet",
        href: "/assets/main/scss/layouts/themes/colors/_primary_color_8.scss",
      },
      {
        rel: "stylesheet",
        href: "/assets/main/scss/layouts/themes/colors/_primary_color_9.scss",
      },
      {
        rel: "stylesheet",
        href: "/assets/main/scss/layouts/themes/colors/_primary_color_10.scss",
      },
      {
        rel: "stylesheet",
        href: "/assets/main/scss/layouts/themes/colors/_primary_color_11.scss",
      },
      {
        rel: "stylesheet",
        href: "/assets/main/scss/layouts/themes/colors/_primary_color_12.scss",
      },
      {
        rel: "stylesheet",
        href: "/assets/main/scss/layouts/themes/colors/_primary_color_13.scss",
      },
      {
        rel: "stylesheet",
        href: "/assets/main/scss/layouts/themes/colors/_primary_color_14.scss",
      },

      {
        rel: "stylesheet",
        href: "/assets/main/scss/layouts/themes/wide/_theme-wide-boxed.scss",
      },

      {
        rel: "stylesheet",
        href: "/assets/main/scss/layouts/themes/_option-themes.scss",
      },
      {
        rel: "stylesheet",
        href: "/assets/main/scss/layouts/version-dark/_dark-footer.scss",
      },
      {
        rel: "stylesheet",
        href: "/assets/main/scss/layouts/version-dark/_dark-global.scss",
      },
      {
        rel: "stylesheet",
        href: "/assets/main/scss/layouts/version-dark/_dark-header.scss",
      },
      {
        rel: "stylesheet",
        href: "/assets/main/scss/layouts/version-dark/_main.scss",
      },

      {
        rel: "stylesheet",
        href: "/assets/plugins/bootstrap/css/bootstrap-grid.css",
      },
      {
        rel: "stylesheet",
        href: "/assets/plugins/bootstrap/css/bootstrap-grid.css.map",
      },
      {
        rel: "stylesheet",
        href: "/assets/plugins/bootstrap/css/bootstrap-grid.min.css",
      },
      {
        rel: "stylesheet",
        href: "/assets/plugins/bootstrap/css/bootstrap-grid.min.css.map",
      },
      {
        rel: "stylesheet",
        href: "/assets/plugins/bootstrap/css/bootstrap-grid.rtl.css",
      },
      {
        rel: "stylesheet",
        href: "/assets/plugins/bootstrap/css/bootstrap-grid.rtl.css.map",
      },
      {
        rel: "stylesheet",
        href: "/assets/plugins/bootstrap/css/bootstrap-grid.rtl.min.css",
      },
      {
        rel: "stylesheet",
        href: "/assets/plugins/bootstrap/css/bootstrap-grid.rtl.min.css.map",
      },
      {
        rel: "stylesheet",
        href: "/assets/plugins/bootstrap/css/bootstrap-reboot.css",
      },
      {
        rel: "stylesheet",
        href: "/assets/plugins/bootstrap/css/bootstrap-reboot.css.map",
      },
      {
        rel: "stylesheet",
        href: "/assets/plugins/bootstrap/css/bootstrap-reboot.min.css",
      },
      {
        rel: "stylesheet",
        href: "/assets/plugins/bootstrap/css/bootstrap-reboot.min.css.map",
      },
      {
        rel: "stylesheet",
        href: "/assets/plugins/bootstrap/css/bootstrap-reboot.rtl.css",
      },
      {
        rel: "stylesheet",
        href: "/assets/plugins/bootstrap/css/bootstrap-reboot.rtl.css.map",
      },
      {
        rel: "stylesheet",
        href: "/assets/plugins/bootstrap/css/bootstrap-reboot.rtl.min.css",
      },
      {
        rel: "stylesheet",
        href: "/assets/plugins/bootstrap/css/bootstrap-reboot.rtl.min.css.map",
      },
      {
        rel: "stylesheet",
        href: "/assets/plugins/bootstrap/css/bootstrap-utilities.css",
      },
      {
        rel: "stylesheet",
        href: "/assets/plugins/bootstrap/css/bootstrap-utilities.css.map",
      },
      {
        rel: "stylesheet",
        href: "/assets/plugins/bootstrap/css/bootstrap-utilities.min.css",
      },
      {
        rel: "stylesheet",
        href: "/assets/plugins/bootstrap/css/bootstrap-utilities.min.css.map",
      },
      {
        rel: "stylesheet",
        href: "/assets/plugins/bootstrap/css/bootstrap-utilities.rtl.css",
      },
      {
        rel: "stylesheet",
        href: "/assets/plugins/bootstrap/css/bootstrap-utilities.rtl.css.map",
      },
      {
        rel: "stylesheet",
        href: "/assets/plugins/bootstrap/css/bootstrap-utilities.rtl.min.css",
      },
      {
        rel: "stylesheet",
        href: "/assets/plugins/bootstrap/css/bootstrap-utilities.rtl.min.css.map",
      },
      {
        rel: "stylesheet",
        href: "/assets/plugins/bootstrap/css/bootstrap.css",
      },
      {
        rel: "stylesheet",
        href: "/assets/plugins/bootstrap/css/bootstrap.css.map",
      },
      {
        rel: "stylesheet",
        href: "/assets/plugins/bootstrap/css/bootstrap.min.css",
      },
      {
        rel: "stylesheet",
        href: "/assets/plugins/bootstrap/css/bootstrap.min.css.map",
      },
      {
        rel: "stylesheet",
        href: "/assets/plugins/bootstrap/css/bootstrap.rtl.css",
      },
      {
        rel: "stylesheet",
        href: "/assets/plugins/bootstrap/css/bootstrap.rtl.css.map",
      },
      {
        rel: "stylesheet",
        href: "/assets/plugins/bootstrap/css/bootstrap.rtl.min.css",
      },
      {
        rel: "stylesheet",
        href: "/assets/plugins/bootstrap/css/bootstrap.rtl.min.css.map",
      },

      {
        rel: "stylesheet",
        href: "/assets/plugins/calendar/fullcalendar.min.css",
      },
      {
        rel: "stylesheet",
        href: "/assets/plugins/calendar/fullcalendar.print.min.css",
      },

      {
        rel: "stylesheet",
        href: "/assets/plugins/chart/apexcharts-bundle/css/apexcharts.css",
      },

      {
        rel: "stylesheet",
        href: "/assets/plugins/datatables/css/dataTables.bootstrap.css",
      },
      {
        rel: "stylesheet",
        href: "/assets/plugins/datatables/css/dataTables.bootstrap.min.css",
      },

      {
        rel: "stylesheet",
        href: "/assets/plugins/daterangepicker/daterangepicker.css",
      },

      // //layout
      { rel: "stylesheet", href: "/assets/main/scss/layouts/_layouts.scss" },

      // //style
      { rel: "stylesheet", href: "/assets/main/scss/style.scss" },
    ];

    const loadCSS = (linkTag) => {
      return new Promise((resolve, reject) => {
        const { rel, type, href } = linkTag;
        const linkElement = document.createElement("link");
        linkElement.rel = rel;
        if (type) linkElement.type = type;
        linkElement.href = href;
        linkElement.onload = resolve;
        linkElement.onerror = reject;
        document.head.appendChild(linkElement);
      });
    };

    Promise.all(linkTags.map(loadCSS))
      .then(() => {
        // alert(123);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load CSS:", error);
        setIsLoading(false); // Proceed even if CSS loading fails
      });

    return () => {
      linkTags.forEach((linkTag) => {
        const { rel, href } = linkTag;
        const linkElement = document.head.querySelector(
          `link[rel="${rel}"][href="${href}"]`
        );
        if (linkElement) document.head.removeChild(linkElement);
      });
    };
  }, []);

  const loadScripts = () => {
    const scripts = [
      "/assets/plugins/jquery/jquery.min.js",
      "/assets/plugins/popper/popper.min.js",
      "/assets/plugins/bootstrap/js/bootstrap.js",
      "/assets/plugins/moment/moment.min.js",
      "/assets/plugins/jquery/jquery.min.js",
      "/assets/plugins/daterangepicker/daterangepicker.min.js",
      "/assets/plugins/datatables/jquery.dataTables.min.js",
      "/assets/plugins/chart/chart/Chart.min.js",

      "/assets/plugins/chart/apexcharts-bundle/js/apexcharts.js",
      "/assets/plugins/chart/apexcharts-bundle/js/apexcharts.min.js",

      "/assets/js/init-tdatatable.js",
      "/assets/js/charts-custom.js",
      "/assets/js/toggleFullScreen.js",
      "/assets/js/main.js",
      "/assets/js/option-themes.js",
      // "/assets/js/apex-custom.js",
      // "/assets/js/charts-custom.js",
      // "/assets/js/init-tdatatable.js",
      // "/assets/js/main.js",
      // "/assets/js/option-themes.js",
      // "/assets/js/toggleFullScreen.js",
      // "/assets/plugins/bootstrap/js/bootstrap.js",
      // "/assets/plugins/bootstrap/js/bootstrap.js.map",
      // "/assets/plugins/bootstrap/js/bootstrap.min.js",
      // "/assets/plugins/bootstrap/js/bootstrap.js.map",
      // "/assets/plugins/calendar/calendar-init.js",
      // "/assets/plugins/calendar/fullcalendar.min.js",
      // "/assets/plugins/chart/chart/Chart.min.js",
      // "/assets/plugins/datatables/jquery.dataTables.min.js",
      // "/assets/plugins/daterangepicker/daterangepicker.min.js",
      

      // "/assets/plugins/moment/moment.min.js",
      // "/assets/plugins/popper/popper.min.js",
    ];

    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const scriptElement = document.createElement("script");
        scriptElement.src = src;
        scriptElement.async = true;
        scriptElement.onload = resolve;
        scriptElement.onerror = reject;
        document.body.appendChild(scriptElement);
      });
    };

    const loadNextScript = () => {
      if (scripts.length === 0) return Promise.resolve();

      const scriptSrc = scripts.shift();
      if (!scriptSrc) return Promise.resolve();

      return loadScript(scriptSrc).then(loadNextScript);
    };

    return loadNextScript()
      .then(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      })
      .catch((error) => {
        console.error("Failed to load scripts:", error);
        setIsLoading(false); // Proceed even if script loading fails
      });
  };

  useEffect(() => {
    loadScripts();

    return () => {
      const scripts = [
        "/assets/plugins/jquery/jquery.min.js",
        "/assets/plugins/popper/popper.min.js",
        "/assets/plugins/bootstrap/js/bootstrap.js",
        "/assets/plugins/moment/moment.min.js",
        "/assets/plugins/jquery/jquery.min.js",
        "/assets/plugins/daterangepicker/daterangepicker.min.js",
        "/assets/plugins/datatables/jquery.dataTables.min.js",
        "/assets/plugins/chart/chart/Chart.min.js",

        "/assets/plugins/chart/apexcharts-bundle/js/apexcharts.js",
        "/assets/plugins/chart/apexcharts-bundle/js/apexcharts.min.js",

        "/assets/js/init-tdatatable.js",
        "/assets/js/charts-custom.js",
        "/assets/js/toggleFullScreen.js",
        "/assets/js/main.js",
        "/assets/js/option-themes.js",
        // "/assets/js/apex-custom.js",
        // "/assets/js/charts-custom.js",
        // "/assets/js/init-tdatatable.js",
        // "/assets/js/main.js",
        // "/assets/js/option-themes.js",
        // "/assets/js/toggleFullScreen.js",
        // "/assets/plugins/bootstrap/js/bootstrap.js",
        // "/assets/plugins/bootstrap/js/bootstrap.js.map",
        // "/assets/plugins/bootstrap/js/bootstrap.min.js",
        // "/assets/plugins/bootstrap/js/bootstrap.min.js.map",

        // "/assets/plugins/calendar/calendar-init.js",
        // "/assets/plugins/calendar/fullcalendar.min.js",

        // "/assets/plugins/chart/apexcharts-bundle/js/apexcharts.js",
        // "/assets/plugins/chart/apexcharts-bundle/js/apexcharts.min.js",
        // "/assets/plugins/chart/chart/Chart.min.js",
        // "/assets/plugins/datatables/jquery.dataTables.min.js",
        // "/assets/plugins/daterangepicker/daterangepicker.min.js",
        

        // "/assets/plugins/moment/moment.min.js",
        // "/assets/plugins/popper/popper.min.js",
      ];

      scripts.forEach((src) => {
        const scriptElement = document.querySelector(`script[src="${src}"]`);
        if (scriptElement) {
          document.body.removeChild(scriptElement);
        }
      });
    };
  }, []);
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
