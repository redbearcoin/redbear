import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

const NotFound = () => (
  <>
    <SEOHead title="404" description="Page not found" path="/404" />
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-gradient-red mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-6">This page dipped harder than $BEARISH.</p>
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90 transition-all"
        >
          Back to Home
        </Link>
      </div>
    </div>
  </>
);

export default NotFound;
