import * as React from 'react';
import { cva } from 'class-variance-authority';

import { cn } from '../../lib/utils';

const buttonVariants = cva(
	'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
	{
		variants: {
			variant: {
				default: 'bg-white text-slate-950 hover:bg-slate-200',
				outline:
					'border border-white/15 bg-transparent text-white hover:bg-white/10',
				secondary: 'bg-slate-900 text-white hover:bg-slate-800',
				ghost: 'text-white hover:bg-white/10',
			},
			size: {
				default: 'h-10 px-4 py-2',
				sm: 'h-9 px-3',
				lg: 'h-11 px-6',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
);

const Button = React.forwardRef(
	({ className, variant, size, ...props }, ref) => {
		return (
			<button
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	},
);
Button.displayName = 'Button';

export { Button, buttonVariants };
