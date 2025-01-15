import Link from "next/link";
import PageRoutes from "@/app/(misc)/PageRoutes";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar bg-base-10 margin-left-neg-offset">
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={PageRoutes.Home}>home</Link>
            </li>
            <li>
              <Link href={PageRoutes.Work}>work</Link>
            </li>
            <li>
              <Link href={PageRoutes.Blog}>blog</Link>
            </li>
            {/* <li>
              <Link href={PageRoutes.Contact}>contact</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
