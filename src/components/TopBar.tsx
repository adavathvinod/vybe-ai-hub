import { Link } from "react-router-dom";

const TopBar = () => (
  <header className="fixed top-0 left-0 right-0 lg:left-[200px] z-40 flex items-center justify-end px-4 sm:px-6 lg:px-8 py-4 pointer-events-none">
    <Link
      to="/ai-engineering"
      className="pointer-events-auto px-4 sm:px-5 py-2 text-sm font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
    >
      Become a member
    </Link>
  </header>
);

export default TopBar;
