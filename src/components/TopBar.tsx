import { Link } from "react-router-dom";

const TopBar = () => (
  <header className="fixed top-0 left-[140px] right-0 z-40 flex items-center justify-end px-8 py-4">
    <Link
      to="/ai-engineering"
      className="px-5 py-2 text-sm font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
    >
      Become a member
    </Link>
  </header>
);

export default TopBar;
