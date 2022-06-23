import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import { Link, useLocation } from 'react-router-dom';
import ptBR from 'date-fns/locale/pt-BR';

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
  const isLessonAvailable = isPast(props.availableAt);
  const availabeDateFormated = format(
    props.availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    { locale: ptBR }
  );

  const { pathname } = useLocation();
  const isLessonSelected = pathname.includes(props.slug);

  return (
    <div>
      {isLessonSelected ? (
        <Link to={`/event/lesson/${props.slug}`} className="group">
          <span className="text-gray-300">{availabeDateFormated}</span>
          <div className="rounded border border-gray-500 p-4 mt-2 bg-green-500 group-hover:border-green-500 transition-colors">

            <header className="flex items-center justify-between">
              {isLessonAvailable ? (
                <span className="text-sm text-gray-100 font-medium flex items-center gap-2 ">
                  <CheckCircle size={20} />
                  Conteúdo Liberado
                </span>
              ) : (
                <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                  <Lock size={20} />
                  Em Breve
                </span>
              )}

              <span className="text-xs rounded px-2 py-[0.125rem] text-white border border-green-900 font-bold ">
                {props.type == 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
              </span>
            </header>

            <strong className="text-gray-100  mt-5 block ">
              {props.title}
            </strong>

          </div>
        </Link>
      ) : (
        <Link to={`/event/lesson/${props.slug}`} className="group">
          <span className="text-gray-300">{availabeDateFormated}</span>

          <div className="rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 group-active:bg-green-500 transition-colors">
            <header className="flex items-center justify-between">
              {isLessonAvailable ? (
                <span className="text-sm text-blue-500 font-medium flex items-center gap-2 group-active:text-gray-100 ">
                  <CheckCircle size={20} />
                  Conteúdo Liberado
                </span>
              ) : (
                <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                  <Lock size={20} />
                  Em Breve
                </span>
              )}

              <span className="text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold group-active:border-green-900 ">
                {props.type == 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
              </span>
            </header>

            <strong className="text-gray-200 mt-5 block group-active:text-gray-100 ">
              {props.title}
            </strong>
            
          </div>
        </Link>
      )}
    </div>
  );
}
