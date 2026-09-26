import React from 'react';

export default function App() {
  const breeds = [
    {
      name: 'Labrador Retriever',
      image: 'https://images.unsplash.com/photo-1583511650687-5e2f9f8c5a4b?auto=format&fit=crop&w=400&q=80',
      description: 'Friendly, outgoing, and high-spirited, Labradors are great family dogs.'
    },
    {
      name: 'French Bulldog',
      image: 'https://images.unsplash.com/photo-1583511650687-5e2f9f8c5a4b?auto=format&fit=crop&w=400&q=80',
      description: 'Small, muscular, and affectionate, French Bulldogs love to cuddle.'
    },
    {
      name: 'Golden Retriever',
      image: 'https://images.unsplash.com/photo-1583511650687-5e2f9f8c5a4b?auto=format&fit=crop&w=400&q=80',
      description: 'Optimistic, friendly, and trustworthy, Golden Retrievers are a joy to be around.'
    },
    {
      name: 'Poodle',
      image: 'https://images.unsplash.com/photo-1583511650687-5e2f9f8c5a4b?auto=format&fit=crop&w=400&q=80',
      description: 'Intelligent and active, Poodles are known for their elegant appearance.'
    },
    {
      name: 'Beagle',
      image: 'https://images.unsplash.com/photo-1583511650687-5e2f9f8c5a4b?auto=format&fit=crop&w=400&q=80',
      description: 'Curious, friendly, and merry, Beagles are great companions for all ages.'
    }
  ];

  const styles = {
    app: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#ffe6f2',
      minHeight: '100vh',
      color: '#333'
    },
    header: {
      textAlign: 'center',
      padding: '2rem 0',
      backgroundColor: '#ffb3d9',
      color: '#fff'
    },
    title: {
      fontSize: '2.5rem',
      margin: 0
    },
    main: {
      padding: '1rem',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      margin: '1rem',
      width: '260px',
      overflow: 'hidden',
      textAlign: 'center'
    },
    image: {
      width: '100%',
      height: '180px',
      objectFit: 'cover'
    },
    content: {
      padding: '1rem'
    },
    breedName: {
      fontSize: '1.25rem',
      margin: '0.5rem 0'
    },
    description: {
      fontSize: '0.9rem',
      color: '#555'
    }
  };

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <h1 style={styles.title}>Barbie's Puppy Parade</h1>
      </header>
      <main style={styles.main}>
        {breeds.map((breed, index) => (
          <article key={breed.name} style={styles.card}>
            <img
              src={breed.image}
              alt={breed.name}
              style={styles.image}
              loading="lazy"
            />
            <div style={styles.content}>
              <h2 style={styles.breedName}>{breed.name}</h2>
              <p style={styles.description}>{breed.description}</p>
            </div>
          </article>
        ))}
      </main>
    </div>
  );
}
