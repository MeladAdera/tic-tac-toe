

function Sqr({ id }){
  const handleClick = () => {
      console.log(id); // تأكد أن id معرف في مكان ما
  };

  return (
      <div className="square ${go}" onClick={handleClick}></div>
  );
}

export default Sqr;
