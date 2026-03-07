import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import genresRenderingStore from "../../shared/store/stores-api-main/genres-store-api/genres-rendering-store";

export const GenresItemPage = observer(() => {
  const { getRenderGenres, genres, getRenderAllTitlesGenres, genreGenerate } =
    genresRenderingStore;
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      getRenderGenres(id);
      getRenderAllTitlesGenres(id);
    }
  }, [id]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-12">
        {Array.isArray(genres) && genres.length > 0 ? (
          genres.map((item) => (
            <div
              key={item.id}
              className="bg-neutral-800 rounded-xl p-6 shadow-lg"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-white">{item.name}</h2>
                <span className="bg-neutral-700 text-white px-4 py-2 rounded-full text-sm">
                  {item.total_releases} релизов
                </span>
              </div>
              {item.image?.preview && (
                <img
                  className="w-full max-w-md rounded-lg"
                  src={`https://static-libria.weekstorm.one${item.image.preview}`}
                  alt={item.name}
                />
              )}
            </div>
          ))
        ) : (
          <div className="text-center text-neutral-400 py-8">
            Извините, данные не найдены...
          </div>
        )}
      </div>

      {/* Релизы */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-white mb-8">Релизы</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {genreGenerate.length > 0 ? (
            genreGenerate.map((item) => (
              <div
                key={item.id}
                className="bg-neutral-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <div className="relative pb-[150%]">
                  {item.poster?.optimized?.src && (
                    <img
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      src={`https://static-libria.weekstorm.one${item.poster.optimized.src}`}
                      alt={item.name.main}
                    />
                  )}
                </div>
                <div className="p-4">
                  <h4 className="text-white font-medium truncate">
                    {item.name.main}
                  </h4>
                  <div className="flex gap-3 mt-2 text-sm text-neutral-400">
                    <span>{item.year}</span>
                    <span>{item.type.description}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-neutral-400 py-8">
              Нет доступных релизов
            </div>
          )}
        </div>
      </div>
    </div>
  );
});
