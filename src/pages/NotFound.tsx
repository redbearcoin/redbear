import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { useLocale } from "@/i18n";

const NotFound = () => {
  const { t, localePath } = useLocale();

  return (
    <>
      <SEOHead title={t("notFound.title")} description={t("notFound.desc")} path="/404" />
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-7xl font-bold text-gradient-red mb-4">{t("notFound.title")}</h1>
          <p className="text-xl text-muted-foreground mb-6">{t("notFound.desc")}</p>
          <Link
            to={localePath("/")}
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90 transition-all"
          >
            {t("notFound.back")}
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
