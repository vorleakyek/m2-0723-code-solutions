export default function PokemonList({ pokedex }) {
  return (
    <ul>
      {pokedex.map((poke) => (
        <li key={poke.number}>{poke.name}</li>
      ))}
    </ul>
  );
}
