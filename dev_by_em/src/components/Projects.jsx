function Projects() {
  const ProjectCards = [
    {
      id: 1,
      name: "Tea Round Maker",
      href: "#",
      price: "HTML, Tailwind CSS, JS, Vue",
      imageSrc: "https://placehold.co/600x600",
      imageAlt: "Tea round maker"
    },
    {
      id: 2,
      name: "Weather Dashboard",
      href: "#",
      price: "HTML, Tailwind CSS, JS, React",
      imageSrc: "https://placehold.co/600x600",
      imageAlt: "Describe image for project two"
    },
    {
      id: 3,
      name: "Project Three",
      href: "#",
      price: "HTML, Tailwind CSS, JS, React",
      imageSrc: "https://placehold.co/600x600",
      imageAlt: "Description of image for Project Three"
    },
    {
      id: 4,
      name: "Project Four",
      href: "#",
      price: "HTML, Tailwind CSS, JS, React",
      imageSrc: "https://placehold.co/600x600",
      imageAlt: "Describe image for Project Four"
    }
  ];

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {ProjectCards.map((Projects) => (
              <a key={Projects.id} href={Projects.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    alt={Projects.imageAlt}
                    src={Projects.imageSrc}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{Projects.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {Projects.price}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Projects;
