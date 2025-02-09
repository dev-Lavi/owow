const categories = [
    { name: "Necklaces", img: "/necklace.jpg" },
    { name: "Earrings", img: "/earrings.jpg" },
    { name: "Bracelets", img: "/bracelets.jpg" },
    { name: "Rings", img: "/rings.jpg" },
    { name: "Charms", img: "/charms.jpg" },
  ];
  
  const Categories = () => {
    return (
      <div className="text-center my-10">
        <h2 className="text-3xl font-semibold">Shop by Category</h2>
        <p className="italic text-gray-500">Indulge in what we offer.</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
          {categories.map((cat) => (
            <div key={cat.name} className="text-center">
              <img src={cat.img} alt={cat.name} className="w-full h-40 object-cover rounded-lg" />
              <p className="mt-2">{cat.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Categories;
  