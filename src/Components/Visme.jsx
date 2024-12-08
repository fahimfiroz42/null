import { useEffect } from "react";


const VismeForm = () => {
  useEffect(() => {
    // Dynamically load the Visme embed script
    const script = document.createElement("script");
    script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div
        className="visme_d"
        data-title="B2B Newsletter Subscription"
        data-url="4drw90kz-b2b-newsletter-subscription"
        data-domain="forms"
        data-full-page="false"
        data-min-height="400px"
        data-form-id="106042"
      ></div>
    </div>
  );
};

export default VismeForm;
