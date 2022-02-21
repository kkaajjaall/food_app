
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
const Header = (Props) => {
  return (
      <div>
          <header className={classes.header}>
              <h1>FOOD ## FOOD </h1>
              <HeaderCartButton onshow={Props.onshow}/>
          </header>
      </div>
  );
};
export default Header;









