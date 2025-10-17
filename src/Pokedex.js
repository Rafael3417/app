import React, { useState, useEffect } from "react";

function Tableta() {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    "https://pokeapi.co/api/v2/pokemon?limit=100"
                );
                if (!response.ok) {
                    throw new Error("Error al cargar los pokemones");
                }
                const data = await response.json();
                setPokemons(data.results);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchPokemons();
    }, []);

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Lista pokemon</h1>
            <ul>
                {pokemons.map((pokemon, index) => (
                    <li key={index}>{pokemon.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Tableta;