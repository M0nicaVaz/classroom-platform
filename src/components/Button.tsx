interface ButtonProps {
  variant: 'blue' | 'green';
  children?: React.ReactNode;
}

export function Button({ variant, children }: ButtonProps) {
  return (
    <div>
      {variant == 'blue' ? (
        <a
          href=""
          className="p-4 text-sm border border-blue-500 
              text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors"
        >
          {children}
        </a>
      ) : (
        <a
          href=""
          className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors"
        >
          {children}
        </a>
      )}
    </div>
  );
}
