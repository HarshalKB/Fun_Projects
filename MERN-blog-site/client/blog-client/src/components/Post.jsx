function Post() {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://images.pexels.com/photos/18473907/pexels-photo-18473907/free-photo-of-sunlight-in-park-in-summer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Blog 1 Image"
        />
      </div>
      <div className="texts">
        <h2>The Importance of going outside.</h2>
        <p className="info">
          <a className="author">Harshal</a>
          <time>15-02-2024 18:40</time>
        </p>
        <p className="summary">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
          dolorum aut maxime? Atque placeat nostrum ratione accusantium
        </p>
      </div>
    </div>
  );
}

export default Post;
