export default function PlaylistPage({
    params
  }: {
    params: { id: string }
  }) {
    return (
      <div>
        <h1>Playlist {params.id}</h1>
        {/* Conteúdo da playlist */}
      </div>
    )
}