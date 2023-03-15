const Footer = ({}) => {
  const year: number = new Date().getFullYear();

  const pageContent = (
    <>
      <p>Star Wars Characters &copy; {year}</p>
    </>
  );

  const content = <footer className='footer'>{pageContent}</footer>;

  return content;
};
export default Footer;
