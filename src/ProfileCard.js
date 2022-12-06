function ProfileCard({ title, handle, image, description, link }) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="pda logo" />
        </figure>
      </div>

      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{handle}</p>
        </div>
        <div className="content">{description}</div>
        <div className="button">
          <a href={link} target="_blank">
            Go to official website ...
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
