import { colors } from '@monorepo-ds-boilerplate/tokens';
import { getContrast } from 'polished';
import { cn } from '../../../../lib/tailwind';

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => {
    const textColor = getContrast(color, '#FFF') < 3.5 ? 'text-black' : 'text-white';

    return (
      <div key={key} className="p-8 transition-colors" style={{ backgroundColor: color }}>
        <div className={cn('flex justify-between font-mono', textColor)}>
          <strong>${key}</strong>
          <span>{color}</span>
        </div>
      </div>
    );
  });
}
