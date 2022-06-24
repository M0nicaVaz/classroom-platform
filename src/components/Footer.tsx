import { GithubLogo } from 'phosphor-react';
import { LinkedinLogo } from 'phosphor-react';

export function Footer() {
  return (
    <footer className="w-full bg-gray-700 border-t border-green-900 p-6">
      <div className="w-full flex items-center justify-center lg:justify-end ">
        <div className="flex items-center gap-2 ">
          <span className="ml-6 text-xs text-gray-200">me dê um oi</span>
          <a href="https://github.com/m0nicavaz">
            <GithubLogo size={20} className="hover:text-blue-500" />
          </a>

          <a href="https://www.linkedin.com/in/monica-vaz/">
            <LinkedinLogo size={20} className="hover:text-blue-500" />
          </a>
        </div>
      </div>
    </footer>
  );
}
