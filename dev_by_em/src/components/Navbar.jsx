function Navbar() {
  const navigation = [
    { name: "About", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Contact", href: "#" }
  ];

  return (
    <>
      <div className="flex justify centre">
        <h1>This is the Navbar componant</h1>
        <h1>This is another nav line</h1>
      </div>
    </>
  );
}
export default Navbar;
