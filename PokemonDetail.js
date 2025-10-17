import React,{useState, useEffect} from "react";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";

import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function PokemonDetail() {
    const location = useLocation();
    const navigate = useNavigate();
    const [pokemonData, setPokemonData] = useState(null);
    const [loading, setLoading] = useState(true);

    const { name, url } = location.state || {};

    useEffect(() => {
        if (!url) {
            setLoading(false);
            return;
        }

        const fetchPokemonDetails = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error("Network response was not ok");
                const data = await response.json();
                setPokemonData(data);
            } catch (error) {
                console.error("Error fetching Pokémon details:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemonDetails();
    }, [url]);

    if (loading) return <div>Cargando detalles de {name || "..." }...</div>;
    if (!name && !pokemonData) return <div>No se encontró el Pokémon</div>;

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <button
                onClick={() => navigate("/")}
                style={{ marginBottom: "20px", padding: "10px 20px" }}
            >
                Volver
            </button>

            <h1 style={{ textTransform: "capitalize" }}>{name}</h1>

            {pokemonData && (
                <div>
                    <img
                        src={pokemonData.sprites?.front_default}
                        alt={name}
                        style={{ width: 200, height: 200 }}
                    />
                    <h3>estadisticas</h3>
                    <ul>style={{}}</ul>
                </div>
            )}
        </div>
    );
}