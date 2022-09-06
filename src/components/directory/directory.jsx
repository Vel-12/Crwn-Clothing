import Categories from "../categories-card/categories";
import './directory.scss'

function directory({ categories }) {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <Categories key={category.id} category={category} />
      ))}
    </div>
  );
}

export default directory;
