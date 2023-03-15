import useCharacters from '../hooks/useCharacters';

const Header = ({}) => {
  const { visibleItems, totalItems } = useCharacters();

  const content = (
    <header className='header'>
      <div className='header__title-bar'>
        <h1>Star Wars Character Search</h1>
        <div className='header__price-box'>
          <p>Total Items: {totalItems}</p>
          <p>Showing: {visibleItems}</p>
        </div>
      </div>
    </header>
  );

  return content;
};
export default Header;
