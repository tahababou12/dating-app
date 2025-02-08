import { Link, useLocation } from "@remix-run/react";

export function AppHeader() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="border-b bg-white/80 backdrop-blur-xl sticky top-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/app" className="text-xl font-bold bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
          Dating App
        </Link>
        <nav className="flex items-center gap-8">
          <Link 
            to="/app/discover" 
            className={`text-sm font-medium transition-colors ${
              isActive("/app/discover")
                ? "text-violet-500"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Discover
          </Link>
          <Link 
            to="/app/matches" 
            className={`text-sm font-medium transition-colors ${
              isActive("/app/matches")
                ? "text-violet-500"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Matches
          </Link>
          <Link 
            to="/app/messages" 
            className={`text-sm font-medium transition-colors ${
              isActive("/app/messages")
                ? "text-violet-500"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Messages
          </Link>
          <Link 
            to="/app/profile" 
            className={`text-sm font-medium transition-colors ${
              isActive("/app/profile")
                ? "text-violet-500"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Profile
          </Link>
        </nav>
      </div>
    </header>
  );
}
