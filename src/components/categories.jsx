import "../styles/categories.css"
import NecklaceImg from "../assets/images/img1.svg";
import EarringsImg from "../assets/images/img2.svg";
import BraceletsImg from "../assets/images/img3.svg";
import RingsImg from "../assets/images/img4.svg";
import CharmsImg from "../assets/images/img5.svg";

const categories = [
  { name: "Necklaces", img: NecklaceImg },
  { name: "Earrings", img: EarringsImg },
  { name: "Bracelets", img: BraceletsImg },
  { name: "Rings", img: RingsImg },
  { name: "Charms", img: CharmsImg },
];

const Categories = () => {
  return (
    <div className="text-center my-10">
      <h2 className="text-3xl font-semibold">Shop by Category</h2>
      <br></br>
      <p className="italic text-gray-500">Indulge in what we offer.</p>
      <div className="category-grid mt-4">
  {categories.map((cat) => (
    <div key={cat.name} className="category-item">
      <img src={cat.img} alt={cat.name} className="category-image" />
      <p className="mt-2">{cat.name}</p>
    </div>
  ))}
</div>

    </div>
  );
};

export default Categories;
