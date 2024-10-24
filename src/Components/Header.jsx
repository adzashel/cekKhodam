const Header = ({ name, setName, loading, onCheckKhodam }) => {
  return (
    <>
      <h1>Cek Khodam Anda</h1>
      <p>Masukan nama anda</p>
      <div className="form__group field">
        <input
          type="text"
          className="form__field"
          placeholder="Enter your name..."
          required=""
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={ (e) => {
            if(e.key === "Enter") {
              onCheckKhodam();
            }
          }}
        />
        <label for="name" className="form__label">
        </label>
      </div>
      <button onClick={onCheckKhodam} style={{ color: "black"}}>
        {loading ? "Loading" : "Cek Khodam"}
      </button>
    </>
  );
};

export default Header;
