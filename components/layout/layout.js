import MainHeader from "./main-header";

function Layout({ children }) {
  return (
    <div className="h-full">
      <MainHeader/>
      <main className="h-full">{children}</main>
    </div>
  );
}

export default Layout;
