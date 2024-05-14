import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const KursyForm = () => {
    const kursy = ["Programwoanie w C#", "Angular dla poczatkujacych", "Kurs Django"];
    const [imie, setImie] = useState('');
    const [nazwisko, setNazwisko] = useState('');
    const [wybranyKurs, setWybranyKurs] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (imie && nazwisko && wybranyKurs) {
            alert(`${imie} ${nazwisko} zapisal sie na ${wybranyKurs}`);
        } else {
            alert('Brak danych');
        }
    };

    return (
  <div className="container">
      <h1>Liczba kursów: {kursy.length}</h1>
      <ol>
      {kursy.map((kurs, index) => (
          <li key={index}>{kurs}</li>
           ))}
    </ol>
      <form onSubmit={handleSubmit}>
  <div className="mb-3">
  <label htmlFor="imie" className="form-label">Imię</label>
    <input
   type="text"
   className="form-control"
   id="imie"
   value={imie}
   onChange={(e) => setImie(e.target.value)}
    />
 </div>
  <div className="mb-3">
    <label htmlFor="nazwisko" className="form-label">Nazwisko</label>
    <input
      type="text"
      className="form-control"
      id="nazwisko"
      value={nazwisko}
      onChange={(e) => setNazwisko(e.target.value)}
    />
       </div>
        <div className="mb-3">
       <label htmlFor="kurs" className="form-label">Kurs</label>
         <select
      className="form-select"
      id="kurs"
      value={wybranyKurs}
     onChange={(e) => setWybranyKurs(e.target.value)}
    >
        <option value="">Wybierz kurs</option>
       {kursy.map((kurs, index) => (
        <option key={index} value={kurs}>{kurs}</option>
        ))}
   </select>
    </div>
    <button type="submit" className="btn btn-primary">Dodaj do kursu</button>
  </form>
    </div>
    );
};

export default KursyForm;