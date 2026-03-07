interface TitleDetailsProps {
  title?: {
    posters?: {
      small?: {
        url?: string;
      }
    };
    genres?: string[];
    description?: string;
    type: {
      full_string: string;
      episodes: number;
    };
    season: {
      year: number;
      string: string;
    };
    status: {
      string: string;
    };
    franchises?: any[];
    // я знаю что все это делается отдельно и куда то выносится, а темболее any нельзя тут использовать, сейчас просматриваю проект с гитхаба и не смотрю особо на ошибки, пока делаю тут деструктуризацию пропсов. 
    // Вообще все бы поменял на сегодня в глобальное состояние, но увы. ))
  };
  getSeasons?: () => React.ReactNode;
}

const TitleDetails = (props: TitleDetailsProps) => {
  const { title, getSeasond } = props
  return (
    <div className="flex md:flex-row gap-8 mt-4 ml-5 mr-4 border 1px rounded-2xl border-neutral-800 pt-2 pb-2 pr-2 ">
      <img
        src={`https://static-libria.weekstorm.one${title?.posters?.small?.url}`}
        alt=""
        className="rounded-lg object-cover ml-2"
      />
      <div className="flex flex-1">
        <div className="inline-block max-h-[850px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 dark:bg-white/10"></div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col">
          <p className="font-medium text-xl">
            Жанры: {title?.genres?.join(", ")}
          </p>
        </div>
        <p className="text-base md:text-lg text-neutral-600 hidden md:block">
          {props.title?.description}
        </p>
        <hr className="h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
        <div className="text-xl semibold font-semibold">
          Информация об аниме - {title?.type.full_string}
        </div>
        <div className="text-xl font-sans">
          Год выхода - {title?.season.year}
        </div>
        <div className="text-xl font-sans">
          Количество эпизодов - {title?.type.episodes}
        </div>
        <div className="text-xl font-sans">
          Статус - {props.title?.status.string}
        </div>
        <div className="text-xl font-sans">
          Аниме - {props.title?.season.string}
        </div>

        <div className="border 1px rounded-2xl border-neutral-800 p-1 w-5/6">
          <div>
            <p className="text-xl ml-1">Все сезоны этого аниме</p>
            <hr className="my-2 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
          </div>
          <div className="flex">
            {title?.franchises && getSeasond()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleDetails;
