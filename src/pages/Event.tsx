import { useNavigate, useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Streaming } from '../components/Streaming';
import { Video } from '../components/Video';

export function Event() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? (
          <Video lessonSlug={slug} />
        ) : (
          <div className="max-w[100vw] flex-1 flex flex-col gap-2 items-center justify-start mt-48 text-center">
            <Streaming width={326} height={205} />
            <span className="leading-loose text-xl text-gray-200 ">
              Escolha uma aula!
            </span>
          </div>
        )}
        <Sidebar />
      </main>
    </div>
  );
}
