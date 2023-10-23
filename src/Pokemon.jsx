import { useGetPokemonByNameQuery } from './services/pokemon'

export const Pokemon = ({ name }) => {
  const {
    data,
    error,
    isLoading,
    isFetching,
    refetch,
  } = useGetPokemonByNameQuery()
	console.log(data.data)

  return (
    <div style={{ float: 'left', textAlign: 'center' }}>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.data[0].id}</h3>
        </>
      ) : (
        'No Data'
      )}
    </div>
  )
}
