import { useState } from "react";
import "./App.css";
import khodamList from "./data/khodam.json";
import Header from "./Components/Header";
import Body from "./Components/Body";

function App() {
  const [name, setName] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const checkKhodam = () => {
    if (name.trim() === "") {
      alert("Masukkan nama terlebih dahulu");
      return;
    }
    setLoading(true); // Memulai loading
    setResult(null); // Menghapus hasil sebelumnya jika ada
    // Memilih khodam secara acak dari daftar
    setTimeout(() => {
      const randomKhodam = khodamList[Math.floor(Math.random() * khodamList.length)];
      setResult(randomKhodam);
      setLoading(false); // Menutup loading
    }, 2500); // Simulasi waktu yang dibutuhkan
  };

  const reset = () => {
    setName("");
    setResult(null);
    setLoading(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Header
          name={name}
          setName={setName}
          loading={loading}
          onCheckKhodam={checkKhodam}
        />
      </header>
      <Body name={name} result={result} onReset={reset} loading={loading} />
    </div>
  );
}

export default App;
