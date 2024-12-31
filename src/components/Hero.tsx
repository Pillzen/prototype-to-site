import { useState } from 'react';

export const Hero = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="relative min-h-[70vh] flex flex-col items-center justify-center px-4 hero-gradient">
      <div className="animate-fade-up text-center space-y-6 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Deepseek <span className="text-primary">Artifacts</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          Let the world's best open source model create a react app for you.
        </p>
        <div className="flex items-center justify-center text-sm text-muted-foreground">
          <span>Responses are saved in the open dataset</span>
          <a href="#" className="text-primary hover:underline ml-2">react-code-instructions</a>
          <span className="ml-2">· Help us add to it!</span>
        </div>
        <div className="relative max-w-2xl mx-auto w-full">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Describe your dream react app..."
            className="w-full px-4 py-3 bg-secondary rounded-lg border border-muted focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-200"
          />
          <div className="absolute inset-0 -z-10 blur-xl bg-primary/20 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};