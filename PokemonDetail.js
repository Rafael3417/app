import React,{useState, useEffect} from "react";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";

function PokemonDetail() {
    const location = useLocation();
    const Navigate = useNavigation();
    const [pokemoData, setPokemonData] = useState(null);
    const [loading, setLoading] = useState(true);

    const { name, url } = location.state || {};

    useEffect(() => {
        if(url){
            const fetchPokemonDetails = async () => {
                try {
                    const
                }
            }
        }
    })
}