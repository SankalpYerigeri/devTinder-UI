// eslint-disable-next-line react/prop-types
const UserCard = ({user}) =>
{
    // eslint-disable-next-line react/prop-types
    const {firstName, lastName, age, gender} = user;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={lastName}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName}</h2>
    <p>{age}, {gender}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Interetsed</button>
      <button className="btn btn-primary">Ignore</button>
    </div>
  </div>
</div>
    )
}

export default UserCard;