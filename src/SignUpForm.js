import React, { useState } from 'react';

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://postman-echo.com/get', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Réponse de l\'API:', data);
      // Effectuez ici les actions supplémentaires en fonction de la réponse de l'API
    } else {
      const errorData = await response.json();
      setError(errorData);
      console.log('Erreur de l\'API:', errorData);
    }

    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* ...le reste du code du formulaire */}
      {error && <p>Erreur de l'API : {error.message}</p>}
    </form>
  );
};


    console.log('Données soumises :', {
      username,
      email,
      password
    });

    // Réinitialisez les champs du formulaire après la soumission
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nom d'utilisateur:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Mot de passe:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">S'inscrire</button>
    </form>
  );
};

export default SignUpForm;