
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[70vh]">
        <h1 className="text-7xl font-bold text-fintech-purple mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-6">The page you're looking for doesn't exist.</p>
        <Button asChild>
          <a href="/">Return to Dashboard</a>
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
