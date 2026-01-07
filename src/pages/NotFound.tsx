import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background font-cairo">
      <div className="text-center px-4">
        <h1 className="text-7xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          عذراً، الصفحة المطلوبة غير موجودة
        </p>
        <Button asChild className="gold-button px-8 py-6 text-lg">
          <Link to="/">
            <Home className="w-5 h-5 ml-2" />
            العودة للصفحة الرئيسية
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
