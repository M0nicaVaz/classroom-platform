import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ptBR from 'date-fns/locale/pt-BR';
import classNames from 'classnames';

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

  const { slug } = useParams<{ slug: string }>();
  const isLessonSelected = slug === props.slug;

  return (
    <Link
      to={`${isLessonAvailable ? `/event/lesson/${props.slug}` : ''}`}
      className={classNames('group', {
        'cursor-not-allowed opacity-50': !isLessonAvailable,
      })}
    >
      <span className="text-gray-300">{availabeDateFormated}</span>

      <div
        className={classNames(
          'rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-colors',
          { 'bg-green-500': isLessonSelected }
        )}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={classNames(
                'text-sm  font-medium flex items-center gap-2 text-blue-500',
                {
                  'text-gray-100': isLessonSelected,
                }
              )}
            >
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

        <strong className="text-gray-100  mt-5 block ">{props.title}</strong>
      </div>
    </Link>
  );
}
