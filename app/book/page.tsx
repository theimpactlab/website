import HeroSection from "@/components/hero-section"
import Script from "next/script"

export default function Book() {
  return (
    <>
      <HeroSection
        title="Book an Appointment"
        description="Schedule a consultation with our team to discuss your impact measurement needs."
      />

      <section className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-4 md:p-8">
            <div id="my-cal-inline" className="w-full h-[600px] overflow-auto"></div>
          </div>
        </div>
      </section>

      <Script id="cal-script" strategy="afterInteractive">
        {`
          (function (C, A, L) {
              let p = function (a, ar) {
                  a.q.push(ar);
              };
              let d = C.document;
              C.Cal =
                  C.Cal ||
                  function () {
                      let cal = C.Cal;
                      let ar = arguments;
                      if (!cal.loaded) {
                          cal.ns = {};
                          cal.q = cal.q || [];
                          d.head.appendChild(d.createElement("script")).src = A;
                          cal.loaded = true;
                      }
                      if (ar[0] === L) {
                          const api = function () {
                              p(api, arguments);
                          };
                          const namespace = ar[1];
                          api.q = api.q || [];
                          if (typeof namespace === "string") {
                              cal.ns[namespace] = cal.ns[namespace] || api;
                              p(cal.ns[namespace], ar);
                              p(cal, ["initNamespace", namespace]);
                          } else p(cal, ar);
                          return;
                      }
                      p(cal, ar);
                  };
          })(window, "https://app.cal.com/embed/embed.js", "init");
          Cal("init", { origin: "https://app.cal.com" });

          Cal("inline", {
              elementOrSelector: "#my-cal-inline",
              calLink: "ryanmiemczyk",
              config: { theme: "light" },
          });
        `}
      </Script>
    </>
  )
}
