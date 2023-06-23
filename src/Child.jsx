const Child = (props) => {
  const { name, email , priec} = props;
  
  return (
    <div>
      <p>{name}</p>
      <p>{email}</p>
    </div>
  );
};


export default Child;